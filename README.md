# DevLearn 2025 - Interactive Learning Website

An interactive learning platform featuring an AI-powered chatbot tutor that can answer questions based on uploaded PDF modules. Built with React, TypeScript, and deployed on Netlify with serverless functions for secure OpenAI API integration.

## Features

- **AI Chatbot Tutor**: Intelligent chatbot powered by OpenAI that answers questions about DevLearn 2025 content
- **PDF Knowledge Base**: Upload PDF modules to extend the chatbot's knowledge
- **Secure API Integration**: Netlify serverless functions keep your OpenAI API key secure
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive UI**: Built with React, Tailwind CSS, and Radix UI components

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Radix UI
- **Backend**: Netlify Functions (Serverless)
- **AI**: OpenAI GPT-4o-mini
- **PDF Processing**: pdf-parse

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- OpenAI API key (get one at https://platform.openai.com/api-keys)

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd DevlearnSummary2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Add your OpenAI API key to `.env`:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser

### Testing Netlify Functions Locally

To test the serverless functions locally, you'll need the Netlify CLI:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Run the site with functions
netlify dev
```

This will start both the Vite dev server and the Netlify functions on http://localhost:8888

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Netlify.

### Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Important:** After deploying, remember to add your `OPENAI_API_KEY` environment variable in Netlify's site settings.

## Project Structure

```
DevlearnSummary2/
├── netlify/
│   └── functions/          # Serverless functions
│       ├── chat.ts         # OpenAI chat completion endpoint
│       └── upload-pdf.ts   # PDF parsing endpoint
├── src/
│   ├── components/         # React components
│   │   ├── ChatbotTutor.tsx   # Main chatbot component
│   │   ├── PDFUpload.tsx      # PDF upload component
│   │   └── ui/                # Reusable UI components
│   ├── context/
│   │   └── PDFContext.tsx     # PDF state management
│   ├── App.tsx
│   └── main.tsx
├── .env.example           # Environment variables template
├── netlify.toml          # Netlify configuration
├── package.json
└── vite.config.ts        # Vite configuration
```

## How It Works

1. **User uploads a PDF**: The PDF is sent to the `/upload-pdf` Netlify function
2. **PDF is parsed**: The function extracts text content using pdf-parse
3. **Content is stored**: Extracted text is stored in browser localStorage
4. **User asks questions**: Questions are sent to the `/chat` Netlify function
5. **AI responds**: The function sends the question + PDF content to OpenAI
6. **Response displayed**: The AI's response is displayed in the chat interface

## How to Use the PDF Chatbot

1. Navigate to the **Tech Lab: Tutor Chatbot** page
2. Click **Upload PDF** to add your training module or documentation
3. Click the chatbot icon in the bottom-right corner to start chatting
4. Ask questions about the content - the AI will reference both the default content and your PDF

## Customization

### Modify the System Prompt

Edit `netlify/functions/chat.ts` to customize how the chatbot responds:

```typescript
let systemMessage = `You are a helpful tutor for...`;
```

### Change the AI Model

In `netlify/functions/chat.ts`, change the model:

```typescript
model: "gpt-4o-mini",  // Change to "gpt-4" for more advanced responses
```

### Styling

The project uses Tailwind CSS. Modify styles in:
- `src/index.css` - Global styles
- Component files - Component-specific styles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is part of the DevLearn 2025 presentation.

Original Figma design: https://www.figma.com/design/DV0XScKDFInO86OCEJopca/Interactive-Learning-Website

## Support

For issues or questions, please create an issue in the GitHub repository.
