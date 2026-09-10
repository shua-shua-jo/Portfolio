<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import './layout.css';
	import favicon_dark from '$lib/assets/favicon.svg';
	import favicon_white from '$lib/assets/favicon_white.svg';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { initScene } from '$lib/scene';
	import { tick } from 'svelte';

	let isActive = (route: string) =>
		page.url.pathname === route || page.url.pathname === route + '/';

	let { children } = $props();

	let openMenu = $state(false);
	const toggleMenu = () => (openMenu = !openMenu);
	const closeMenu = () => (openMenu = false);

	// Re-run scene effects on every route change (after DOM updates).
	$effect(() => {
		page.url.pathname; // reactive dependency
		openMenu = false;
		tick().then(() => initScene());
	});
</script>

<svelte:head><link rel="icon" href={favicon_white} /></svelte:head>

<!-- atmosphere layers -->
<div class="atmos" aria-hidden="true">
	<div class="aurora a1"></div>
	<div class="aurora a2"></div>
	<div class="aurora a3"></div>
	<div class="grid-layer"></div>
	<div class="noise"></div>
	<div class="spotlight"></div>
</div>

<div class="progress"></div>

<header class="topbar">
	<div class="topbar-inner">
		<a class="logo" href={resolve('/')} aria-label="Home">
			<span class="mark"><img src={favicon_dark} alt="favicon_dark" /></span><span>ejdl.abello</span
			>
		</a>
		<nav id="navlinks" class="nav-links" class:open={openMenu} aria-label="Primary">
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
			<a href={resolve('/#contact')} class="nav-cta" onclick={closeMenu}>contact</a>
		</nav>
		<button
			class="menu-toggle"
			type="button"
			aria-expanded={openMenu}
			aria-controls="navlinks"
			aria-label={openMenu ? 'Close menu' : 'Open menu'}
			onclick={toggleMenu}
		>
			<span></span><span></span><span></span>
		</button>
	</div>
</header>

<div class="wrap">
	{@render children()}
</div>
