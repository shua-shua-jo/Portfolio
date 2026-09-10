<script>
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<!-- src/routes/data/+page.svelte -->
<svelte:head>
	<title>Joshua Abello — Data Analysis</title>
</svelte:head>

<section class="subhero">
	<div class="eyebrow" data-reveal>also building</div>
	<h1 data-reveal style="--rd:.08s">Research and analysis<br />behind the code</h1>
	<div class="role" data-reveal style="--rd:.16s">
		Data &amp; ML — academic foundation, growing into industry work
	</div>
	<p class="bio" data-reveal style="--rd:.24s">
		This side of my work comes from research and coursework rather than a data analyst job title —
		worth saying plainly. My thesis evaluated machine learning algorithms end-to-end, and a
		networking project involved simulating and analyzing real traffic data. I'm looking to translate
		that into more applied, business-facing data work.
	</p>
</section>

<section>
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">01</span> Research &amp; analysis</span>
		<span class="section-sub">2023–2024</span>
	</div>

	<div class="case-card" data-reveal>
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

	<div class="case-card" data-reveal style="--rd:.1s">
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
	<div class="section-head" data-reveal>
		<span class="section-title"><span class="idx">02</span> Toolkit</span>
		<span class="section-sub">by category</span>
	</div>
	<div class="stack-grid">
		<div class="stack-group" data-reveal>
			<h4><span class="g-dot g-langs"></span>Analysis</h4>
			<div class="stack-list">
				<span class="stack-item">Python</span><span class="stack-item">MATLAB</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.08s">
			<h4><span class="g-dot g-db"></span>Query &amp; storage</h4>
			<div class="stack-list">
				<span class="stack-item">SQL</span><span class="stack-item">MySQL</span>
			</div>
		</div>
		<div class="stack-group" data-reveal style="--rd:.16s">
			<h4><span class="g-dot g-tools"></span>Domain</h4>
			<div class="stack-list">
				<span class="stack-item">Machine Learning</span><span class="stack-item">Simulation</span>
			</div>
		</div>
	</div>
</section>

<Footer
	contactPhrase="let's talk data"
	contactHeading="From raw data<br /><span class='grad-text'>to conclusions.</span>"
	contactDesc="Interested in data analyst or analytics engineering roles, especially close to product decisions."
	links={{ github: true, linkedin: true }}
/>
