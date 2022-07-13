<script>
	import Favorites from '$lib/components/Header/Favorites.svelte'
	import History from './History.svelte'
	import ProfileOptions from './ProfileOptions.svelte'
	import LocationSearchEngine from './LocationSearchEngine.svelte'
	import { page, session } from '$app/stores'
</script>

<header>
	<LocationSearchEngine />
	{#if $page.url.pathname !== '/'}
		<a href="/">
			<i class="fas fa-home" />
		</a>
	{/if}

	{#if $session.authenticated}
		<div class="menu">
			<ProfileOptions />

			<History />

			<Favorites />
		</div>
	{:else}
		<div class="menu">
			<a href="/auth/sign-up">Sign up</a>
			<a href="/auth/sign-in">Sign in</a>
		</div>
	{/if}
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 1;

		height: 5rem;
		background-color: var(--third-color);
		display: flex;
		margin-bottom: 3.5rem;
		z-index: 1;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		color: var(--primary-color);

		&:hover {
			color: var(--red-color);
		}
	}

	.menu {
		display: flex;
		padding-right: 50px;
		align-items: center;
		flex-direction: row-reverse;
		flex: 1;
		gap: 1rem;
	}
</style>
