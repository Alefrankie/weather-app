<script lang="ts">
	import { Weather } from '$lib/stores/Weather'
	import Loading from '../Loading.svelte'
</script>

{#await $Weather}
	<div class="loading">
		<Loading />
	</div>
{:then}
	<main>
		<header>
			<figure
				class="icon"
				title="Locations favorite"
				style="margin-right: 10px;"
			>
				<i class="fa fa-flag" />
			</figure>
			<span>Details</span>
		</header>
		{#if $Weather}
			<div class="details">
				<span>
					Temperature: {$Weather?.current.temp_c + 'C' || ''}
					<figure class="icon">
						<i class="fa 	fa-thermometer-half" />
					</figure>
				</span>

				<span>
					Thermal sensation: {$Weather?.current.feelslike_c || ''}
					<figure class="icon">
						<i class="fa fa-thermometer" />
					</figure>
				</span>

				<span>
					Speed Wind: {$Weather?.current.wind_kph + 'K/H' || ''}
					<figure class="icon">
						<i class="fa 	fa-gauge" />
					</figure>
				</span>

				<span>
					Direction Wind: {$Weather?.current.wind_dir || ''}
					<figure class="icon">
						<i class="fa 	fa-thermometer-half" />
					</figure>
				</span>

				<span>
					Humidity: {$Weather?.current.humidity || ''}
					<figure class="icon">
						<i class="fa fa-droplet" />
					</figure>
				</span>

				<!-- 
"is_day":1
"condition":{3 items
"text":"Partly cloudy"
"icon":"//cdn.weatherapi.com/weather/64x64/day/116.png"
"code":1003
}
-->
			</div>
		{:else}
			<article class="hentry post video">
				<div style="width: 100%; display: flex; justify-content: center;">
					<p class="h1 text-center">No hay publicaciones a la vista</p>
				</div>
			</article>
		{/if}
	</main>
{/await}

<style>
	main {
		background-color: #242526;
		border-radius: 10px;
		padding: 2rem 2rem 1rem 2rem;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}

	header {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 16px;
		color: var(--primary-color);
	}

	.details {
		display: flex;
		flex-direction: column;
		margin-left: 0.5rem;
		gap: 0.5rem;
	}
	span {
		color: var(--primary-color);
		font-size: 15px;
		font-weight: 600;
		display: flex;
		gap: 0.5rem;
	}
</style>
