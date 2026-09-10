<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<!-- src/routes/+page.svelte -->
<svelte:head>
	<title>Joshua Abello — Software Engineer</title>
</svelte:head>

<section class="hero">
	<span class="pill" data-reveal><span class="pulse"></span>open to opportunities</span>

	<h1 aria-label="Elijah Joshua Abello">
		<span class="line"><span style="--d:.05s">Elijah Joshua</span></span>
		<span class="line"><span class="grad-text" style="--d:.16s">Abello</span></span>
	</h1>

	<div class="role" data-reveal style="--rd:.3s">
		<span>Software Engineer — Full-Stack</span>
		<span class="accent">( ASP.NET · Angular )</span>
		<span class="caret" aria-hidden="true"></span>
	</div>

	<p class="bio" data-reveal style="--rd:.4s">
		Computer Science graduate (<strong>Cum Laude, UP Baguio</strong>) with a year of professional
		experience building full-stack applications. I've shipped a registrar workflow system, simulated
		vehicular networks, and kept a client relationship running after the company I worked for closed
		— <strong>because the work still mattered.</strong>
	</p>

	<div class="hero-actions" data-reveal style="--rd:.5s">
		<a href="#projects" class="btn btn-primary">View projects <span class="arrow">→</span></a>
		<a href="#contact" class="btn btn-ghost">Get in touch</a>
		<a href="https://github.com/shua-shua-jo" class="btn btn-ghost">GitHub ↗</a>
	</div>

	<div class="metrics" data-reveal style="--rd:.6s">
		<div class="metric">
			<div class="metric-label">GPA</div>
			<div class="metric-value"><span data-count="1.45" data-dec="2">1.45</span></div>
		</div>
		<div class="metric">
			<div class="metric-label">Honor</div>
			<div class="metric-value">Cum Laude</div>
		</div>
		<div class="metric">
			<div class="metric-label">Experience</div>
			<div class="metric-value"><span data-count="1">1</span><span class="unit">+ yr</span></div>
		</div>
		<div class="metric">
			<div class="metric-label">Graduated</div>
			<div class="metric-value"><span data-count="2024">2024</span></div>
		</div>
	</div>
</section>

<section id="projects">
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">01</span> Projects</span>
		<span class="section-sub">selected work</span>
	</div>

	<div class="projects-grid">
		<article class="card wide" data-reveal>
			<div class="card-top">
				<span class="status op"><span class="dot"></span>Operational</span>
			</div>
			<h3>Client full-stack platform</h3>
			<p class="desc">
				Built and maintained full-stack applications as a Junior Software Engineer at Netzwelt Inc.,
				collaborating in an agile team. When Netzwelt closed, I continued the work directly for the
				client under contract.
			</p>
			<div class="tags">
				<span class="tag">ASP.NET</span><span class="tag">Angular</span><span class="tag"
					>Agile</span
				>
			</div>
		</article>

		<article class="card" data-reveal style="--rd:.08s">
			<div class="card-top">
				<span class="status archived"><span class="dot"></span>Archived</span>
				<a class="card-link" href="https://github.com/shua-shua-jo">github <span>↗</span></a>
			</div>
			<h3>UP2GO</h3>
			<p class="desc">
				A web app that handles form-request transactions for the UP Baguio registrar securely and
				conveniently — built to solve a real problem: the registrar's inbox was being overwhelmed
				with requests.
			</p>
			<div class="tags">
				<span class="tag">Web App</span><span class="tag">University Project</span>
			</div>
		</article>

		<article class="card" data-reveal style="--rd:.16s">
			<div class="card-top">
				<span class="status archived"><span class="dot"></span>Archived</span>
				<a class="card-link" href="https://github.com/shua-shua-jo">github <span>↗</span></a>
			</div>
			<h3>VANET Project</h3>
			<p class="desc">
				Simulated a vehicular ad hoc network between vehicles and road-side units along Harrison
				Road in Baguio, using veins, OMNeT++, and SUMO (Simulation of Urban MObility).
			</p>
			<div class="tags">
				<span class="tag">veins</span><span class="tag">OMNeT++</span><span class="tag">SUMO</span>
			</div>
		</article>

		<article class="card" data-reveal style="--rd:.24s">
			<div class="card-top">
				<span class="status archived"><span class="dot"></span>Archived</span>
				<a class="card-link" href="https://github.com/shua-shua-jo">github <span>↗</span></a>
			</div>
			<h3>Rizzle</h3>
			<p class="desc">
				A mobile app designed and developed for the Philippine Institutions (P.I.) 100 class at UP
				Baguio.
			</p>
			<div class="tags"><span class="tag">Mobile App</span></div>
		</article>

		<article class="card" data-reveal style="--rd:.32s">
			<div class="card-top">
				<span class="status op"><span class="dot"></span>Thesis</span>
			</div>
			<h3>Baybayin ML Classification</h3>
			<p class="desc">
				"Evaluating Machine Learning Algorithms For Baybayin Character Classification" —
				undergraduate thesis exploring ML approaches for the ancient Filipino script.
			</p>
			<div class="tags">
				<span class="tag">Machine Learning</span><span class="tag">Python</span>
			</div>
		</article>
	</div>
