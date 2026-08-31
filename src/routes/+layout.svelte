<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let isActive = (route: string) =>
		page.url.pathname === route || page.url.pathname === route + '/';
	export const prerender = true;

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="sticky top-0 z-10 border-b border-border bg-[rgba(11,15,20,0.9)] backdrop-blur-sm">
	<div
		class="mx-auto my-0 flex max-w-210 items-center justify-between px-6 py-3.5 font-mono text-[13px]"
	>
		<span class="font-bold tracking-tight text-text">ejdl.abello</span>
		<nav class="topbar-nav flex gap-5 text-text-dim">
			<a href="/" class:active={isActive(resolve('/'))}>software</a>
			<a href="/uiux" class:active={isActive(resolve('/uiux'))}>ui/ux</a>
			<a href="/data" class:active={isActive(resolve('/data'))}>data</a>
			<a href="/gamedev" class:active={isActive(resolve('/gamedev'))}>game dev</a>
			<a href="/#contact">contact</a>
		</nav>
	</div>
</div>

<div class="wrap">
	{@render children()}
</div>
