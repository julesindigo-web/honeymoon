# 🚀 Quick Deployment Commands

## Cloudflare Pages Deployment

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
cd honeymoon-app-cloudflare
wrangler pages deploy

# Deploy with custom domain
wrangler pages deploy --project honeymoon-ubud
```

## Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
cd honeymoon-app-netlify
netlify deploy --prod --dir .

# Initialize for continuous deployment
netlify init
```

## Local Development

```bash
# Serve locally (any HTTP server)
cd honeymoon-app-cloudflare
python -m http.server 8000
# or
npx serve .

# For Netlify version
cd honeymoon-app-netlify
netlify dev
```

## Git Setup

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit - Honeymoon Ubud Web App"

# Add remote (replace with your repo)
git remote add origin https://github.com/julesindigo-web/honeymoon.git
git push -u origin main
```
