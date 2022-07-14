<script lang="ts">
	import { goto } from '$app/navigation'
	import cookie from 'cookie'
	import { session } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { http } from '$lib/hooks/useFetch'

	let form = {
		username: '',
		password: ''
	}

	let promise: any = null
	async function signIn() {
		promise = http.Post({
			url: '/api/users/sign-in',
			body: form
		})

		const { _id, fullName, username, password } = await promise

		if (_id) {
			session.set({
				_id,
				fullName: fullName,
				username: username,
				password: password,
				authenticated: true
			})
			goto('/')
		}

		return promise
	}
</script>

<svelte:head>
	<title>TheWeather - Sign in</title>
</svelte:head>

<div class="container">
	<div class="row" style="display: flex; justify-content: center;">
		<main class="col-sm-12 col-md-12 col-lg-4">
			<header>
				{#await promise}
					<Loading />
				{:then}
					<figure
						class="icon"
						title="Locations favorite"
						style="margin-right: 10px;"
					>
						<i class="fa fa-door-open" />
					</figure>
					<span>Sign in</span>
				{:catch value}
					<p class="text-warning">{value}</p>
				{/await}
			</header>

			<form on:submit|preventDefault={signIn}>
				<div class="input-field">
					<figure class="icon" title="Locations favorite">
						<i class="fa fa-user" />
					</figure>
					<input placeholder="Usuario" required bind:value={form.username} />
				</div>
				<div class="input-field">
					<figure class="icon" title="Locations favorite">
						<i class="fa fa-lock" />
					</figure>
					<input
						type="password"
						placeholder="Contraseña"
						required
						bind:value={form.password}
					/>
				</div>

				<button type="submit" class="btn solid">Submit</button>

				<div class="options">
					<a href="/auth/forget-password" class="recover"> Forget password?</a>
				</div>
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

	.options {
		height: 2rem;
		border: none;
		border-radius: 8px;
		color: var(--primary-color);
		border-radius: 8px;
		font-weight: 600;
		font-size: 15px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;

		a:hover {
			color: var(--red-color);
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

	.recover {
		color: var(--terciary-color);
		font-size: 15px;
		font-weight: 600;
		text-align: center;
	}
</style>
