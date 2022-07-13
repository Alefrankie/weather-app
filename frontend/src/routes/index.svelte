<script>
	import Loading from '$lib/components/Loading.svelte'
	import Details from '$lib/components/Weather/Details.svelte'
	import Location from '$lib/components/Weather/Location.svelte'
	import Graphics from '$lib/components/Weather/Graphics.svelte'
	import { Weather } from '$lib/stores/Weather'
</script>

<svelte:head>
	<title>TheWeather | Dashboard</title>
</svelte:head>

{#await $Weather}
	<Loading />
{:then $Weather}
	<div class="container">
		<div class="row">
			{#if $Weather?.current}
				<div class="col-sm-12 col-md-12 col-lg-4">
					<Location />
				</div>

				<div class="col-sm-12 col-md-12 col-lg-4">
					<Graphics />
				</div>

				<div class="col-sm-12 col-md-12 col-lg-4">
					<Details />
				</div>
			{:else if $Weather?.error}
				<span>{$Weather?.error?.message}</span>
			{:else}
				<h2>Welcome to Weather App</h2>
				<span> You can make a search for a location </span>
			{/if}
		</div>
	</div>
{/await}

<style>
	h2 {
		display: flex;
		justify-content: center;
		color: var(--primary-color);
		font-size: 30px;
	}

	span {
		display: flex;
		justify-content: center;
		color: var(--primary-color);
		font-size: 30px;
	}
</style>
