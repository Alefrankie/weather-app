<script lang="ts">
	import { session } from '$app/stores'
	import { Chats, notReads } from '$lib/stores/Chats'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '../Links/LinkToUser.svelte'
	import { useTimeAgo } from '$lib/hooks/useTimeAgo'

	// Chats.getChats($session._id)

	function markAllRead() {
		Chats.markAllRead($session._id)
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

		<div class="favorites__list">
			<ul>
				<li>
					<!-- <Avatar /> -->
					<figure class="menu__icon" title="Locations favorite">
						<i class="fa fa-flag" />
					</figure>
					<div>
						<a href="/users/:id">Location</a>
						<p>
							Added at {useTimeAgo(new Date())}
						</p>
					</div>
				</li>
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
			button {
				color: var(--primary-color);
				&:hover {
					color: var(--red-color);
				}
			}
		}

		.favorites__list {
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
					a {
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
