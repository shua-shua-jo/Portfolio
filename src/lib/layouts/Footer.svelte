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
		<span class="relative flex size-1.5">
			<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75"
			></span>
			<span class="relative inline-flex size-1.5 rounded-full bg-green"></span>
		</span>all systems operational · updated {__LAST_UPDATED__}
	</span>
</footer>
