<script lang="ts">
	import { goto } from '$app/navigation'

	import { session } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { http } from '$lib/hooks/useFetch'

	let form = {
		username: 'Diwaii'
	}

	let promise: any = null
	async function recoverPassword() {
		promise = http.Patch({
			url: '/api/users/recover-password',
			body: form
		})

		return promise
	}
</script>

<svelte:head>
	<title>TheWeather - Recover password</title>
</svelte:head>

<div class="container">
	<div class="row" style="display: flex; justify-content: center;">
		<main class="col-sm-12 col-md-12 col-lg-4">
			<header>
				{#await promise}
					<Loading />
				{:then password}
					<figure
						class="icon"
						title="Locations favorite"
						style="margin-right: 10px;"
					>
						<i class="fa fa-door-open" />
					</figure>

					{#if password}
						<span>Your new password is: {password}</span>
					{:else}
						<span>Recover password</span>
					{/if}
				{:catch value}
					<p class="text-warning">{value}</p>
				{/await}
			</header>

			<form on:submit|preventDefault={recoverPassword}>
				<div class="input-field">
					<figure class="icon" title="Locations favorite">
						<i class="fa fa-user" />
					</figure>
					<input placeholder="Usuario" required bind:value={form.username} />
				</div>

				<button type="submit" class="btn solid">Recover</button>
			</form>
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

	span {
		color: var(--primary-color);
		font-size: 15px;
		font-weight: 600;
	}

	form {
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
	}

	.input-field {
		display: flex;

		figure {
			margin-right: 10px;
			height: 100%;
		}

		input {
			flex-grow: 1;
			height: 2rem;
			border: none;
			border-radius: 8px;
			padding: 0 1rem;
			font-weight: 600;
		}
	}

	button {
		height: 2rem;
		border: none;
		border-radius: 8px;
		color: var(--primary-color);
		border-radius: 8px;
		border: 1px solid var(--primary-color);
		font-weight: 600;
		font-size: 15px;
		cursor: pointer;

		&:hover {
			background-color: var(--red-color);
		}
	}
</style>
