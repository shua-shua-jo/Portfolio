<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<svelte:head>
	<title>Joshua Abello — Game Dev (Learning)</title>
</svelte:head>

<section class="subhero">
	<span
		class="status-pill"
		style="background:var(--color-amber-dim); color:var(--color-amber); border-color:#4A3A1E;"
	>
		<span class="relative flex size-2">
			<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75"
			></span>
			<span class="relative inline-flex size-2 rounded-full bg-amber"></span>
		</span>in development
	</span>
	<div class="eyebrow" style="margin-top:18px;">new territory</div>
	<h1>Learning game development</h1>
	<div class="role">Currently: complete beginner, fully committed</div>
	<p class="bio">
		I don't have shipped games yet — this page exists so I have to keep it honest and keep it
		updated. I'm starting from zero: learning a game engine, finishing small projects instead of one
		big one, and posting progress here as it happens.
	</p>
</section>

<section>
	<div class="section-head">
		<span class="section-title">Roadmap</span>
		<span class="section-count">milestones</span>
	</div>

	<div class="service-row">
		<div class="status-dot dev" title="In progress"></div>
		<div class="service-body">
			<h3>Learn the fundamentals<span class="service-status dev">In progress</span></h3>
			<p class="service-desc">
				Working through Godot basics: scenes, nodes, GDScript, and 2D physics. Goal is to be
				comfortable enough to build without following a tutorial line-by-line.
			</p>
			<div class="service-tags">
				<span class="tag">Godot</span><span class="tag">GDScript</span>
			</div>
		</div>
	</div>

	<div class="service-row">
		<div
			class="status-dot"
			style="background:var(--text-faint); box-shadow:0 0 0 3px #1c2229;"
			title="Planned"
		></div>
		<div class="service-body">
			<h3>Ship a tiny first game<span class="service-status archived">Planned</span></h3>
			<p class="service-desc">
				Something small on purpose — a single-screen game with one mechanic. The goal is finishing,
				not scope.
			</p>
			<div class="service-tags"><span class="tag">Godot</span></div>
		</div>
	</div>

	<div class="service-row">
		<div
			class="status-dot"
			style="background:var(--text-faint); box-shadow:0 0 0 3px #1c2229;"
			title="Planned"
		></div>
		<div class="service-body">
			<h3>Game jam entry<span class="service-status archived">Planned</span></h3>
			<p class="service-desc">
				Enter a public game jam (likely a Ludum Dare or itch.io jam) to force a real deadline and
				get feedback from other people.
			</p>
			<div class="service-tags"><span class="tag">Game jam</span></div>
		</div>
	</div>

	<div class="service-row">
		<div
			class="status-dot"
			style="background:var(--text-faint); box-shadow:0 0 0 3px #1c2229;"
			title="Planned"
		></div>
		<div class="service-body">
			<h3>
				A project worth putting front and center<span class="service-status archived">Planned</span>
			</h3>
			<p class="service-desc">
				Once there's something I'm proud of, it moves up — maybe even to the homepage.
			</p>
			<div class="service-tags"><span class="tag">TBD</span></div>
		</div>
	</div>
</section>

<section>
	<div class="section-head">
		<span class="section-title">Log</span>
		<span class="section-count">progress notes</span>
	</div>
	<div>
		<div class="log-entry">
			<div class="log-date">2026-08</div>
			<div class="log-text">
				<strong>Started learning Godot</strong> — picked it for the built-in 2D tools and GDScript being
				easy to pick up coming from a C# / full-stack background.
			</div>
		</div>
	</div>
</section>

<Footer
	footerHeading="Following along?"
	footerText="This page will update as projects actually ship. If you're learning gamedev too, I'd like to hear from you."
/>
