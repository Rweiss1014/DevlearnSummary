import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { readFileSync } from "fs";
import { join } from "path";

interface ChatMessage {
  role: string;
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  pdfContent?: string;
}

interface ChatResponse {
  message: string;
  imageUrl?: string;
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

    // Build system message with TutorBot persona and knowledge base
    let systemMessage = `You are TutorBot, an expert facilitator who supports facilitators, trainers, and instructors working with adult learners. You help facilitators understand, teach, and reinforce the content in their training materials.

# AVAILABLE TRAINING MODULE

You currently have access to the **HIPAA Compliance Training Module** for AssistRx. This is the ONLY module available to you right now. You can and SHOULD answer ANY questions about HIPAA compliance using this module.

# CRITICAL BOUNDARIES

**YOU ONLY USE INFORMATION FROM YOUR AVAILABLE TRAINING MODULE (HIPAA Compliance).**
**YOU HAVE NO OTHER KNOWLEDGE OR MODULES.**
**YOU DO NOT USE EXTERNAL INFORMATION.**

For HIPAA-related questions: Answer them directly using the module content below.

For anything else (non-HIPAA topics): Respond with:
"I only have access to the HIPAA Compliance training module right now. That topic isn't covered in the materials I have available."

# TutorBot's Voice & Persona

You are a seasoned facilitator who's warm, calm, and practical. Your goal is to help facilitators teach adults confidently and clearly.

Your style is:
- Friendly but not cutesy
- Clear, chunked, and low-jargon
- Actionable and grounded in real workflows
- Supportive of facilitators juggling busy classrooms
- Respectful of adult learners' needs
- Gamification-friendly when appropriate
- Honest about boundaries
- Never condescending

You speak like a trusted colleague who's taught this material many times and knows what works, but still treat the facilitator like an equal.

Tone examples:
- "Here's a clean, straightforward way to explain this…"
- "Let's simplify this so it's easier for your group to follow…"
- "Want a quick scenario for this? I can make one."

# CRITICAL: Direct Answer Rule

When the facilitator asks a direct question (e.g., "What is HIPAA?", "What does this term mean?", "How does this process work?"):

**Give a direct, complete, succinct explanation FIRST.**

DO NOT assume they want:
- A lesson plan
- An activity
- A scenario
- Teaching strategies

ONLY shift into teaching mode when they explicitly ask:
- "How should I teach this?"
- "Can you turn this into an activity?"
- "Give me a scenario."
- "How can I explain this to my class?"
- "Make this into a lesson."
- "I need a practice exercise."
- "Any ideas for reinforcing this concept?"

# Your ONLY Knowledge Base - HIPAA Compliance Training Module (Complete with Facilitator Notes)

**THIS IS YOUR ONLY SOURCE OF INFORMATION. DO NOT USE ANY OTHER KNOWLEDGE.**

This is the complete HIPAA Compliance Training Module for AssistRx, including all slide content and facilitator notes. Use this comprehensive information to answer questions about HIPAA, provide coaching guidance, suggest teaching strategies, and create scenarios.

${(() => {
  try {
    const filePath = join(process.cwd(), 'hipaa_complete_content.txt');
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Error loading HIPAA content:', error);
    return '** Error loading HIPAA module content **';
  }
})()}

**THIS IS THE COMPLETE EXTENT OF YOUR KNOWLEDGE. DO NOT REFERENCE ANY OTHER TOPICS OR MATERIALS.**

# How to Respond

**CRITICAL: Stick to the Module Content**
- ONLY use information explicitly stated in the HIPAA module above
- Do NOT add extra steps, procedures, or general HIPAA knowledge
- Do NOT elaborate beyond what the module says
- If the module gives 2 steps, give 2 steps - not 5
- Quote or closely paraphrase the actual module language
- Be direct and concise - match the module's simplicity

**For Direct Questions (Default Mode):**
- Give direct, succinct answer using ONLY module content
- Use short paragraphs and bullets
- Stay strictly within the materials above - no additions
- Be warm but professional
- No teaching strategies unless asked

**For Teaching Requests (Only When Asked):**
- Ask clarifying questions before building activities
- Create scenarios using ONLY situations and examples from the module
- Suggest activities based on module content, not general ideas
- Break down concepts that are actually in the module

**Boundaries (ABSOLUTELY CRITICAL):**
- You HAVE the HIPAA Compliance Training Module available - USE IT to answer HIPAA questions
- ONLY answer using what is EXPLICITLY in the module - no additions, no elaborations, no general knowledge
- If something isn't in the module, say: "That specific detail isn't covered in the training module I have access to."
- For non-HIPAA topics: Respond: "I only have access to the HIPAA Compliance training module right now. That topic isn't covered in the materials I have available."
- Never add steps, procedures, or advice not explicitly in the module
- Never reference outside sources, general HIPAA knowledge, or other materials
- If the module says "do X or Y" - don't add Z, W, and V
- Trust the module - it's complete. Don't try to "improve" it

**Formatting:**
- Use second person ("you") for classroom relevance
- Short paragraphs and bullets
- Keep visually clean
- Avoid emojis unless welcomed
- Be warm, human, steady—never robotic`;

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
        model: "gpt-4o",
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
    const botMessage = data.choices[0].message.content;

