<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<svelte:head>
	<title>Joshua Abello — Data Analysis</title>
</svelte:head>

<section class="subhero">
	<div class="eyebrow">also building</div>
	<h1>Numbers that change what a team does next</h1>
	<div class="role">Data Analysis</div>
	<p class="bio">
		I like data work that ends in a decision, not just a dashboard. Comfortable going from raw logs
		and spreadsheets to a query, a chart, and a one-line recommendation someone can actually act on.
		Selected work below.
	</p>
</section>

<section>
	<div class="section-head">
		<span class="section-title">Analyses</span>
		<span class="section-count">3 projects</span>
	</div>

	<div class="case-card">
		<h3>Routewatch incident analysis</h3>
		<div class="case-meta">SQL · Python · Pandas</div>
		<p class="case-desc">
			Analyzed a year of alerting data from my own monitoring tool to find that 68% of pages
			happened outside business hours but got resolved fastest during them. Used the finding to
			justify adding a lightweight on-call rotation instead of a costly third-party escalation
			service.
		</p>
		<div class="service-tags">
			<span class="tag">PostgreSQL</span><span class="tag">Python</span><span class="tag"
				>Matplotlib</span
			>
		</div>
	</div>

	<div class="case-card">
		<h3>Ledgerline spending dashboard</h3>
		<div class="case-meta">SQL · Dashboarding · Data modeling</div>
		<p class="case-desc">
			Designed the aggregation layer and dashboard views for a personal-finance app, turning raw
			transaction rows into monthly trend lines, category breakdowns, and anomaly flags for unusual
			spending.
		</p>
		<div class="service-tags">
			<span class="tag">SQLite</span><span class="tag">SQL</span><span class="tag">Recharts</span>
		</div>
	</div>

	<div class="case-card">
		<h3>Open-source contributor activity study</h3>
		<div class="case-meta">Python · GitHub API · Data cleaning</div>
		<p class="case-desc">
			Pulled commit and issue data across 40 open-source repos to study how response time to
			first-time contributors affects whether they come back. Cleaned and modeled roughly 90,000
			events for the analysis.
		</p>
		<div class="service-tags">
			<span class="tag">Python</span><span class="tag">Pandas</span><span class="tag">Jupyter</span>
		</div>
	</div>
</section>

<section>
	<div class="section-head">
		<span class="section-title">Toolkit</span>
		<span class="section-count">by category</span>
	</div>
	<div class="stack-grid">
		<div class="stack-group">
			<h4>Query &amp; storage</h4>
			<div class="stack-list">
				<span class="stack-item">SQL</span><span class="stack-item">PostgreSQL</span>
				<span class="stack-item">BigQuery</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Analysis</h4>
			<div class="stack-list">
				<span class="stack-item">Python</span><span class="stack-item">Pandas</span>
				<span class="stack-item">NumPy</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Visualization</h4>
			<div class="stack-list">
				<span class="stack-item">Matplotlib</span><span class="stack-item">Tableau</span>
				<span class="stack-item">Recharts</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Workflow</h4>
			<div class="stack-list">
				<span class="stack-item">Jupyter</span><span class="stack-item">dbt</span>
			</div>
		</div>
	</div>
</section>

<Footer
	footerHeading="Let's talk data"
	footerText="Interested in data analyst or analytics engineering roles, especially close to product decisions."
/>
