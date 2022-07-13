<script lang="ts" context="module">
	import { browser } from '$app/env'
	import Header from '$lib/components/Header/Header.svelte'

	export const load = async ({ session }) => {
		if (!session?.authenticated) {
			return {
				status: 302,
				redirect: '/auth/sign-in'
			}
		}
		// console.count()
		if (browser) {
			// Customers
		}
		return {}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/theme-font.min.css" />
	<link rel="stylesheet" href="/css/bootstrap.css" />
	<link rel="stylesheet" href="/css/fontawesome.min.css" />
	<link rel="stylesheet" href="/css/all.min.css" />
	<link rel="stylesheet" href="/css/generics.css" />
</svelte:head>

<Header />
<slot />

<div>
	<script src="/js/polyfills.js"></script>
	<script src="/js/webp-hero.js"></script>
	<script src="/js/bootstrap.js"></script>
	<script src="/js/svg-loader.js"></script>
</div>

<style>
	:root {
		--primary-color: #e4e6eb;
		--secondary-color: #ffffff1a;
		--third-color: #242526;
		--red-color: #be3333;
		--text-primary-color: #b0b3b8;
		--border-color: #3e4042;
		--body-color: #18191a;
		--border-radius-block: 10px;
	}

	:global(.icon) {
		font-size: 18px;
		color: var(--primary-color);
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--body-color);
	}
</style>
