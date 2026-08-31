<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<svelte:head>
	<title>Joshua Abello — UI/UX Design</title>
</svelte:head>

<section class="subhero">
	<div class="eyebrow">also building</div>
	<h1>Design that engineers can ship</h1>
	<div class="role">UI/UX Design</div>
	<p class="bio">
		Before I write the backend, I sketch the screen. I care about interfaces that are legible under
		pressure — clear states, honest error messages, and layouts that hold up once real data shows
		up. Selected case studies below.
	</p>
</section>

<section>
	<div class="section-head">
		<span class="section-title">Case studies</span>
		<span class="section-count">3 projects</span>
	</div>

	<div class="case-card">
		<h3>Routewatch — alerting dashboard redesign</h3>
		<div class="case-meta">Figma · Design system · Usability testing</div>
		<p class="case-desc">
			Redesigned the alert triage screen for my own uptime-monitoring tool after watching three
			teammates get lost in it during an incident. Cut the average time-to-acknowledge an alert from
			40 seconds to under 10 by reworking the visual hierarchy around severity, not chronology.
		</p>
		<div class="service-tags">
			<span class="tag">Figma</span><span class="tag">Design tokens</span><span class="tag"
				>A11y audit</span
			>
		</div>
	</div>

	<div class="case-card">
		<h3>Ledgerline — onboarding flow</h3>
		<div class="case-meta">User research · Wireframes · Prototyping</div>
		<p class="case-desc">
			Ran five user interviews with early adopters who abandoned setup, then rebuilt the first-run
			flow around one decision per screen instead of a single long form. Setup completion rate went
			from roughly 55% to 89% in the following release.
		</p>
		<div class="service-tags">
			<span class="tag">Figma</span><span class="tag">User interviews</span><span class="tag"
				>Prototyping</span
			>
		</div>
	</div>

	<div class="case-card">
		<h3>Component library for internal tools</h3>
		<div class="case-meta">Design system · Documentation</div>
		<p class="case-desc">
			Built a small, opinionated component library so engineers on my team could ship internal admin
			tools without re-deciding button styles every sprint. Documented usage guidelines alongside
			the Figma kit.
		</p>
		<div class="service-tags">
			<span class="tag">Figma</span><span class="tag">Storybook</span><span class="tag"
				>Documentation</span
			>
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
			<h4>Design</h4>
			<div class="stack-list">
				<span class="stack-item">Figma</span><span class="stack-item">FigJam</span>
				<span class="stack-item">Illustrator</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Research</h4>
			<div class="stack-list">
				<span class="stack-item">User interviews</span><span class="stack-item"
					>Usability testing</span
				>
				<span class="stack-item">Card sorting</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Systems</h4>
			<div class="stack-list">
				<span class="stack-item">Design tokens</span><span class="stack-item">Storybook</span>
				<span class="stack-item">Accessibility (WCAG)</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Handoff</h4>
			<div class="stack-list">
				<span class="stack-item">Figma Dev Mode</span><span class="stack-item">HTML/CSS</span>
			</div>
		</div>
	</div>
</section>

<Footer
	footerHeading="Let's talk design"
	footerText="Interested in product or UX roles where design and engineering sit close together."
/>
