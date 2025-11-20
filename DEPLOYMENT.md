# Deployment Guide for Netlify

This guide will walk you through deploying your DevLearn 2025 Interactive Learning Website to Netlify.

## Prerequisites

1. A [Netlify account](https://app.netlify.com/signup) (free tier works fine)
2. An [OpenAI API key](https://platform.openai.com/api-keys)
3. A GitHub account (if deploying from GitHub)

## Option 1: Deploy from GitHub (Recommended)

### Step 1: Push to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize Netlify
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`

### Step 3: Add Environment Variables

Before deploying, add your OpenAI API key:

1. In your Netlify site dashboard, go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add the following:
   - **Key:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key from https://platform.openai.com/api-keys
   - **Scopes:** Select both "Same value for all deploy contexts"

### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at a URL like `https://random-name-123456.netlify.app`

### Step 5: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your domain

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Initialize and Deploy

```bash
# Initialize the site
netlify init

# Deploy to production
netlify deploy --prod
```

### Step 4: Add Environment Variables

```bash
netlify env:set OPENAI_API_KEY "your-api-key-here"
```

## Option 3: Manual Deploy via Netlify Drop

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

4. After deployment, add environment variables:
   - Go to **Site settings** → **Environment variables**
   - Add `OPENAI_API_KEY` with your OpenAI API key

**Note:** With manual deploy, you'll need to manually upload the `dist` folder each time you make changes. GitHub integration is recommended for automatic deployments.

## Using the Chatbot with PDF Module

### Step 1: Upload Your PDF

1. Navigate to the **Tech Lab: Tutor Chatbot** page
2. Click the **"Upload PDF"** button in the Knowledge Base section
3. Select your PDF module file
4. Wait for the upload to complete

### Step 2: Test the Chatbot

1. Click the chatbot icon in the bottom-right corner
2. Ask questions related to your PDF content
3. The chatbot will respond based on both the default DevLearn content and your uploaded PDF

**Note:** The PDF content is stored in your browser's localStorage, so it persists across sessions but is local to each user's browser.

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify Node.js version (should be 18.x or higher)
- Check build logs in Netlify dashboard

### Chatbot Not Responding

- Verify `OPENAI_API_KEY` is set correctly in Netlify environment variables
- Check the browser console for errors
- Verify the Netlify Functions are deployed (check Functions tab in dashboard)

### PDF Upload Not Working

- Ensure your PDF is a valid PDF file (not a scanned image)
- Check file size (large PDFs may take longer to process)
- Check browser console for errors

## Cost Considerations

### Netlify

- **Free tier includes:**
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Unlimited sites
  - Serverless functions (125k requests/month)

### OpenAI

- Costs depend on API usage
- GPT-4o-mini is very cost-effective: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- Estimated cost for typical usage: $5-20/month depending on traffic

## Security Notes

1. **Never commit your OpenAI API key** to Git (it's in `.env.example` as a template only)
2. The Netlify Functions keep your API key secure on the server
3. PDF content is stored in browser localStorage (client-side only)
4. Consider adding rate limiting if you expect high traffic

## Next Steps

1. Customize the default system prompt in `netlify/functions/chat.ts`
2. Add analytics to track usage
3. Implement user authentication if needed
4. Add more sophisticated PDF processing (chunking, embeddings, vector search)

## Support

For issues with:
- **Netlify:** Check [Netlify Docs](https://docs.netlify.com)
- **OpenAI:** Check [OpenAI Platform Docs](https://platform.openai.com/docs)
- **This project:** Create an issue in your GitHub repository
