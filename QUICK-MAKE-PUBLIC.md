# ⚡ Quick Guide: Make Your Site Public (2 Steps)

## 🔴 Problem
Your site URL is **password protected** (401 error):
`https://web-git-cursor-prepare-web-hosting-3d9c24-jiri-dockals-projects.vercel.app/`

This is a **preview URL** for a git branch. You need a **production deployment** to make it public!

---

## ✅ Solution: Deploy to Main Branch

### **Step 1: Merge to Main Branch**

Run these commands:

```bash
cd /workspace

# Switch to main branch
git checkout main

# Merge your current work
git merge cursor/prepare-web-hosting-recommendation-91f0

# Push to GitHub (triggers Vercel production deploy)
git push origin main
```

**That's it!** Vercel will automatically deploy your site to production in ~2 minutes. ✅

---

### **Step 2: Get Your Public Production URL**

1. **Go to:** https://vercel.com/dashboard
2. **Click** your project
3. **Look for** the production deployment (usually shows a ✅ checkmark)
4. **Your public URL** will be something like:
   - `https://jiri-dockals-projects.vercel.app`
   - `https://your-project-name.vercel.app`

**This URL is:**
- ✅ Public (no password!)
- ✅ Accessible to everyone
- ✅ Permanent
- ✅ Free with HTTPS

---

## 🚨 If Still Password Protected

### Check Vercel Settings:

1. **Vercel Dashboard** → **Your Project**
2. **Settings** → **Deployment Protection**
3. **Make sure it's set to:** "All Visitors"
4. **NOT** "Password Protection" or "Vercel Authentication"
5. **Save** and **Redeploy**

---

## 🌐 Want a Custom Domain? (Optional)

### Popular domain registrars:
- **Namecheap:** https://namecheap.com (~$10/year)
- **Cloudflare:** https://cloudflare.com (~$9/year)
- **Porkbun:** https://porkbun.com (~$8/year)

### Good domain ideas for a CFO:
- `jiridockal.com`
- `jiridockal.cz`
- `jdockal.com`

### Connect to Vercel:
1. Buy domain
2. In Vercel: **Domains** tab → **Add Domain**
3. Add DNS records (Vercel shows you exactly what to add)
4. Wait 5-60 minutes
5. Done! Auto HTTPS ✅

---

## 📱 Test Your Site is Public

### Try these:

**1. Open in Incognito/Private Browser:**
- Should load immediately without asking for password

**2. Share with a Friend:**
- Send them the URL
- They should see your site

**3. Check from Mobile:**
- Open on your phone
- Should work without login

---

## 🎯 Your Action Items (Right Now)

```bash
# 1. Merge to main (run these commands)
cd /workspace
git checkout main
git merge cursor/prepare-web-hosting-recommendation-91f0
git push origin main

# 2. Wait 2 minutes for Vercel to deploy

# 3. Check your Vercel dashboard for production URL

# 4. Test in incognito browser

# Done! ✅
```

---

## 🎉 Expected Result

After running those commands:

✅ Vercel auto-deploys to production  
✅ Site is public (no password)  
✅ Clean URL: `https://your-project.vercel.app`  
✅ Accessible to everyone, anywhere  
✅ Fast global CDN  
✅ Automatic HTTPS  

---

## 💡 Why Preview URLs Are Protected

- **Preview URLs** (with branch names) are for testing
- Vercel often protects them by default
- **Production URLs** (from main branch) are always public
- This is a security feature to prevent leaking work-in-progress

---

## 🆘 Still Need Help?

See the detailed guide: `MAKE-PUBLIC.md`

Or check Vercel's deployment settings:
- Dashboard → Your Project → Settings → Git
- Make sure "Production Branch" is set to `main`

---

**Bottom Line:** 
1. Run: `git checkout main && git merge cursor/prepare-web-hosting-recommendation-91f0 && git push`
2. Wait 2 minutes
3. Get public URL from Vercel dashboard
4. Done! 🚀
