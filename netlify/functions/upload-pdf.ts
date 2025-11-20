import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import pdf from "pdf-parse/lib/pdf-parse.js";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Get the base64-encoded PDF from the request body
    const { pdfData } = JSON.parse(event.body || "{}");

    if (!pdfData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No PDF data provided" }),
      };
    }

    // Convert base64 to buffer
    const pdfBuffer = Buffer.from(pdfData, "base64");

    // Parse PDF
    const data = await pdf(pdfBuffer);

    // Return the extracted text
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: data.text,
        pages: data.numpages,
        info: data.info,
      }),
    };
  } catch (error) {
    console.error("Error parsing PDF:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Failed to parse PDF"
      }),
    };
  }
};

export { handler };
