<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let is404 = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{page.status} — {is404 ? 'Page not found' : 'Something went wrong'}</title>
</svelte:head>

<section class="subhero">
	<span
		class="status-pill"
		style="background: rgba(255, 0, 0, 0.1); color: red; border-color:#452420;"
	>
		<span class="relative flex size-2">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"
			></span>
			<span class="relative inline-flex size-2 rounded-full bg-red-600"></span>
		</span>service unavailable
	</span>

	<div class="eyebrow" style="margin-top:18px;">error {page.status}</div>
	<h1>{is404 ? "This page doesn't exist" : 'Something went wrong'}</h1>
	<p class="bio">
		{#if is404}
			The page you're looking for isn't part of this site — check the URL, or pick up one of the
			links below.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'}
		{/if}
	</p>

	<div class="hero-actions" style="margin-top: 24px;">
		<a href={resolve('/')} class="btn btn-primary">Back to home</a>
		<a href={resolve('/design')} class="btn btn-ghost">Design</a>
		<a href={resolve('/data')} class="btn btn-ghost">Data</a>
		<a href={resolve('/gamedev')} class="btn btn-ghost">Game dev</a>
	</div>
</section>
