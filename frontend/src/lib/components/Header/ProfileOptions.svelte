<script>
	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'

	async function signOut() {
		await fetch('/auth/api/sign-out', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			},
			credentials: 'include'
		})

		session.set({
			_id: undefined,
			fullName: undefined,
			username: undefined,
			password: undefined,
			authenticated: false
		})
	}
</script>

<main>
	<figure class="menu__icon">
		<Avatar />
	</figure>

	<div class="menu__body">
		<header>
			<span class="menu__body__title">Yo, {$session.fullName}</span>
		</header>
		<hr />

		<div class="notifications__list">
			<ul>
				<li>
					<i class="fas fa-user" />
					<a href="/{$session.username}">Perfil</a>
				</li>
				<li>
					<i class="fa fa-sign-out-alt" />
					<button on:click={signOut}>Sign out</button>
				</li>
				<hr />
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

		width: 300px;
		header {
			display: flex;
			justify-content: space-between;
			.menu__body__title {
				color: var(--primary-color);
				font-size: 16px;
				font-weight: bold;
			}
			button {
				color: var(--primary-color);
				&:hover {
					color: var(--red-color);
				}
			}
		}

		.notifications__list {
			ul {
				list-style: none;
				width: 100%;
				padding-top: 1rem;
				font-size: 15px;
			}
			li {
				display: flex;
				padding: 0.5rem 0.5rem 0.5rem 0.5rem;
				align-items: center;
				gap: 0.5rem;
				a,
				button {
					color: var(--primary-color);
					&:hover {
						color: var(--red-color);
					}
				}
			}
		}
	}
</style>
