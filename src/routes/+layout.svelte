<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let isActive = (route: string) =>
		page.url.pathname === route || page.url.pathname === route + '/';

	let { children } = $props();

	let openMenu = $state(false);

	const toggleMenu = () => {
		openMenu = !openMenu;
	};

	const closeMenu = () => {
		openMenu = false;
	};

	$effect(() => {
		if (page.url.pathname) {
			openMenu = false;
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="sticky top-0 z-10 border-b border-border bg-[rgba(11,15,20,0.9)] backdrop-blur-sm">
	<div
		class="mx-auto my-0 flex max-w-210 items-center justify-between px-6 py-3.5 font-mono text-[13px]"
	>
		<span class="font-bold tracking-tight text-text">ejdl.abello</span>
		<nav class:open={openMenu} class="topbar-nav text-text-dim">
			<a href={resolve('/')} class:active={isActive(resolve('/'))} onclick={closeMenu}>software</a>
			<a href={resolve('/design')} class:active={isActive(resolve('/design'))} onclick={closeMenu}
				>design</a
			>
			<a href={resolve('/data')} class:active={isActive(resolve('/data'))} onclick={closeMenu}
				>data</a
			>
			<a href={resolve('/gamedev')} class:active={isActive(resolve('/gamedev'))} onclick={closeMenu}
				>game dev</a
			>
			<a href={resolve('/#contact')} onclick={closeMenu}>contact</a>
		</nav>
		<button
			class="menu-toggle group p-2"
			type="button"
			aria-expanded={openMenu}
			aria-label={openMenu ? 'Close menu' : 'Open menu'}
			onclick={toggleMenu}
		>
			<span class="sr-only">Menu</span>
			<svg
				class="pointer-events-none h-6 w-6 fill-current"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					class="origin-center translate-x-1.75 -translate-y-1.25 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
					y="7"
					width="9"
					height="2"
					rx="1"
				></rect>
				<rect
					class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
					y="7"
					width="16"
					height="2"
					rx="1"
				></rect>
				<rect
					class="origin-center translate-y-1.25 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[-225deg]"
					y="7"
					width="9"
					height="2"
					rx="1"
				></rect>
			</svg>
		</button>
	</div>
</div>

<div class="wrap">
	{@render children()}
</div>
