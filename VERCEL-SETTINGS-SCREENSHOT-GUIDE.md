# 📸 Vercel Settings - Visual Step-by-Step Guide

## 🎯 Follow This EXACT Path

### **Step 1: Go to Your Project Settings**

**URL:** https://vercel.com/dashboard

1. Click on your project name
2. You'll see tabs at the top: Overview, Deployments, **Settings**, etc.
3. **Click "Settings"** (has a gear ⚙️ icon)

---

### **Step 2: Find Build Settings**

After clicking Settings, you'll see a sidebar with options:
- General
- Domains
- Git
- **Build & Development Settings** ← CLICK THIS
- Environment Variables
- etc.

**Click on "Build & Development Settings"**

---

### **Step 3: Edit Root Directory**

You'll see a section that looks like this:

```
┌─────────────────────────────────────────────┐
│ Build & Development Settings               │
├─────────────────────────────────────────────┤
│                                             │
│ Root Directory                              │
│ [ .                              ] [Edit]   │
│                                             │
│ Build Command                               │
│ [ npm run build                 ] [Edit]   │
│                                             │
│ Output Directory                            │
│ [ build                          ] [Edit]   │
│                                             │
│ Install Command                             │
│ [ npm install                   ] [Edit]   │
└─────────────────────────────────────────────┘
```

**Critical:** Where it says `Root Directory` with a dot (`.`), you need to change it!

1. **Click "Edit"** button next to Root Directory
2. **Delete** the dot (`.`) 
3. **Type:** `my-app`
4. **Click "Save"**

---

### **Step 4: Update Install Command**

While you're here, also update:

1. **Click "Edit"** next to Install Command
2. **Change to:** `npm install --legacy-peer-deps`
3. **Click "Save"**

---

### **Step 5: Your Settings Should Look Like This**

After editing, verify it looks like this:

```
Root Directory:        my-app              ✅
Build Command:         npm run build       ✅
Output Directory:      build               ✅
Install Command:       npm install --legacy-peer-deps  ✅
```

**NOT like this:**
```
Root Directory:        .                   ❌ (dot means root - WRONG!)
```

---

### **Step 6: Redeploy**

Now you need to trigger a new deployment:

1. **Click "Deployments" tab** (at the top)
2. You'll see a list of your deployments
3. **Find the latest one** (at the top of the list)
4. **Click the three dots (•••)** on the right side
5. **Click "Redeploy"**
6. **Confirm** when asked

---

### **Step 7: Wait for Deployment**

You'll see a progress indicator:

```
🔄 Building...
   ↓
✅ Build Successful
   ↓
🚀 Deploying...
   ↓
✅ Deployment Complete
```

This takes about 1-3 minutes.

---

### **Step 8: Test Your Site**

1. **Click on the deployment** when it's done
2. **Click "Visit"** button
3. **Your site should load!** 🎉

---

## 🔍 What Each Setting Means

### **Root Directory: `my-app`**
- **What it does:** Tells Vercel to look inside the `my-app` folder
- **Why needed:** Your SvelteKit app lives in `my-app/`, not in the root
- **Without it:** Vercel can't find your files → 404 error

### **Build Command: `npm run build`**
- **What it does:** Runs the build script from package.json
- **Result:** Creates optimized production files

### **Output Directory: `build`**
- **What it does:** Where the built files are located
- **Path:** `my-app/build/` (relative to Root Directory)

### **Install Command: `npm install --legacy-peer-deps`**
- **What it does:** Installs dependencies
- **Why needed:** Your project needs this flag for compatibility

---

## 📊 Visual: Before vs After

### **BEFORE (Not Working):**
```
Vercel looks here:
/
├── package.json
└── ...                   ← Nothing to deploy here!
                          → 404 ERROR ❌
```

### **AFTER (Working):**
```
Vercel looks here:
/my-app/                  ← Root Directory set to "my-app"
├── build/                ← Output Directory
│   ├── index.html        ✅ Found!
│   ├── _app/
│   └── ...
└── package.json
                          → SITE WORKS! ✅
```

---

## 🎯 Exact Clicks Required

Here's the exact sequence:

```
1. vercel.com → Dashboard → Your Project
2. Settings tab
3. Build & Development Settings (left sidebar)
4. Root Directory → Edit → Type "my-app" → Save
5. Install Command → Edit → Add "--legacy-peer-deps" → Save
6. Deployments tab (top)
7. Latest deployment → ••• → Redeploy
8. Wait 2 minutes
9. Visit site → Should work! ✅
```

---

## 🚨 Common Mistakes

### ❌ Mistake #1: Typing wrong folder name
- **Wrong:** `myapp`, `my app`, `My-app`
- **Right:** `my-app` (exactly like this!)

### ❌ Mistake #2: Forgetting to save
- **Always click "Save"** after editing each setting!

### ❌ Mistake #3: Not redeploying
- **Settings changes don't affect old deployments**
- **You MUST redeploy** for changes to take effect

### ❌ Mistake #4: Setting output directory wrong
- **Don't set it to:** `my-app/build`
- **Set it to:** `build` (Vercel adds the root directory automatically)

---

## 🎥 Video Tutorial Alternative

If you prefer video instructions, search YouTube for:
- "Vercel root directory subdirectory"
- "Vercel monorepo deployment"

Same concept applies - you need to tell Vercel which folder to use.

---

## ✅ Success Indicators

You'll know it worked when:

1. **Build logs show:** Looking in `my-app` directory
2. **No 404 error** when visiting site
3. **Your CFO landing page loads** properly
4. **All styling and links work**

---

## 🆘 If Still Not Working

### Try these debugging steps:

**1. Check deployment logs:**
- Click on the deployment
- Look for errors in build logs
- Check if it's finding the right files

**2. Verify settings saved:**
- Go back to Settings
- Make sure Root Directory still says `my-app`
- Sometimes Vercel resets if you have errors

**3. Check Git branch:**
- Vercel Settings → Git
- Production Branch should be `main`
- Make sure your code is pushed to that branch

**4. Try fresh deployment:**
- Delete the project in Vercel
- Create new one from scratch
- Set Root Directory to `my-app` during initial setup

---

## 💡 Alternative: Use Netlify (Easier!)

If Vercel continues to give issues, Netlify is simpler:

1. **Go to:** https://app.netlify.com
2. **Click:** "Add new site" → "Import existing project"
3. **Connect:** GitHub
4. **Set:**
   - Base directory: `my-app`
   - Build command: `npm run build`
   - Publish directory: `my-app/build`
5. **Deploy**

Netlify handles this better and your `netlify.toml` is already configured!

---

## 🎉 You're Almost There!

The fix is simple - just need to set Root Directory correctly. Follow the steps above carefully and your site will be live! 🚀

**Remember:** The key setting is **Root Directory: `my-app`** - this is what makes everything work!
