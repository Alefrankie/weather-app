<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import { http } from '$lib/hooks/useFetch'
	import Loading from '../Loading.svelte'

	let users: any = []
	let key = ''

	$: if (key.length > 0) {
		users = http.Get({
			url: `/api/users/filter?key=${key}`,
		})
	} else {
		users = []
	}
</script>

<main>
	<div class="box-input">
		<input placeholder="Busca aquí personas o páginas..." type="text" bind:value={key} />
	</div>

	{#await users}
		<li>
			<Loading />
		</li>
	{:then users}
		<ul class:list-active={users.length > 0}>
			{#each users as item}
				<li>
					<Avatar />
					<div>
						<a href="/users/:id">{item.firstName} {item.lastName}</a>
						<span>Tú</span>
					</div>
				</li>
			{/each}
		</ul>
	{/await}
</main>

<style lang="scss">
	main {
		width: 40%;
	}

	@media (min-width: 1200px) {
		main {
			width: 30%;
		}
	}
	.box-input {
		display: flex;
		// border: 1px white solid;
		flex-direction: column;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
	}
	input {
		border: none;
		outline: none;
		padding: 1rem 0 1rem 2rem;
		font-size: 1.2rem;
		background-color: var(--secondary-color);
		border-radius: 50px;
		color: var(--primary-color);
	}

	ul {
		display: none;
		list-style: none;
		width: 100%;
		padding: 0.5rem 0.5rem 0rem 1rem;
		background-color: var(--third-color);
	}

	.list-active {
		display: list-item;
	}

	li {
		display: flex;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
		div {
			display: flex;
			flex-direction: column;
			margin-left: 1rem;
			font-size: 1.2rem;
			font-weight: 500;
			a {
				color: var(--primary-color);
				&:hover {
					color: var(--red-color);
				}
			}
			span {
				color: var(--text-color);
			}
		}
	}
</style>
