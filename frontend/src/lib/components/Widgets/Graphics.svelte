<script>
	import { useTimeAgo } from '$lib/hooks/useTimeAgo'

	import { Weather } from '$lib/stores/Weather'
	import Loading from '../Loading.svelte'
</script>

{#await $Weather}
	<Loading />
{:then $Weather}
	{#if $Weather?.current}
		<main>
			<span class="points">{$Weather.current.condition.text}</span>
			<figure class="icon" title="Locations favorite" style="font-size: 80px">
				<i class="fa fa-bolt" />
			</figure>
			<span>{$Weather.current.last_updated}</span>
			<span>{useTimeAgo(new Date($Weather.current.last_updated))}</span>
		</main>
	{:else if $Weather?.error}
		{$Weather?.error?.message}
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

	.description {
		color: var(--text-color);
		// border: 1px solid white;
		text-align: center;
	}
</style>