</section>

<section id="stack">
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">02</span> Stack</span>
		<span class="section-sub">by category</span>
	</div>
	<div class="stack-grid">
		<div class="stack-group" data-reveal>
			<h4><span class="g-dot g-langs"></span>Languages</h4>
			<div class="stack-list">
				<span class="stack-item">Java</span><span class="stack-item">C#</span>
				<span class="stack-item">Python</span><span class="stack-item">JavaScript</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.08s">
			<h4><span class="g-dot g-frame"></span>Frameworks</h4>
			<div class="stack-list">
				<span class="stack-item">ASP.NET</span><span class="stack-item">Angular</span>
				<span class="stack-item">React</span><span class="stack-item">Svelte</span>
				<span class="stack-item">Node.js</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.16s">
			<h4><span class="g-dot g-db"></span>Databases</h4>
			<div class="stack-list">
				<span class="stack-item">SQL</span><span class="stack-item">MySQL</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.24s">
			<h4><span class="g-dot g-tools"></span>Tools</h4>
			<div class="stack-list">
				<span class="stack-item">Git</span><span class="stack-item">GitLab</span>
				<span class="stack-item">Docker</span><span class="stack-item">MATLAB</span>
				<span class="stack-item">Photoshop</span>
			</div>
		</div>
	</div>
</section>

<section id="log">
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">03</span> Log</span>
		<span class="section-sub">experience &amp; education</span>
	</div>
	<div class="timeline">
		<div class="log-entry" data-reveal>
			<div class="log-date">2025 — 2026</div>
			<div class="log-text">
				<strong>Junior Software Engineer, Netzwelt Inc. / Client Contract</strong> — full-stack development
				with ASP.NET and Angular; continued the engagement directly with the client after Netzwelt's closure.
			</div>
		</div>
		<div class="log-entry" data-reveal style="--rd:.07s">
			<div class="log-date">2024</div>
			<div class="log-text">
				<strong>B.S. Computer Science, UP Baguio</strong> — Cum Laude, GPA 1.45. Thesis: "Evaluating Machine
				Learning Algorithms For Baybayin Character Classification."
			</div>
		</div>
		<div class="log-entry" data-reveal style="--rd:.14s">
			<div class="log-date">2024</div>
			<div class="log-text">
				<strong>Mobile App Developer, UP Baguio</strong> — designed and built Rizzle for the Philippine
				Institutions 100 class.
			</div>
		</div>
		<div class="log-entry" data-reveal style="--rd:.21s">
			<div class="log-date">2023</div>
			<div class="log-text">
				<strong>Web App Developer, UP Baguio</strong> — built UP2GO to secure and streamline registrar
				form requests.
			</div>
		</div>
		<div class="log-entry" data-reveal style="--rd:.28s">
			<div class="log-date">2023</div>
			<div class="log-text">
				<strong>Graphic Designer, ComSciatUP.BAG &amp; Rotaract Club of UP Baguio</strong> — created graphics
				for organization publications.
			</div>
		</div>
	</div>
</section>

<Footer
	contactPhrase="let's talk"
	contactHeading="Let's build something<br /><span class='grad-text'>that matters.</span>"
	contactDesc="Open to software engineering roles, especially full-stack work with room to keep learning."
	links={{ github: true, linkedin: true }}
/>
