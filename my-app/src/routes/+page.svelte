<script lang="ts">
	let formData = {
		message: ''
	};
</script>

<svelte:head>
	<title>Jiří Dočkal — Fractional CFO</title>
	<meta name="description" content="Fractional CFO pro startupy a scale-upy" />
</svelte:head>

<!-- Header / Navigation -->
<header class="fixed top-0 left-0 right-0 z-50 bg-darker/95 backdrop-blur-sm border-b border-gray-800">
	<nav class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
		<div class="flex items-center gap-3">
			<div class="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-sm">
				JD
			</div>
			<div class="hidden sm:block">
				<div class="font-semibold">Jiří Dočkal</div>
				<div class="text-xs text-gray-400">Fractional CFO</div>
			</div>
		</div>
		<div class="hidden md:flex items-center gap-6 text-sm">
			<a href="#sluzby" class="hover:text-indigo-400 transition-colors">Služby</a>
			<a href="#expertiza" class="hover:text-indigo-400 transition-colors">Expertíza</a>
			<a href="#reference" class="hover:text-indigo-400 transition-colors">Reference</a>
			<a href="#proces" class="hover:text-indigo-400 transition-colors">Proces</a>
		</div>
		<a href="#contact" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
			Domluvme si 20min call
		</a>
	</nav>
</header>

