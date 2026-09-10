// src/lib/scene.ts
// Client-side "scene" effects: scroll progress, cursor spotlight,
// card glow tracking, scroll reveals, and metric count-ups.
// Safe to call repeatedly (e.g. on route change) — listeners are
// registered once and reveals/counters re-scan the new DOM.

let listenersBound = false;
let progressEl: HTMLElement | null = null;
let topbarEl: HTMLElement | null = null;
let spotEl: HTMLElement | null = null;

const reduced = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function onScroll() {
	const h = document.documentElement;
	if (progressEl) {
		const max = h.scrollHeight - h.clientHeight;
		const p = max > 0 ? h.scrollTop / max : 0;
		progressEl.style.transform = `scaleX(${p})`;
	}
	if (topbarEl) topbarEl.classList.toggle('scrolled', h.scrollTop > 8);
}

function bindGlobalListeners() {
	if (listenersBound || typeof window === 'undefined') return;
	listenersBound = true;

	progressEl = document.querySelector('.progress');
	topbarEl = document.querySelector('.topbar');
	spotEl = document.querySelector('.spotlight');

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	// page-level cursor spotlight
	if (window.matchMedia('(pointer: fine)').matches && !reduced()) {
		window.addEventListener(
			'pointermove',
			(e) => {
				document.body.classList.add('has-pointer');
				if (spotEl) {
					spotEl.style.setProperty('--sx', `${e.clientX}px`);
					spotEl.style.setProperty('--sy', `${e.clientY}px`);
				}
			},
			{ passive: true }
		);
	}
}

function bindCardGlow() {
	document.querySelectorAll<HTMLElement>('.card, .metric, .case-card, .service-row').forEach((el) => {
		if (el.dataset.glowBound) return;
		el.dataset.glowBound = '1';
		el.addEventListener('pointermove', (e) => {
			const r = el.getBoundingClientRect();
			el.style.setProperty('--mx', `${e.clientX - r.left}px`);
			el.style.setProperty('--my', `${e.clientY - r.top}px`);
		});
	});
}

let revealIO: IntersectionObserver | null = null;
function initReveals() {
	const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
	if (reduced() || !('IntersectionObserver' in window)) {
		els.forEach((el) => el.classList.add('in'));
		return;
	}
	if (!revealIO) {
		revealIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						en.target.classList.add('in');
						revealIO?.unobserve(en.target);
					}
				});
			},
			{ threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
		);
	}
	els.forEach((el) => {
		if (!el.classList.contains('in')) revealIO!.observe(el);
	});
}

function countUp(el: HTMLElement) {
	const target = parseFloat(el.dataset.count || '0');
	const dec = parseInt(el.dataset.dec || '0', 10);
	const dur = 1400;
	let t0: number | null = null;
	const frame = (t: number) => {
		if (!t0) t0 = t;
		const k = Math.min((t - t0) / dur, 1);
		const eased = 1 - Math.pow(1 - k, 3);
		el.textContent = (target * eased).toFixed(dec);
		if (k < 1) requestAnimationFrame(frame);
		else el.textContent = target.toFixed(dec);
	};
	requestAnimationFrame(frame);
}

let countIO: IntersectionObserver | null = null;
function initCounters() {
	const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
	if (reduced() || !('IntersectionObserver' in window)) {
		els.forEach((el) => {
			el.textContent = parseFloat(el.dataset.count || '0').toFixed(
				parseInt(el.dataset.dec || '0', 10)
			);
		});
		return;
	}
	if (!countIO) {
		countIO = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						countUp(en.target as HTMLElement);
						countIO?.unobserve(en.target);
					}
				});
			},
			{ threshold: 0.6 }
		);
	}
	els.forEach((el) => {
		if (!el.dataset.counted) {
			el.dataset.counted = '1';
			countIO!.observe(el);
		}
	});
}

/** Call from `$effect` in +layout.svelte. Idempotent. */
export function initScene() {
	if (typeof window === 'undefined') return;
	bindGlobalListeners();
	bindCardGlow();
	initReveals();
	initCounters();
}
