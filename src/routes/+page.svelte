<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<svelte:head>
	<title>Joshua Abello — Software Engineer</title>
</svelte:head>

<section class="hero">
	<span class="status-pill"
		><span class="pulse-dot" aria-hidden="true"></span>all systems operational</span
	>
	<h1>Joshua Abello</h1>
	<div class="role">Backend &amp; Infrastructure Engineer</div>
	<p class="bio">
		I build systems that stay up at 3am. Five years working on distributed backends, developer
		tooling, and the occasional over-engineered side project. Currently focused on Go, Postgres, and
		making deploys boring.
	</p>
	<div class="hero-actions">
		<a href="#projects" class="btn btn-primary">View projects</a>
		<a href="#contact" class="btn btn-ghost">Get in touch</a>
		<a href="https://github.com/yourusername" class="btn btn-ghost">GitHub ↗</a>
	</div>
	<div class="metrics">
		<div class="metric">
			<div class="metric-label">Uptime</div>
			<div class="metric-value">99.98%</div>
		</div>
		<div class="metric">
			<div class="metric-label">Experience</div>
			<div class="metric-value">5 yrs</div>
		</div>
		<div class="metric">
			<div class="metric-label">Shipped</div>
			<div class="metric-value">14 projects</div>
		</div>
		<div class="metric">
			<div class="metric-label">Version</div>
			<div class="metric-value">v3.2.0</div>
		</div>
	</div>
</section>

<section id="projects">
	<div class="section-head">
		<span class="section-title">Projects</span>
		<span class="section-count">4 services</span>
	</div>

	<div class="service-row">
		<div class="status-dot op" title="Operational"></div>
		<div class="service-body">
			<h3>Routewatch<span class="service-status op">Operational</span></h3>
			<p class="service-desc">
				Real-time API uptime monitor with Slack alerting and historical latency graphs. Used by
				three small teams in production.
			</p>
			<div class="service-tags">
				<span class="tag">Go</span><span class="tag">PostgreSQL</span><span class="tag">Redis</span
				><span class="tag">Docker</span>
			</div>
		</div>
		<a href="#" class="service-link">github ↗</a>
	</div>

	<div class="service-row">
		<div class="status-dot op" title="Operational"></div>
		<div class="service-body">
			<h3>Ledgerline<span class="service-status op">Operational</span></h3>
			<p class="service-desc">
				Self-hosted expense tracker with double-entry accounting under the hood. Started as a
				personal tool, now has 200+ GitHub stars.
			</p>
			<div class="service-tags">
				<span class="tag">TypeScript</span><span class="tag">Next.js</span><span class="tag"
					>SQLite</span
				>
			</div>
		</div>
		<a href="#" class="service-link">live demo ↗</a>
	</div>

	<div class="service-row">
		<div class="status-dot dev" title="In development"></div>
		<div class="service-body">
			<h3>Coldstart<span class="service-status dev">In development</span></h3>
			<p class="service-desc">
				A CLI that benchmarks and visualizes cold-start latency across serverless providers.
				Currently supports AWS Lambda and Cloudflare Workers.
			</p>
			<div class="service-tags"><span class="tag">Rust</span><span class="tag">CLI</span></div>
		</div>
		<a href="#" class="service-link">github ↗</a>
	</div>

	<div class="service-row">
		<div class="status-dot archived" title="Archived"></div>
		<div class="service-body">
			<h3>Weatherline<span class="service-status archived">Archived</span></h3>
			<p class="service-desc">
				A minimalist weather dashboard built while learning D3. Kept around as a reference for the
				animation work.
			</p>
			<div class="service-tags">
				<span class="tag">JavaScript</span><span class="tag">D3.js</span>
			</div>
		</div>
		<a href="#" class="service-link">github ↗</a>
	</div>
</section>

<section id="stack">
	<div class="section-head">
		<span class="section-title">Stack</span>
		<span class="section-count">by category</span>
	</div>
	<div class="stack-grid">
		<div class="stack-group">
			<h4>Languages</h4>
			<div class="stack-list">
				<span class="stack-item">Go</span><span class="stack-item">TypeScript</span>
				<span class="stack-item">Python</span><span class="stack-item">Rust</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Backend</h4>
			<div class="stack-list">
				<span class="stack-item">PostgreSQL</span><span class="stack-item">Redis</span>
				<span class="stack-item">gRPC</span><span class="stack-item">Kafka</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Infra</h4>
			<div class="stack-list">
				<span class="stack-item">Docker</span><span class="stack-item">Kubernetes</span>
				<span class="stack-item">Terraform</span><span class="stack-item">AWS</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Tooling</h4>
			<div class="stack-list">
				<span class="stack-item">Git</span><span class="stack-item">GitHub Actions</span>
				<span class="stack-item">Grafana</span>
			</div>
		</div>
	</div>
</section>

<section id="log">
	<div class="section-head">
		<span class="section-title">Log</span>
		<span class="section-count">recent activity</span>
	</div>
	<div>
		<div class="log-entry">
			<div class="log-date">2026-08</div>
			<div class="log-text">
				<strong>Started at Acme Corp</strong> — joined the platform team working on internal developer
				tooling and CI infrastructure.
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2026-03</div>
			<div class="log-text">
				<strong>Shipped Ledgerline v1.0</strong> — first public release after four months of nights-and-weekends
				work.
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2025-11</div>
			<div class="log-text">
				<strong>Spoke at LocalDevConf</strong> — gave a talk on designing observable systems for small
				teams.
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2024-06</div>
			<div class="log-text">
				<strong>B.S. Computer Science</strong> — graduated, focus on distributed systems.
			</div>
		</div>
	</div>
</section>

<Footer
	footerHeading="Let's talk"
	footerText="Open to backend, infra, and platform engineering roles — and always up for talking through an interesting systems problem."
/>
