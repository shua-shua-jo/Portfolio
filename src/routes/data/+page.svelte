<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<svelte:head>
	<title>Joshua Abello — Data Analysis</title>
</svelte:head>

<section class="subhero">
	<div class="eyebrow">also building</div>
	<h1>Research and analysis behind the code</h1>
	<div class="role">Data &amp; ML — academic foundation, growing into industry work</div>
	<p class="bio">
		This side of my work comes from research and coursework rather than a data analyst job title —
		worth saying plainly. My thesis evaluated machine learning algorithms end-to-end, and a
		networking project involved simulating and analyzing real traffic data. I'm looking to translate
		that into more applied, business-facing data work.
	</p>
</section>

<section>
	<div class="section-head">
		<span class="section-title">Research &amp; analysis</span>
		<span class="section-count">2023–2024</span>
	</div>

	<div class="case-card">
		<h3>Evaluating Machine Learning Algorithms for Baybayin Character Classification</h3>
		<div class="case-meta">Undergraduate Thesis · UP Baguio · 2024</div>
		<p class="case-desc">
			Compared multiple machine learning algorithms on their ability to classify characters from
			Baybayin, a pre-colonial Philippine writing system — model selection, evaluation, and analysis
			from raw data to conclusions.
		</p>
		<div class="service-tags">
			<span class="tag">Python</span><span class="tag">Machine Learning</span><span class="tag"
				>Model Evaluation</span
			>
		</div>
	</div>

	<div class="case-card">
		<h3>VANET Project</h3>
		<div class="case-meta">Simulation &amp; Analysis · UP Baguio · 2023</div>
		<p class="case-desc">
			Simulated a vehicular ad hoc network between vehicles and road-side units along Harrison Road
			in Baguio, using veins, OMNeT++, and SUMO — working with simulated traffic and network data to
			study communication behavior.
		</p>
		<div class="service-tags">
			<span class="tag">veins</span><span class="tag">OMNeT++</span><span class="tag">SUMO</span>
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
			<h4>Analysis</h4>
			<div class="stack-list">
				<span class="stack-item">Python</span><span class="stack-item">MATLAB</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Query &amp; storage</h4>
			<div class="stack-list">
				<span class="stack-item">SQL</span><span class="stack-item">MySQL</span>
			</div>
		</div>
		<div class="stack-group">
			<h4>Domain</h4>
			<div class="stack-list">
				<span class="stack-item">Machine Learning</span><span class="stack-item">Simulation</span>
			</div>
		</div>
	</div>
</section>

<Footer
	footerHeading="Let's talk data"
	footerText="Interested in data analyst or analytics engineering roles, especially close to product decisions."
/>
