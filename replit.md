# Jiří Dočkal - Fractional CFO Website

## Overview
A professional one-page portfolio website for Jiří Dočkal, a fractional CFO specializing in B2B SaaS startups and scale-ups. Built with SvelteKit and Tailwind CSS.

## Project Structure
```
my-app/
├── src/
│   ├── routes/
│   │   ├── +page.svelte       # Main landing page
│   │   └── +layout.svelte     # Root layout with CSS imports
│   ├── app.css                # Tailwind CSS configuration
│   └── app.html               # HTML template
├── tailwind.config.js         # Tailwind configuration
├── vite.config.ts            # Vite configuration (port 5000)
└── package.json              # Dependencies
```

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Mobile hamburger navigation menu
- ✅ Dark theme with indigo/purple accents
- ✅ Smooth scrolling navigation
- ✅ All sections from original site:
  - Hero with statistics cards
  - Services (6 cards)
  - Expertise
  - Case studies
  - Process workflow
  - Contact form

## Technology Stack
- **Framework**: SvelteKit
- **Styling**: Tailwind CSS with @tailwindcss/postcss
- **Language**: TypeScript
- **Dev Server**: Vite (port 5000)

## Development
```bash
cd my-app
npm install
npm run dev
```

Server runs on http://localhost:5000

## Design Details
- **Color Scheme**: 
  - Background: #020617 (slate-950)
  - Primary: Indigo (indigo-600, indigo-700)
  - Accent: Emerald for highlights
  - Text: Gray-100, Gray-300, Gray-400
- **Typography**: System fonts with responsive sizing
- **Layout**: Max-width 6xl (1280px) container

## Recent Changes
- 2025-10-18: Initial implementation with all sections
- 2025-10-18: Added mobile hamburger navigation menu
- 2025-10-18: Fixed accessibility warnings for placeholder links
- 2025-10-18: Added allowedHosts: true to vite.config.ts for Replit dev URL support
- 2025-10-18: Translated entire website from Czech to English

## Notes
- Contact form uses mailto link to send messages to jiri.dockal5@gmail.com
- LinkedIn link: https://www.linkedin.com/in/jiří-dočkal-2a491459/
- CV/Bio link is placeholder (not yet provided)
- Smooth scroll behavior enabled in CSS
