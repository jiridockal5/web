<script lang="ts">
        let mobileMenuOpen = $state(false);
        
        function toggleMobileMenu() {
                mobileMenuOpen = !mobileMenuOpen;
        }
        
        function closeMobileMenu() {
                mobileMenuOpen = false;
        }
</script>

<svelte:head>
        <title>Jiri Dockal — Fractional CFO</title>
        <meta name="description" content="Fractional CFO for startups and scale-ups" />
</svelte:head>

<!-- Header / Navigation -->
<header class="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-gray-800">
        <nav class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-sm">
                                        JD
                                </div>
                                <div class="hidden sm:block">
                                        <div class="font-semibold">Jiri Dockal</div>
                                        <div class="text-xs text-gray-400">Fractional CFO</div>
                                </div>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center gap-6 text-sm">
                                <a href="#services" class="hover:text-emerald-400 transition-colors">Services</a>
                                <a href="#expertise" class="hover:text-emerald-400 transition-colors">Expertise</a>
                                <a href="#references" class="hover:text-emerald-400 transition-colors">References</a>
                                <a href="#process" class="hover:text-emerald-400 transition-colors">Process</a>
                        </div>
                        
                        <div class="flex items-center gap-3">
                                <!-- CTA Button -->
                                <a href="https://cal.com/jiri-dockal-ushn7b" target="_blank" rel="noopener noreferrer" class="hidden sm:block bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        Schedule a 20min call
                                </a>
                                
                                <!-- Mobile Menu Button -->
                                <button 
                                        onclick={toggleMobileMenu}
                                        class="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                                        aria-label="Toggle menu"
                                >
                                        {#if mobileMenuOpen}
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                        {:else}
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                                </svg>
                                        {/if}
                                </button>
                        </div>
                </div>
                
                <!-- Mobile Menu Dropdown -->
                {#if mobileMenuOpen}
                        <div class="md:hidden mt-4 pt-4 border-t border-gray-800">
                                <div class="flex flex-col gap-4">
                                        <a href="#services" onclick={closeMobileMenu} class="hover:text-emerald-400 transition-colors py-2">Services</a>
                                        <a href="#expertise" onclick={closeMobileMenu} class="hover:text-emerald-400 transition-colors py-2">Expertise</a>
                                        <a href="#references" onclick={closeMobileMenu} class="hover:text-emerald-400 transition-colors py-2">References</a>
                                        <a href="#process" onclick={closeMobileMenu} class="hover:text-emerald-400 transition-colors py-2">Process</a>
                                        <a href="https://cal.com/jiri-dockal-ushn7b" target="_blank" rel="noopener noreferrer" onclick={closeMobileMenu} class="bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center">
                                                Schedule a 20min call
                                        </a>
                                </div>
                        </div>
                {/if}
        </nav>
</header>

<!-- Main Content -->
<main class="pt-20">
        <!-- Hero Section -->
        <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                <div class="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 flex-wrap">
                        <span class="text-emerald-400">B2B SaaS</span>
                        <span>•</span>
                        <span>Reports</span>
                        <span>•</span>
                        <span>Fundraising</span>
                        <span>•</span>
                        <span>Cashflow</span>
                </div>
                
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Fractional CFO for startups<br />and scale‑ups
                </h1>
                
                <p class="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
                        I help founders grow fast and healthy: <strong>unit economics</strong>, <strong>MRR/ARR reporting</strong>, 
                        <strong>forecasting</strong>, <strong>fundraising</strong>, and <strong>cashflow management</strong>. 
                        Experience from Czech and international SaaS companies.
                </p>
                
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
                        <div class="bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
                                <div class="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">€2–50M</div>
                                <div class="text-sm text-gray-400">typical ARR range of clients</div>
                        </div>
                        <div class="bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
                                <div class="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">60%+</div>
                                <div class="text-sm text-gray-400">YoY growth for scaling teams</div>
                        </div>
                        <div class="bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
                                <div class="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">Board‑ready</div>
                                <div class="text-sm text-gray-400">monthly and quarterly reporting</div>
                        </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a href="#contact" class="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                                Contact
                        </a>
                        <span class="text-sm text-gray-400">Availability: 1–2 days per week</span>
                </div>
                
                <!-- Finance as a Product -->
                <div class="mt-16 border-t border-gray-800 pt-12">
                        <h3 class="text-xl sm:text-2xl font-semibold mb-6">Finance as a product — clarity, rhythm, discipline</h3>
                        <ul class="space-y-3 text-gray-300">
                                <li class="flex items-start gap-3">
                                        <span class="text-emerald-400 mt-1">✔️</span>
                                        <span>MRR/ARR & cohorts • NDR/GRR • LTV/CAC • Burn multiple</span>
                                </li>
                                <li class="flex items-start gap-3">
                                        <span class="text-emerald-400 mt-1">✔️</span>
                                        <span>Budget vs Actuals • Forecast • Cash runway • Fundraising</span>
                                </li>
                                <li class="flex items-start gap-3">
                                        <span class="text-emerald-400 mt-1">✔️</span>
                                        <span>RevOps: pricing, plans, discounts, billing • RevRec • VAT/OSS</span>
                                </li>
                        </ul>
                </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="bg-gray-900/50 py-16 sm:py-20">
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
                        <p class="text-gray-400 mb-12">Modular — choose only what you need right now</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <h3 class="text-xl font-semibold mb-3">Reporting & KPIs</h3>
                                        <p class="text-gray-300 text-sm">
                                                MRR/ARR, cohorts, NDR/GRR, churn, healthy dashboards and monthly closing that even a small team can manage.
                                        </p>
                                </div>
                                
                                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <h3 class="text-xl font-semibold mb-3">Forecast & budget</h3>
                                        <p class="text-gray-300 text-sm">
                                                12–24m model, scenarios, sensitivities, hiring plan. Clear picture of runway and "what‑ifs" for board and investors.
                                        </p>
                                </div>
                                
                                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <h3 class="text-xl font-semibold mb-3">Fundraising</h3>
                                        <p class="text-gray-300 text-sm">
                                                Preparation of materials (deck, data room), metrics, valuation, investor communication. Seed/Series A.
                                        </p>
                                </div>
                                
                                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <h3 class="text-xl font-semibold mb-3">RevOps & pricing</h3>
                                        <p class="text-gray-300 text-sm">
                                                Setting up plans, discounts, billing and revenue recognition. Collaboration with product/CS to grow NDR.
                                        </p>
                                </div>
                                
                                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <h3 class="text-xl font-semibold mb-3">Processes & tools</h3>
                                        <p class="text-gray-300 text-sm">
                                                Chargebee/Stripe, accounting, CRM, data flows, closings, internal controls. Practical and without unnecessary bureaucracy.
                                        </p>
                                </div>
                                
                                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <h3 class="text-xl font-semibold mb-3">Interim finance team</h3>
                                        <p class="text-gray-300 text-sm">
                                                Temporary capacity, hiring, onboarding and setting up the finance team rhythm.
                                        </p>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Expertise Section -->
        <section id="expertise" class="py-16 sm:py-20">
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Expertise</h2>
                        <p class="text-gray-400 mb-12">B2B SaaS • international environment • CZ/EU/US</p>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                <div class="bg-gradient-to-br from-gray-800/30 to-emerald-900/5 border border-emerald-500/10 rounded-lg p-8">
                                        <h3 class="text-2xl font-semibold mb-6">Why work with me</h3>
                                        <ul class="space-y-4 text-gray-300">
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span>Hands‑on CFO for startups and scale‑ups (CZ/EU).</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span>Strong <strong>SaaS unit economics</strong> & reporting (MRR/ARR, cohorts, NDR, churn).</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span>Fundraising (seed/Series A), investor communication, data room.</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span>Practical processes: closing in 5 business days, forecast always up to date.</span>
                                                </li>
                                        </ul>
                                </div>
                                
                                <div class="bg-gradient-to-br from-gray-800/30 to-emerald-900/5 border border-emerald-500/10 rounded-lg p-8">
                                        <h3 class="text-2xl font-semibold mb-6">Tech stack</h3>
                                        <ul class="space-y-4 text-gray-300">
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span><strong>Billing & payments:</strong> Chargebee, Stripe</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span><strong>Accounting:</strong> Odoo, Quickbooks, Flexibee</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span><strong>Data & reporting:</strong> Google Sheets</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span><strong>Collaboration:</strong> Notion, Slack, GitHub</span>
                                                </li>
                                                <li class="flex items-start gap-3">
                                                        <span class="text-emerald-400 mt-1">•</span>
                                                        <span><strong>Compliance:</strong> VAT/OSS EU</span>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Case Studies -->
        <section id="references" class="bg-gray-900/50 py-16 sm:py-20">
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Case studies</h2>
                        <p class="text-gray-400 mb-12">Real impact in companies</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
                                        <h3 class="text-lg font-semibold mb-3 text-emerald-400">Reporting in 14 days</h3>
                                        <p class="text-gray-300 text-sm">
                                                Built product-level MRR/ARR reporting + cohorts. Board‑ready KPIs in two weeks, including automated exports.
                                        </p>
                                </div>
                                
                                <div class="bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
                                        <h3 class="text-lg font-semibold mb-3 text-emerald-400">Cash discipline</h3>
                                        <p class="text-gray-300 text-sm">
                                                Implemented weekly cash forecast and expense approval. Clear runway & hiring prioritization.
                                        </p>
                                </div>
                                
                                <div class="bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
                                        <h3 class="text-lg font-semibold mb-3 text-emerald-400">Fundraising support</h3>
                                        <p class="text-gray-300 text-sm">
                                                Prepared deck and data room, clean metrics and scenarios. Successful round led by EU fund.
                                        </p>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="py-16 sm:py-20">
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-4">How collaboration works</h2>
                        <p class="text-gray-400 mb-12">Simple and transparent</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div class="bg-gradient-to-br from-gray-800/30 to-emerald-900/5 border border-emerald-500/10 rounded-lg p-6">
                                        <div class="flex items-start gap-4">
                                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-emerald-500/20">1</div>
                                                <div>
                                                        <h3 class="text-lg font-semibold mb-2">Initial 20min call</h3>
                                                        <p class="text-gray-300 text-sm">To see if we're a good fit and what collaboration potential exists.</p>
                                                </div>
                                        </div>
                                </div>
                                
                                <div class="bg-gradient-to-br from-gray-800/30 to-emerald-900/5 border border-emerald-500/10 rounded-lg p-6">
                                        <div class="flex items-start gap-4">
                                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-emerald-500/20">2</div>
                                                <div>
                                                        <h3 class="text-lg font-semibold mb-2">Audit and prioritization (1–2 weeks)</h3>
                                                        <p class="text-gray-300 text-sm">Quick mapping of metrics, processes and risks. Together we choose 3–5 goals.</p>
                                                </div>
                                        </div>
                                </div>
                                
                                <div class="bg-gradient-to-br from-gray-800/30 to-emerald-900/5 border border-emerald-500/10 rounded-lg p-6">
                                        <div class="flex items-start gap-4">
                                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-emerald-500/20">3</div>
                                                <div>
                                                        <h3 class="text-lg font-semibold mb-2">Execution sprints</h3>
                                                        <p class="text-gray-300 text-sm">Weekly/bi-weekly sprints with clear deliverables. Report in 5 days, forecast in 10 days, etc.</p>
                                                </div>
                                        </div>
                                </div>
                                
                                <div class="bg-gradient-to-br from-gray-800/30 to-emerald-900/5 border border-emerald-500/10 rounded-lg p-6">
                                        <div class="flex items-start gap-4">
                                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-emerald-500/20">4</div>
                                                <div>
                                                        <h3 class="text-lg font-semibold mb-2">Rhythm & mentoring</h3>
                                                        <p class="text-gray-300 text-sm">Monthly closing, board pack, finance team leadership, hiring/onboarding.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        
                        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
                                <h3 class="text-xl font-semibold mb-4">Pricing & availability</h3>
                                <p class="text-gray-300 mb-4">
                                        I typically work <strong>1–2 days per week</strong>. Short-term intensive engagements are also possible. Monthly billing, simple SOW.
                                </p>
                                <p class="text-gray-400 text-sm">
                                        Write me a few sentences about your company and goals — I'll suggest 2–3 collaboration options.
                                </p>
                        </div>
                </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="bg-gray-900/50 py-16 sm:py-20">
                <div class="max-w-6xl mx-auto px-4 sm:px-6">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
                        <p class="text-gray-400 mb-12">Let's discuss how I can help your company grow</p>
                        
                        <div class="max-w-2xl mx-auto">
                                <a href="https://www.linkedin.com/in/ji%C5%99%C3%AD-do%C4%8Dkal-2a491459/" 
                                   class="block bg-gradient-to-br from-gray-800/50 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-12 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all group"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                        <div class="text-center">
                                                <p class="text-lg text-gray-400 mb-6">Contact me on</p>
                                                <div class="text-4xl sm:text-5xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                                        Linked<span class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white text-blue-600 rounded ml-2 align-middle">in</span>
                                                </div>
                                        </div>
                                </a>
                        </div>
                </div>
        </section>
</main>

<!-- Footer -->
<footer class="bg-slate-950 border-t border-gray-800 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-400 text-sm">
                <p>&copy; 2025 Jiri Dockal. All rights reserved.</p>
        </div>
</footer>
