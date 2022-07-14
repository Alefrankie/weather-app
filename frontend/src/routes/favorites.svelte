<script lang="ts" context="module">
	import { browser } from '$app/env'
	import { session } from '$app/stores'
	import { http } from '$lib/hooks/useFetch'

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

<script lang="ts">
	import { useTimeAgo } from '$lib/hooks/useTimeAgo'
	import { Favorites } from '$lib/stores/Favorites'

	// $: Favorites.getAll()

	const remove = async (id: string) => {
		await http.Delete({
			url: '/api/favorites/' + id
		})

		alert('favorite removed')
		await refresh()
	}

	const clear = async () => {
		await http.Delete({
			url: '/api/favorites/clear/' + $session._id
		})

		alert('favorites cleared')
		await refresh()
	}

	const refresh = async () => {
		const promise = http.Get({
			url: `/api/favorites/${$session._id}`
		})

		const data = await promise
		Favorites.set(data)

		return promise
	}
</script>

<svelte:head>
	<title>TheWeather - Favorites</title>
</svelte:head>

<div class="container">
	<div class="row" style="display: flex; justify-content: center;">
		<main class="col-sm-12 col-md-12 col-lg-6">
			<header>
				<div>
					<figure class="icon" style="margin-right: 10px;">
						<i class="fa fa-star" />
					</figure>
					<span>Favorites</span>
				</div>

				<div>
					<figure class="icon" style="margin-right: 15px;" on:click={refresh}>
						<i class="fa fa-arrows-rotate" />
					</figure>

					<figure class="icon" style="margin-right: 10px;" on:click={clear}>
						<i class="fa fa-trash" />
					</figure>
				</div>
			</header>

			{#each $Favorites as e}
				<div class="list">
					<ul>
						<li>
							<!-- <Avatar /> -->
							<figure
								class="menu__icon"
								style="color: var(--primary-color); font-size: 4rem;"
							>
								<i class="fa fa-compass" />
							</figure>
							<div>
								<p class="text">{e.name}</p>

								<p class="text">{e.region}</p>

								<p class="text">{e.country}</p>

								<p class="text">
									Created at {useTimeAgo(e.createdAt)}
								</p>
							</div>

							<figure class="icon trash" on:click={() => remove(e._id)}>
								<i class="fa fa-trash" />
							</figure>
						</li>
					</ul>
				</div>
			{/each}
		</main>
	</div>
</div>

<style lang="scss">
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

		div:nth-child(1) {
			flex-grow: 1;
			display: flex;
		}

		div:nth-child(2) {
			display: flex;
			.icon:hover {
				color: var(--red-color);
			}
		}
	}

	.text {
		color: var(--primary-color);
	}
	span {
		color: var(--primary-color);
		font-size: 15px;
		font-weight: 600;
	}

	.list {
		ul {
			list-style: none;
			width: 100%;
			padding-top: 1rem;
			font-size: 15px;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		li {
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 0.5rem 0.5rem 0.5rem 0.5rem;
			border: 1px solid var(--primary-color);
			border-radius: 8px;
			padding: 1rem;
			position: relative;

			.icon {
				z-index: 99999999999;
				top: 0;
				right: 10px;
				font-size: 2rem;
				position: absolute;
				&:hover {
					color: var(--red-color);
				}
			}
			div {
				display: flex;
				flex-direction: column;
				margin-left: 0.5rem;
				font-weight: 500;
				width: 90%;
				// a {
				// 	color: var(--primary-color);
				// 	&:hover {
				// 		color: var(--red-color);
				// 	}
				// }
				// p {
				// 	color: var(--text-color);
				// 	white-space: nowrap;
				// 	text-overflow: ellipsis;
				// 	overflow: hidden;
				// 	font-size: 14px;
				// }
			}
		}
	}
</style>
