<script lang="ts">
	import { Weather } from '$lib/stores/Weather'
	import Loading from '../Loading.svelte'
</script>

{#await $Weather}
	<Loading />
{:then $Weather}
	{#if $Weather?.current}
		<main>
			<header>
				<figure
					class="icon"
					title="Locations favorite"
					style="margin-right: 10px;"
				>
					<i class="fa fa-globe" />
				</figure>
				<span>Location</span>
			</header>

			<div class="details">
				<span>
					Name: {$Weather.location.name || ''}
				</span>

				<span>
					Region: {$Weather.location.region || ''}
				</span>

				<span>
					Country: {$Weather.location.country || ''}
				</span>

				<span>
					Localtime: {$Weather.location.localtime}
				</span>
				<span>
					Latitude: {$Weather.location.lat}°
				</span>
				<span>
					Longitude: {$Weather.location.lon}°
				</span>
			</div>
		</main>
	{/if}
{/await}

<style>
	main {
		background-color: #242526;
		border-radius: 10px;
		padding: 2rem 2rem 1rem 2rem;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		height: 100%;
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
	}
</style>
