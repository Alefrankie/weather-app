<script lang="ts">
	import { browser } from '$app/env'

	import { useTimeAgo } from '$lib/hooks/useTimeAgo'
	import { Favorites } from '$lib/stores/Favorites'

	$: if (browser) {
		Favorites.getAll()
	}
</script>

<main>
	<figure class="menu__icon" title="Locations favorite">
		<i class="fa fa-star" />
	</figure>

	<div class="menu__body">
		<header>
			<span class="menu__body__title">Locations Favorite</span>
			<a href="favorites">View all</a>
		</header>

		<div class="list">
			<ul>
				{#each $Favorites.slice(0, 5) as e}
					<li>
						<figure class="menu__icon" title="Locations favorite">
							<i class="fa fa-flag" />
						</figure>
						<div>
							<span>{e.name}</span>
							<span>{e.region}</span>
							<span>{e.country}</span>
							<p>
								Added at {useTimeAgo(e.createdAt)}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		position: relative;

		&:hover {
			.menu__body {
				display: block;
			}
		}
	}
	.menu__icon {
		font-size: 18px;
		color: var(--primary-color);
	}

	.menu__body {
		// display: block;
		display: none;
		position: absolute;
		right: 0;
		border-radius: 10px;
		padding: 1rem;
		background-color: var(--third-color);

		width: 400px;
		header {
			display: flex;
			justify-content: space-between;
			.menu__body__title {
				color: var(--primary-color);
			}
			a {
				color: var(--primary-color);
				&:hover {
					color: var(--red-color);
				}
			}
		}

		.list {
			ul {
				list-style: none;
				width: 100%;
				padding-top: 1rem;
				font-size: 15px;
			}
			li {
				display: flex;
				padding: 0.5rem 0.5rem 0.5rem 0.5rem;
				div {
					display: flex;
					flex-direction: column;
					margin-left: 0.5rem;
					font-weight: 500;
					width: 90%;
					span {
						color: var(--primary-color);
						&:hover {
							color: var(--red-color);
						}
					}
					p {
						color: var(--text-color);
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
