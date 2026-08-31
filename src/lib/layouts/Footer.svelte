<script lang="ts">
	let { footerHeading, footerText } = $props();
</script>

<section id="contact">
	<div class="rounded-lg border border-solid border-border bg-panel p-8 text-center">
		<h2 class="mb-2 font-mono text-[22px] text-white">{footerHeading}</h2>
		<p class="mb-6 text-[14px] text-text-dim">{footerText}</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a href="mailto:ejdl.abello03@gmail.com" class="btn btn-primary">Email me</a>
			<a href="https://github.com/shua-shua-jo" class="btn btn-ghost">GitHub ↗</a>
			<a href="https://www.linkedin.com/in/ejdl-abello/" class="btn btn-ghost">LinkedIn ↗</a>
		</div>
	</div>
</section>

<footer
	class="flex flex-wrap justify-between gap-2 border-t border-solid border-border py-5 pb-10 font-mono text-[12px] text-text-faint"
>
	<span>© 2026 Joshua Abello</span>
	<span class="flex items-center gap-1.5 text-green">
		<span class="pulse-dot" aria-hidden="true"></span>all systems operational · updated Aug 2026
	</span>
</footer>
