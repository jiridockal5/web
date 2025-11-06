# 🚀 Quick Deploy Guide

## ⚡ Fastest Path to Production (5 minutes)

### Step 1: Push to GitHub
\`\`\`bash
cd /workspace/my-app
git init
git add .
git commit -m "Initial commit - ready to deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
\`\`\`

### Step 2: Deploy on Netlify (RECOMMENDED ⭐)

1. **Go to:** https://app.netlify.com/start
2. **Click:** "Import an existing project"
3. **Connect:** Your GitHub account
4. **Select:** Your repository
5. **Settings are auto-detected from netlify.toml:**
   - Build command: `npm run build`
   - Publish directory: `build`
6. **Click:** "Deploy site"
7. **Done!** Your site is live in ~2 minutes ✅

### Step 3: Add Custom Domain (Optional)
1. **In Netlify:** Site settings → Domain management
2. **Add:** your custom domain (e.g., jiridockal.com)
3. **Update DNS:** Add CNAME record at your registrar
4. **Wait:** 5-60 minutes for DNS propagation
5. **Done!** HTTPS is automatic 🔒

---

## 🎯 Alternative: Vercel

1. **Go to:** https://vercel.com/new
2. **Import:** Your GitHub repository
3. **Configure:**
   - Framework: SvelteKit
   - Root directory: Leave as is
   - Build settings: Auto-detected
4. **Deploy!** Live in ~2 minutes

---

## 💡 What You Get

✅ **Live website** with global CDN  
✅ **HTTPS** automatically  
✅ **Custom domain** support  
✅ **Deploy previews** for every commit  
✅ **Free hosting** forever  

---

## 📋 Build Settings Reference

If settings aren't auto-detected:
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Install command:** `npm install --legacy-peer-deps`
- **Node version:** 20.x

---

## 🆘 Issues?

**Build fails?**
- Check you're on the correct branch (main)
- Verify `my-app` is the root or set correct build directory

**Need more info?**
- See full guide: `DEPLOYMENT.md`

---

**That's it! You're live! 🎉**

Your URL will be:
- **Netlify:** `https://your-site-name.netlify.app`
- **Vercel:** `https://your-project-name.vercel.app`

Then add your custom domain to make it professional! 🚀
