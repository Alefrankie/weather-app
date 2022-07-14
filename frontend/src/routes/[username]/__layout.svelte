<script lang="ts">
	import { page, session } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { http } from '$lib/hooks/useFetch'

	$: user = http.Get({
		url: `/api/users/${$page.params.username}`
	})

	let form = {
		fullName: $session.fullName,
		username: $session.username,
		password: $session.password
	}

	let promise: any = null
	async function signIn() {
		promise = http.Put({
			url: '/api/users/' + $session._id,
			body: form
		})

		session.set({
			_id: $session._id,
			fullName: form.fullName,
			username: form.username,
			password: form.password,
			authenticated: true
		})

		return promise
	}
</script>

{#await user}
	<div style="display: flex; justify-content: center;">
		<Loading />
	</div>
{:then}
	<div class="container">
		<div class="cover-photo">
			<figure>
				<img src="/img/voyer/profile.png" alt="img" />
			</figure>
		</div>

		<div class="links">
			<ul>
				<li>
					<a href="/{$page.params.username}">Welcome, {$session.fullName}</a>
				</li>
			</ul>
		</div>
	</div>

	<br />

	<div class="container">
		<div class="row" style="display: flex; justify-content: center;">
			<main class="col-sm-12 col-md-12 col-lg-4">
				<header>
					{#await promise}
						<Loading />
					{:then}
						<figure class="icon" style="margin-right: 10px;">
							<i class="fa fa-door-open" />
						</figure>
						<span>Update</span>
					{:catch value}
						<p class="text-warning">{value}</p>
					{/await}
				</header>

				<form on:submit|preventDefault={signIn}>
					<div class="input-field">
						<figure class="icon">
							<i class="fa fa-user" />
						</figure>
						<input
							placeholder="Full name"
							required
							bind:value={form.fullName}
						/>
					</div>

					<div class="input-field">
						<figure class="icon">
							<i class="fa fa-user" />
						</figure>
						<input placeholder="Usuario" required bind:value={form.username} />
					</div>
					<div class="input-field">
						<figure class="icon">
							<i class="fa fa-lock" />
						</figure>
						<input
							type="password"
							placeholder="Contraseña"
							required
							bind:value={form.password}
						/>
					</div>

					<button type="submit" class="btn solid">Update</button>
				</form>
			</main>
		</div>
	</div>

	<slot />
{:catch error}
	<div style="text-align: center;">
		<div class="container">
			<div class="row">
				<div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
					<h1>TheWeather</h1>
					<p>{error.message}</p>
				</div>
			</div>
		</div>
	</div>
{/await}

<style lang="scss">
	.cover-photo {
		overflow: hidden;
		border-radius: 10px 10px 0 0;
		width: 100%;
		height: 100%;
		position: relative;
		background-color: var(--third-color);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}
		// border: 1px solid #e6e6e6;

		figure {
			img {
				object-fit: cover;
				width: 100%;
				height: 20rem;
			}
		}
	}

	.links {
		background-color: var(--third-color);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 5rem;
		padding: 0 2rem;
		ul {
			display: flex;
			gap: 1rem;
			a {
				color: var(--primary-color);
				font-size: 15px;
				font-weight: 500;
				text-transform: uppercase;
				&:hover {
					color: var(--red-color);
				}
			}
		}
	}

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
