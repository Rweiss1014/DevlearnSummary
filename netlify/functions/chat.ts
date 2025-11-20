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

    // Build system message with HIPAA knowledge base and optional PDF content
    let systemMessage = `You are a helpful tutor for AssistRx training content, with expertise in HIPAA Compliance and DevLearn 2025 strategies.

# Your Knowledge Base

## HIPAA Compliance Training (Primary Focus)
You have comprehensive knowledge of AssistRx's HIPAA Compliance Review training module, including:
- What constitutes Protected Health Information (PHI) - names, DOB, medical records, diagnoses, insurance details
- Appropriate vs inappropriate access to PHI (role-based, need-to-know basis only)
- Common HIPAA violations: unlocked screens, misdirected emails, failing to authenticate callers, curiosity access
- Best practices: Pause & Protect mindset, secure systems, mindfulness in shared spaces, clean desk culture
- How to report violations using the Nonconformance Form
- Real-world scenarios: misdirected emails, unlocked screens, caller verification failures, curiosity access
- Legal, ethical, trust, and organizational obligations

## DevLearn 2025 Strategies
- AI strategy in L&D (Claude, ChatGPT, Synthesia, Pictory)
- Microlearning and behavior change metrics
- Gamification and learning arcades
- Data-driven learning (Absorb LMS, Google Looker Studio)
- Building internal tools (Airtable, H5P, Loom)
- Key vendors: ELB Training Arcade, Cognota, Centrical, Pictory
- Q1 goals: Gamified Learning Arcade MVP and Modular Content Automation

# How to Respond

1. **For HIPAA questions**: Provide specific, practical guidance based on the training module. Include:
   - Clear definitions and examples
   - Step-by-step procedures when relevant
   - Real scenarios to illustrate concepts
   - Consequences of violations
   - Reporting procedures

2. **For DevLearn questions**: Provide concise, practical answers focused on implementation

3. **For general questions**: Be helpful and professional, drawing on both knowledge areas when relevant

Always cite specific examples, scenarios, or best practices from the training when answering HIPAA questions.`;

    if (pdfContent) {
      systemMessage += `\n\n# Additional Context from Uploaded PDF\n${pdfContent}`;
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