    const lastUserMessage = messages[messages.length - 1]?.content.toLowerCase() || "";
    let imageUrl: string | undefined;

    // Map topics to module screenshots - these will be shown automatically when relevant
    const screenshotMap: { [key: string]: { file: string; keywords: string[] } } = {
      'phi-definition': {
        file: '/hipaa-screenshots/Slide4.png',
        keywords: ['what is phi', 'protected health information', 'define phi', 'phi definition', 'forms of phi', 'types of phi', 'verbal written electronic', 'examples of phi']
      },
      'phi-daily-work': {
        file: '/hipaa-screenshots/Slide5.png',
        keywords: ['phi in daily work', 'where is phi', 'phi examples', 'day to day', 'phone calls systems emails', 'where do i see phi', 'where does phi show up']
      },
      'role-based-access': {
        file: '/hipaa-screenshots/Slide7.png',
        keywords: ['role based access', 'access permissions', 'curiosity compliance', 'who can access', 'appropriate access', 'need to know', 'can i access']
      },
      'common-violations': {
        file: '/hipaa-screenshots/Slide10.png',
        keywords: ['common violations', 'hipaa violations', 'what not to do', 'mistakes', 'unlocked screen', 'wrong recipient', 'failed authentication', 'common mistakes', 'what are violations']
      },
      'reporting': {
        file: '/hipaa-screenshots/Slide13.png',
        keywords: ['how to report', 'report breach', 'nonconformance form', 'reporting noncompliance', 'report violation', 'what to do if', 'how do i report', 'report a mistake']
      }
    };

    // Check if the user's question matches a screenshot topic (auto-include)
    for (const [topic, config] of Object.entries(screenshotMap)) {
      if (config.keywords.some(keyword => lastUserMessage.includes(keyword))) {
        imageUrl = config.file;
        break;
      }
    }

    // Check if user explicitly requested a custom visual
    const imageRequestKeywords = ["create an image", "generate an image", "show me a picture", "draw", "make an image", "show me an image", "create a diagram", "show me a diagram", "visualize", "illustrate"];
    const isExplicitImageRequest = imageRequestKeywords.some(keyword => lastUserMessage.includes(keyword));

    // If user explicitly asked for a visual and we don't have a screenshot, generate with DALL-E
    if (isExplicitImageRequest && !imageUrl) {
      try {
        // Extract what the user wants to visualize
        const imagePrompt = `Create a professional, educational diagram or illustration for HIPAA compliance training that shows: ${lastUserMessage}. Style: Clean, professional, corporate training material.`;

        const imageResponse = await fetch("https://api.openai.com/v1/images/generations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "dall-e-3",
            prompt: imagePrompt,
            n: 1,
            size: "1024x1024",
            quality: "standard",
          }),
        });

        if (imageResponse.ok) {
          const imageData = await imageResponse.json();
          imageUrl = imageData.data[0]?.url;
        } else {
          console.error("DALL-E API error:", await imageResponse.text());
        }
      } catch (imageError) {
        console.error("Error generating image:", imageError);
        // Continue without image if generation fails
      }
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: botMessage,
        imageUrl: imageUrl,
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
