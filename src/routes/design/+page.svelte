<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<!-- src/routes/design/+page.svelte -->
<svelte:head>
	<title>Joshua Abello — UI/UX Design</title>
</svelte:head>

<section class="subhero">
	<div class="eyebrow" data-reveal>also building</div>
	<h1 data-reveal style="--rd:.08s">Design that holds up<br />next to engineering</h1>
	<div class="role" data-reveal style="--rd:.16s">Graphic Design → growing into UI/UX</div>
	<p class="bio" data-reveal style="--rd:.24s">
		My design experience so far is graphic design for organization publications, not formal UI/UX
		case studies — I'm being upfront about that. What I bring from it: an eye for visual clarity,
		comfort with design tools, and a software background that makes handoff to engineering
		straightforward. I'm actively building toward UI/UX-specific work.
	</p>
</section>

<section>
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">01</span> Design work</span>
		<span class="section-sub">2023</span>
	</div>

	<div class="case-card" data-reveal>
		<h3>Publication graphics — ComSciatUP.BAG &amp; Rotaract Club of UP Baguio</h3>
		<div class="case-meta">Graphic Design · Photoshop</div>
		<p class="case-desc">
			Created and designed graphics for the publications of both organizations at UP Baguio —
			consistent visual material for a student computer science community group and a service club.
		</p>
		<div class="service-tags">
			<span class="tag">Photoshop</span><span class="tag">Publication design</span>
		</div>
	</div>
</section>

<section>
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">02</span> Toolkit</span>
		<span class="section-sub">current + growing</span>
	</div>
	<div class="stack-grid">
		<div class="stack-group" data-reveal>
			<h4><span class="g-dot g-langs"></span>Design</h4>
			<div class="stack-list">
				<span class="stack-item">Adobe Photoshop</span><span class="stack-item"
					>Adobe Illustrator</span
				>
				<span class="stack-item">Canva</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.08s">
			<h4><span class="g-dot g-frame"></span>From engineering</h4>
			<div class="stack-list">
				<span class="stack-item">React</span><span class="stack-item">Svelte</span>
				<span class="stack-item">Angular</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.16s">
			<h4><span class="g-dot g-db"></span>Building toward</h4>
			<div class="stack-list">
				<span class="stack-item">Figma</span><span class="stack-item">User research</span>
				<span class="stack-item">Prototyping</span>
			</div>
		</div>
	</div>
</section>

<Footer
	contactPhrase="let's talk design"
	contactHeading="Design &amp; engineering,<br /><span class='grad-text'>side by side.</span>"
	contactDesc="Interested in roles where design and engineering sit close together - I bring both."
	links={{ github: false, linkedin: true }}
/>
