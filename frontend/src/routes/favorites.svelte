<script lang="ts" context="module">
	import { browser } from '$app/env'

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
	<title>TheWeather - Favorites</title>
</svelte:head>

<script>
	import { useTimeAgo } from '$lib/hooks/useTimeAgo'
</script>

<div class="container">
	<div class="row" style="display: flex; justify-content: center;">
		<main class="col-sm-12 col-md-12 col-lg-6">
			<header>
				<figure
					class="icon"
					title="Locations favorite"
					style="margin-right: 10px;"
				>
					<i class="fa fa-star" />
				</figure>
				<span>Favorites</span>
			</header>

			<div class="history_list">
				<ul>
					<li>
						<!-- <Avatar /> -->
						<figure
							class="menu__icon"
							title="Locations favorite"
							style="color: var(--primary-color); font-size: 4rem;"
						>
							<i class="fa fa-compass" />
						</figure>
						<div>
							<p class="text">Text</p>

							<p class="text">Results: 10</p>

							<p class="text">
								Created at {useTimeAgo(new Date())}
							</p>
						</div>
					</li>

					<li>
						<!-- <Avatar /> -->
						<figure
							class="menu__icon"
							title="Locations favorite"
							style="color: var(--primary-color); font-size: 4rem;"
						>
							<i class="fa fa-compass" />
						</figure>
						<div>
							<p class="text">Text</p>

							<p class="text">Results: 10</p>

							<p class="text">
								Created at {useTimeAgo(new Date())}
							</p>
						</div>
					</li>
				</ul>
			</div>
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
	}

	.text {
		color: var(--primary-color);
	}
	span {
		color: var(--primary-color);
		font-size: 15px;
		font-weight: 600;
	}

	.history_list {
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
			div {
				display: flex;
				flex-direction: column;
				margin-left: 0.5rem;
				font-weight: 500;
				width: 90%;
				a {
					color: var(--primary-color);
					&:hover {
						color: var(--red-color);
					}
				}
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
