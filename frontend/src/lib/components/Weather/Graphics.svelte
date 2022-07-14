<script lang="ts">
	import { session } from '$app/stores'

	import { http } from '$lib/hooks/useFetch'

	import { useTimeAgo } from '$lib/hooks/useTimeAgo'
	import type { IFavorite } from '$lib/interfaces/IFavorite'
	import type { IWeather } from '$lib/interfaces/IWeather'

	import { Weather } from '$lib/stores/Weather'
	import Loading from '../Loading.svelte'

	const addToFavorites = async (weather: IWeather) => {
		await http.Post({
			url: '/api/favorites/',
			body: {
				...weather.location,
				userId: $session._id
			}
		})

		alert('Added to favorites')
	}
</script>

{#await $Weather}
	<Loading />
{:then $Weather}
	{#if $Weather?.current}
		<main>
			<span class="points">{$Weather.current.condition.text}</span>
			<figure class="icon" style="font-size: 80px">
				<i class="fa fa-bolt" />
			</figure>
			<span>{$Weather.current.last_updated}</span>
			<span>{useTimeAgo(new Date($Weather.current.last_updated))}</span>
			<br />
			<span>
				<button class="icon" on:click={() => addToFavorites($Weather)}>
					Add to favorites &nbsp; <i class="fa fa-star" />
				</button>
			</span>
		</main>
	{/if}
{/await}

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
		border-radius: 10px;

		background-color: var(--third-color);
		height: 100%;
	}

	span {
		margin: 0;
		padding: 0;
		color: var(--primary-color);
	}
	.points {
		font-size: 5rem;
		color: var(--primary-color);
		// border: 1px solid white;
		text-align: center;
		&:hover {
			color: var(--red-color);
		}
	}

	.icon:hover {
		color: var(--red-color);
	}
</style>
