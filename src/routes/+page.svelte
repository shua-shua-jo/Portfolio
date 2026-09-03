<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import Footer from '$lib/layouts/Footer.svelte';
	import { Canvas } from '@threlte/core';
</script>

<svelte:head>
	<title>Joshua Abello — Software Engineer</title>
</svelte:head>

<section class="hero">
	<span class="status-pill">
		<span class="relative flex size-2">
			<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75"
			></span>
			<span class="relative inline-flex size-2 rounded-full bg-green"></span>
		</span>open to opportunities</span
	>
	<h1>Elijah Joshua Abello</h1>
	<div class="role">Software Engineer — Full-Stack (ASP.NET · Angular)</div>
	<p class="bio">
		Computer Science graduate (Cum Laude, University of the Philippines Baguio) with a year of
		professional experience building full-stack applications. I've shipped a registrar workflow
		system, simulated vehicular networks for a thesis-adjacent project, and kept a client
		relationship running after the company I worked for closed — because the work still mattered.
	</p>
	<div class="hero-actions">
		<a href="#projects" class="btn btn-primary">View projects</a>
		<a href="#contact" class="btn btn-ghost">Get in touch</a>
		<a href="https://github.com/shua-shua-jo" class="btn btn-ghost">GitHub ↗</a>
	</div>
	<div class="metrics">
		<div class="metric">
			<div class="metric-label">GPA</div>
			<div class="metric-value">1.45</div>
		</div>
		<div class="metric">
			<div class="metric-label">Honor</div>
			<div class="metric-value">Cum Laude</div>
		</div>
		<div class="metric">
			<div class="metric-label">Work Experience</div>
			<div class="metric-value">1+ yr</div>
		</div>
		<div class="metric">
			<div class="metric-label">Grad</div>
			<div class="metric-value">2024</div>
		</div>
	</div>
</section>

<section id="projects">
	<div class="section-head">
		<span class="section-title">Projects</span>
		<span class="section-count">4</span>
	</div>

	<div class="service-row">
		<div class="status-dot op" title="Operational"></div>
		<div class="service-body">
			<h3>Client full-stack platform<span class="service-status op">Operational</span></h3>
			<p class="service-desc">
				Built and maintained full-stack applications as a Junior Software Engineer at Netzwelt Inc.,
				collaborating in an agile team. When Netzwelt closed, I continued the work directly for the
				client under contract.
			</p>
			<div class="service-tags">
				<span class="tag">ASP.NET</span><span class="tag">Angular</span><span class="tag"
					>Agile</span
				>
			</div>
		</div>
	</div>

	<div class="service-row">
		<div class="status-dot op" title="Operational"></div>
		<div class="service-body">
			<h3>UP2GO<span class="service-status op">Operational</span></h3>
			<p class="service-desc">
				A web app that handles form-request transactions for the UP Baguio registrar securely and
				conveniently — built to solve a real problem: the registrar's email inbox was being
				overwhelmed with requests.
			</p>
			<div class="service-tags">
				<span class="tag">Web App</span><span class="tag">University Project</span>
			</div>
		</div>
		<a href="https://github.com/shua-shua-jo" class="service-link">github ↗</a>
	</div>

	<div class="service-row">
		<div class="status-dot archived" title="Archived"></div>
		<div class="service-body">
			<h3>Rizzle<span class="service-status archived">Archived</span></h3>
			<p class="service-desc">
				A mobile app designed and developed for the Philippine Institutions (P.I.) 100 class at UP
				Baguio.
			</p>
			<div class="service-tags"><span class="tag">Mobile App</span></div>
		</div>
		<a href="https://github.com/shua-shua-jo" class="service-link">github ↗</a>
	</div>

	<div class="service-row">
		<div class="status-dot archived" title="Archived"></div>
		<div class="service-body">
			<h3>VANET Project<span class="service-status archived">Archived</span></h3>
			<p class="service-desc">
				Simulated a vehicular ad hoc network between vehicles and road-side units along Harrison
				Road in Baguio, using veins, OMNeT++, and SUMO (Simulation of Urban MObility).
			</p>
			<div class="service-tags">
				<span class="tag">veins</span><span class="tag">OMNeT++</span><span class="tag">SUMO</span>
			</div>
		</div>
		<a href="https://github.com/shua-shua-jo" class="service-link">github ↗</a>
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
				<span class="stack-item">Java</span><span class="stack-item">C#</span>
				<span class="stack-item">Python</span><span class="stack-item">JavaScript</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Frameworks / Tools</h4>
			<div class="stack-list">
				<span class="stack-item">ASP.NET</span><span class="stack-item">Angular</span>
				<span class="stack-item">React</span><span class="stack-item">Svelte</span>
				<span class="stack-item">Node.js</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Databases</h4>
			<div class="stack-list">
				<span class="stack-item">SQL</span><span class="stack-item">MySQL</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Other Tools</h4>
			<div class="stack-list">
				<span class="stack-item">Git</span><span class="stack-item">GitLab</span>
				<span class="stack-item">Docker</span><span class="stack-item">MATLAB</span>
				<span class="stack-item">Photoshop</span>
			</div>
		</div>
	</div>
</section>

<section id="log">
	<div class="section-head">
		<span class="section-title">Log</span>
		<span class="section-count">experience &amp; education</span>
	</div>
	<div>
		<div class="log-entry">
			<div class="log-date">2025-2026</div>
			<div class="log-text">
				<strong>Junior Software Engineer, Netzwelt Inc. / Client Contract</strong> — full-stack development
				with ASP.NET and Angular; continued the engagement directly with the client after Netzwelt's closure.
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2024</div>
			<div class="log-text">
				<strong>B.S. Computer Science, UP Baguio</strong> — Cum Laude, GPA 1.45. Thesis: "Evaluating Machine
				Learning Algorithms For Baybayin Character Classification."
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2024</div>
			<div class="log-text">
				<strong>Mobile App Developer, UP Baguio</strong> — designed and built Rizzle for the Philippine
				Institutions 100 class.
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2023</div>
			<div class="log-text">
				<strong>Web App Developer, UP Baguio</strong> — built UP2GO to secure and streamline registrar
				form requests.
			</div>
		</div>
		<div class="log-entry">
			<div class="log-date">2023</div>
			<div class="log-text">
				<strong>Graphic Designer, ComSciatUP.BAG &amp; Rotaract Club of UP Baguio</strong> — created graphics
				for organization publications.
			</div>
		</div>
	</div>
</section>

<div style="width: 100%; height: 500px;">
	<Canvas>
		<Avatar />
	</Canvas>
</div>

<Footer
	footerHeading="Let's talk"
	footerText="Open to software engineering roles, especially full-stack work with room to keep learning."
/>
