<script lang="ts">
	let { contactPhrase, contactHeading, contactDesc, links } = $props();
</script>

<section id="contact">
	<div class="contact-card" data-reveal>
		<div class="contact-inner">
			<div class="contact-eyebrow">// {contactPhrase}</div>
			<h2>{@html contactHeading}</h2>
			<p>
				{contactDesc}
			</p>
			<div class="contact-actions">
				<a class="btn btn-primary" href="mailto:ejdl.abello03@gmail.com"
					>Email me <span class="arrow">→</span></a
				>
				<a
					class="btn btn-ghost"
					href="https://github.com/shua-shua-jo"
					target="_blank"
					style:display={links.github == false ? 'none' : 'inline-flex'}>GitHub ↗</a
				>
				<a
					class="btn btn-ghost"
					href="https://www.linkedin.com/in/ejdl-abello/"
					target="_blank"
					style:display={links.linkedin == false ? 'none' : 'inline-flex'}>LinkedIn ↗</a
				>
			</div>
		</div>
	</div>
</section>

<footer>
	designed &amp; built by <span class="heart">ejdl.abello</span> · svelte + tailwind
</footer>