<!-- Main Content -->
<main class="pt-20">
	<!-- Hero Section -->
	<section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
		<div class="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 flex-wrap">
			<span class="text-emerald-400">B2B SaaS</span>
			<span>•</span>
			<span>Reporty</span>
			<span>•</span>
			<span>Fundraising</span>
			<span>•</span>
			<span>Cashflow</span>
		</div>
		
		<h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
			Fractional CFO pro startupy<br />a scale‑upy
		</h1>
		
		<p class="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
			Pomáhám zakladatelům růst rychle a zdravě: <strong>unit economics</strong>, <strong>MRR/ARR reporting</strong>, 
			<strong>forecasting</strong>, <strong>fundraising</strong> a <strong>řízení cashflow</strong>. 
			Zkušenost z českých i mezinárodních SaaS firem.
		</p>
		
		<!-- Stats Cards -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
			<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
				<div class="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">€2–50M</div>
				<div class="text-sm text-gray-400">typický ARR rozsah klientů</div>
			</div>
			<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
				<div class="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">60%+</div>
				<div class="text-sm text-gray-400">YoY růst u škálujících týmů</div>
			</div>
			<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
				<div class="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">Board‑ready</div>
				<div class="text-sm text-gray-400">měsíční a kvartální reporting</div>
			</div>
		</div>
		
		<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
			<a href="#contact" class="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors inline-block">
				Kontaktovat
			</a>
			<span class="text-sm text-gray-400">Dostupnost: 1–2 dny týdně</span>
		</div>
		
		<!-- Finance jako produkt -->
		<div class="mt-16 border-t border-gray-800 pt-12">
			<h3 class="text-xl sm:text-2xl font-semibold mb-6">Finance jako produkt  — přehled, rytmus, disciplína</h3>
			<ul class="space-y-3 text-gray-300">
				<li class="flex items-start gap-3">
					<span class="text-emerald-400 mt-1">✔️</span>
					<span>MRR/ARR & kohorty • NDR/GRR • LTV/CAC • Burn multiple</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-emerald-400 mt-1">✔️</span>
					<span>Budget vs Actuals • Forecast • Cash runway • Fundraising</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="text-emerald-400 mt-1">✔️</span>
					<span>RevOps: ceny, plány, slevy, fakturace • RevRec • DPH/OSS</span>
				</li>
			</ul>
		</div>
	</section>

	<!-- Services Section -->
	<section id="sluzby" class="bg-gray-900/50 py-16 sm:py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<h2 class="text-3xl sm:text-4xl font-bold mb-4">Služby</h2>
			<p class="text-gray-400 mb-12">Modulárně — vyberte jen to, co teď potřebujete</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
					<h3 class="text-xl font-semibold mb-3">Reporting & KPI</h3>
					<p class="text-gray-300 text-sm">
						MRR/ARR, kohorty, NDR/GRR, churn, zdravé dashboardy a měsíční closing, které zvládne i malý tým.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
					<h3 class="text-xl font-semibold mb-3">Forecast & rozpočet</h3>
					<p class="text-gray-300 text-sm">
						12–24m model, scénáře, citlivosti, hiring plán. Jasný obrázek runway a "what‑ifs" pro board i investory.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
					<h3 class="text-xl font-semibold mb-3">Fundraising</h3>
					<p class="text-gray-300 text-sm">
						Příprava materiálů (deck, data room), metriky, valuace, investorská komunikace. Seed/Series A.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
					<h3 class="text-xl font-semibold mb-3">RevOps & pricing</h3>
					<p class="text-gray-300 text-sm">
						Nastavení plánů, slev, fakturace a revenue recognition. Spolupráce s produkt/CS k růstu NDR.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
					<h3 class="text-xl font-semibold mb-3">Procesy & nástroje</h3>
					<p class="text-gray-300 text-sm">
						Chargebee/Stripe, účetnictví, CRM, datové toky, uzávěrky, vnitřní kontrola. Prakticky a bez zbytečné byrokracie.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition-colors">
					<h3 class="text-xl font-semibold mb-3">Interim finance team</h3>
					<p class="text-gray-300 text-sm">
						Dočasná kapacita, hiring, onboarding a nastavení rytmu týmu financí.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Expertise Section -->
	<section id="expertiza" class="py-16 sm:py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<h2 class="text-3xl sm:text-4xl font-bold mb-4">Expertíza</h2>
			<p class="text-gray-400 mb-12">B2B SaaS • mezinárodní prostředí • CZ/EU/US</p>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
				<div class="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
					<h3 class="text-2xl font-semibold mb-6">Proč se mnou</h3>
					<ul class="space-y-4 text-gray-300">
						<li class="flex items-start gap-3">
							<span class="text-indigo-400 mt-1">•</span>
							<span>Hands‑on CFO pro startupy a scale‑upy (CZ/EU).</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-indigo-400 mt-1">•</span>
							<span>Silné <strong>SaaS unit economics</strong> & reporting (MRR/ARR, kohorty, NDR, churn).</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-indigo-400 mt-1">•</span>
							<span>Fundraising (seed/Series A), investorská komunikace, data room.</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-indigo-400 mt-1">•</span>
							<span>Praktické procesy: closing do 5 pracovních dní, forecast vždy aktuální.</span>
						</li>
					</ul>
				</div>
				
				<div class="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
					<h3 class="text-2xl font-semibold mb-6">Tech stack</h3>
					<div class="text-gray-300 text-sm leading-relaxed">
						Chargebee / Stripe • Google Sheets • Odoo / Xero • Notion / Slack • Looker Studio • GitHub / Linear • (OSS/DPH EU)
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Case Studies -->
	<section id="reference" class="bg-gray-900/50 py-16 sm:py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<h2 class="text-3xl sm:text-4xl font-bold mb-4">Krátké případovky</h2>
			<p class="text-gray-400 mb-12">Reálné dopady ve firmách</p>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
					<h3 class="text-lg font-semibold mb-3 text-indigo-400">Reporting za 14 dní</h3>
					<p class="text-gray-300 text-sm">
						Postavil jsem produktový MRR/ARR reporting + kohorty. Board‑ready KPI do dvou týdnů, včetně automatizace exportů.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
					<h3 class="text-lg font-semibold mb-3 text-indigo-400">Cash discipline</h3>
					<p class="text-gray-300 text-sm">
						Zavedení týdenního cash forecastu a schvalování výdajů. Jasný runway & prioritizace hiringu.
					</p>
				</div>
				
				<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
					<h3 class="text-lg font-semibold mb-3 text-indigo-400">Fundraising support</h3>
					<p class="text-gray-300 text-sm">
						Příprava decku a data room, čistá metrika a scénáře. Úspěšné kolo vedené EU fondem.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section id="proces" class="py-16 sm:py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<h2 class="text-3xl sm:text-4xl font-bold mb-4">Jak spolupráce probíhá</h2>
			<p class="text-gray-400 mb-12">Jednoduché a transparentní</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				<div class="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Úvodní 20min call</h3>
							<p class="text-gray-300 text-sm">Zda si sedneme a jaký má spolupráce potenciál.</p>
						</div>
					</div>
				</div>
				
				<div class="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Audit a prioritizace (1–2 týdny)</h3>
							<p class="text-gray-300 text-sm">Rychlé zmapování metrik, procesů a rizik. Společně vybereme 3–5 cílů.</p>
						</div>
					</div>
				</div>
				
				<div class="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Execution sprinty</h3>
							<p class="text-gray-300 text-sm">Týdenní/14denní sprinty s jasnými výstupy. Report do 5 dní, forecast do 10 dní, atd.</p>
						</div>
					</div>
				</div>
				
				<div class="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Rytmus & mentoring</h3>
							<p class="text-gray-300 text-sm">Měsíční closing, board pack, vedení týmu financí, hiring/onboarding.</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
				<h3 class="text-xl font-semibold mb-4">Cena & dostupnost</h3>
				<p class="text-gray-300 mb-4">
					Pracuji typicky <strong>1–2 dny týdně</strong>. Možné je i krátkodobé intenzivní nasazení. Fakturace měsíčně, jednoduchý SOW.
				</p>
				<p class="text-gray-400 text-sm">
					Napište mi pár vět o firmě a cílech – navrhnu 2–3 varianty spolupráce.
				</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="bg-gray-900/50 py-16 sm:py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<h2 class="text-3xl sm:text-4xl font-bold mb-4">Kontakt</h2>
			<p class="text-gray-400 mb-12">Ozvěte se – pošlu pár slotů pro krátký call</p>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div>
					<form class="space-y-4">
						<div>
							<textarea 
								bind:value={formData.message}
								placeholder="Napište mi pár vět o firmě a cílech..."
								rows="6"
								class="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							></textarea>
						</div>
						<button 
							type="submit"
							class="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors"
						>
							Odeslat
						</button>
					</form>
				</div>
				
				<div>
					<h3 class="text-xl font-semibold mb-6">Rychlé odkazy</h3>
					<div class="space-y-4">
						<a href="mailto:hello@jiridockal.com" class="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
							<span class="text-xl">📧</span>
							<span>hello@jiridockal.com</span>
						</a>
						<a href="#" class="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
							<span class="text-xl">💼</span>
							<span>LinkedIn</span>
						</a>
						<a href="#" class="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
							<span class="text-xl">📄</span>
							<span>CV / bio (PDF)</span>
						</a>
					</div>
					
					<div class="mt-8 pt-8 border-t border-gray-700">
						<p class="text-gray-400 text-sm">Preferujete angličtinu? <a href="#" class="text-indigo-400 hover:text-indigo-300">Switch to EN</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="border-t border-gray-800 py-8">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
		<p>&copy; 2025 Jiří Dočkal. Všechna práva vyhrazena.</p>
	</div>
</footer>
