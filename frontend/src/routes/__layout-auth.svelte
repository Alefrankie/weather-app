<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	export async function load({ session }) {
		if (session.authenticated) {
			return {
				status: 302,
				redirect: '/',
			}
		}
		return {}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/login/login.css" />
	<link rel="stylesheet" href="/css/generics.css" />
	<link rel="stylesheet" href="/css/voyer/fontawesome-all.min.css" />
</svelte:head>

<slot />
