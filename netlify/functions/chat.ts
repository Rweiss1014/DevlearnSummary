import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface ChatMessage {
  role: string;
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  pdfContent?: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { messages, pdfContent }: ChatRequest = JSON.parse(event.body || "{}");

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid request: messages array required" }),
      };
    }

    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your Netlify environment variables."
        }),
      };
    }

    // Build system message with PDF content if available
    let systemMessage = `You are a helpful tutor for a DevLearn 2025 presentation debrief. The presentation covers:
- AI strategy in L&D (using tools like Claude, ChatGPT, Synthesia, Pictory)
- Microlearning and behavior change metrics
- Gamification and learning arcades
- Data-driven learning (using tools like Absorb LMS, Google Looker Studio)
- Building internal tools instead of buying (Airtable, H5P, Loom)
- Key vendors: ELB Training Arcade, Cognota, Centrical, Pictory
- Q1 goals: Gamified Learning Arcade MVP and Modular Content Automation

Provide concise, practical answers focused on implementation. Reference specific tools and strategies from the presentation when relevant.`;

    if (pdfContent) {
      systemMessage += `\n\nAdditional context from uploaded PDF:\n${pdfContent}`;
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: `OpenAI API error: ${errorData.error?.message || 'Unknown error'}`
        }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: data.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("Error in chat function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error"
      }),
    };
  }
};

export { handler };
