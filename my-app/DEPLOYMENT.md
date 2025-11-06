# Deployment Guide for Jiri Dockal CFO Website

Your SvelteKit site is configured with the static adapter and ready for deployment! Here are the best hosting options:

---

## 🎯 Recommended Platforms

### 1. **Netlify** ⭐ RECOMMENDED
**Best for: Simplicity and speed**

**Pros:**
- ✅ Free tier with generous bandwidth (100GB/month)
- ✅ Automatic HTTPS with custom domains
- ✅ Built-in CI/CD from Git
- ✅ Great DX with deploy previews
- ✅ Your `_headers` file is already configured for Netlify
- ✅ Excellent performance with global CDN

**Setup Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will auto-detect settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

**Custom Domain:**
- Go to Site settings → Domain management → Add custom domain
- Follow DNS instructions (add CNAME or A record)

**Estimated time:** 5-10 minutes

---

### 2. **Vercel** 
**Best for: Next-gen performance and developer experience**

**Pros:**
- ✅ Free tier (100GB bandwidth)
- ✅ Excellent performance with Edge Network
- ✅ Built-in analytics
- ✅ Great Git integration
- ✅ Automatic HTTPS
- ✅ Preview deployments for PRs

**Setup Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect SvelteKit (or use `vercel.json` settings):
   - Framework Preset: SvelteKit
   - Root Directory: `./my-app` (if deploying from monorepo)
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install --legacy-peer-deps`
6. Click "Deploy"

**Note:** If deploying from workspace root, you may need to set root directory to `my-app` or move files to root.

**Estimated time:** 5-10 minutes

---

### 3. **Cloudflare Pages**
**Best for: Global performance and security**

**Pros:**
- ✅ Free tier (unlimited bandwidth!)
- ✅ Fastest global CDN (300+ locations)
- ✅ Built-in DDoS protection
- ✅ Your `_headers` file works perfectly
- ✅ Git integration
- ✅ Great for international audience

**Setup Steps:**

**Option A: Using Cloudflare Dashboard (Easiest)**
1. Push your code to GitHub/GitLab
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Navigate to "Workers & Pages" → "Create application" → "Pages"
4. Connect your Git repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `build`
   - Root directory: `my-app` (if in subdirectory)
   - Environment variables: `NODE_VERSION=20`
6. Click "Save and Deploy"

**Option B: Using GitHub Actions (Advanced)**
- Already configured in `.github/workflows/deploy-cloudflare.yml`
- Add these secrets to your GitHub repository:
  - `CLOUDFLARE_API_TOKEN` (from Cloudflare dashboard)
  - `CLOUDFLARE_ACCOUNT_ID` (from Cloudflare dashboard)
- Push to main branch to trigger deployment

**Estimated time:** 10-15 minutes

---

### 4. **GitHub Pages**
**Best for: Simple free hosting**

**Pros:**
- ✅ Completely free
- ✅ Built into GitHub
- ✅ Custom domains supported

**Cons:**
- ❌ Requires manual CI/CD setup
- ❌ No automatic HTTPS for custom domains
- ❌ Less features than other platforms

**Setup Steps:**
1. Create `.github/workflows/deploy-gh-pages.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm install --legacy-peer-deps
        working-directory: my-app
      
      - name: Build
        run: npm run build
        working-directory: my-app
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./my-app/build
\`\`\`

2. Enable GitHub Pages in repository settings
3. Push to trigger deployment

**Estimated time:** 15-20 minutes

---

## 📊 Platform Comparison

| Feature | Netlify | Vercel | Cloudflare Pages | GitHub Pages |
|---------|---------|--------|------------------|--------------|
| **Free Bandwidth** | 100GB | 100GB | Unlimited | Unlimited |
| **Build Minutes** | 300/mo | Unlimited | 500/mo | Unlimited |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **Auto HTTPS** | ✅ | ✅ | ✅ | ⚠️ Limited |
| **Deploy Previews** | ✅ | ✅ | ✅ | ❌ |
| **Global CDN** | ✅ | ✅ | ✅ 300+ | ✅ |
| **Setup Time** | 5 min | 5 min | 10 min | 15 min |
| **Best For** | General use | Performance | Enterprise | Simple sites |

---

## 🚀 Quick Start (Any Platform)

### Pre-deployment Checklist:
- ✅ Build succeeds: `npm run build`
- ✅ Preview locally: `npm run preview`
- ✅ Update personal info in the site if needed
- ✅ Test on mobile devices
- ✅ Check all links work
- ✅ Verify Cal.com booking link works

### Build Configuration:
- **Build command:** `npm run build`
- **Output directory:** `build`
- **Node version:** 20
- **Install command:** `npm install --legacy-peer-deps`

---

## 🎨 Custom Domain Setup

### For Netlify/Vercel/Cloudflare:
1. Add custom domain in platform dashboard
2. Update DNS records at your domain registrar:
   - **Option 1 (Recommended):** CNAME record pointing to platform URL
   - **Option 2:** A records pointing to platform IPs
3. Wait for DNS propagation (5 minutes - 48 hours)
4. Platform automatically provisions SSL certificate

### Example DNS Setup:
\`\`\`
Type: CNAME
Name: www
Value: your-site.netlify.app (or vercel.app, pages.dev)

Type: A (or CNAME)
Name: @
Value: [Platform's IP or alias]
\`\`\`

---

## 🔧 Troubleshooting

### Build fails:
- Make sure Node version is 20+
- Use `npm install --legacy-peer-deps`
- Check build logs for specific errors

### Site not loading:
- Verify publish directory is set to `build`
- Check that build completed successfully
- Clear browser cache

### Headers not working:
- Ensure `_headers` file is in the build output
- Check platform-specific header syntax

---

## 💡 My Recommendation

**For your CFO landing page, I recommend Netlify:**

1. ✅ **Easiest setup** - 5 minutes to deploy
2. ✅ **Your project is already configured** - `netlify.toml` and `_headers` are ready
3. ✅ **Perfect for landing pages** - Fast, reliable, professional
4. ✅ **Great free tier** - More than enough for a personal landing page
5. ✅ **Deploy previews** - Test changes before going live
6. ✅ **Custom domain** - Easy setup with automatic HTTPS

### Quick Netlify Deploy:
\`\`\`bash
# 1. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# 2. Go to netlify.com → "Add new site" → Connect GitHub
# 3. Done! Your site is live in ~2 minutes
\`\`\`

---

## 📱 Post-Deployment

After deployment:
1. Test your site on multiple devices
2. Check Google PageSpeed Insights
3. Verify LinkedIn and Cal.com links work
4. Set up Google Analytics (optional)
5. Share your new URL! 🎉

---

## 🆘 Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **Cloudflare Pages:** https://developers.cloudflare.com/pages
- **SvelteKit Docs:** https://kit.svelte.dev/docs/adapter-static

---

**Your site is production-ready!** Choose your preferred platform and deploy in minutes. 🚀
