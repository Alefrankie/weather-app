<script>
	import { goto } from '$app/navigation'

	import { session } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { http } from '$lib/hooks/useFetch'
	import { uppercaseString } from '$lib/utils/string'

	let currentUser = {
		username: 'Diwaii',
		password: '123456'
	}

	$: currentUser.username = uppercaseString(currentUser.username)
	$: currentUser.password = uppercaseString(currentUser.password)

	const signIn = () =>
		http
			.Get({
				url: '/api/users/sign-in'
			})
			.then(() => {
				session.set({ ...$session, authenticated: true })
				goto('/')
			})
</script>

<svelte:head>
	<title>TheWeather - Iniciar Sesión</title>
</svelte:head>

<div class="container" style="padding: 0;">
	<div class="forms-container">
		<div class="signin-signup">
			<form on:submit|preventDefault={signIn}>
				{#await signIn}
					<Loading />
				{:then value}
					<h2 class="title">Iniciar Sesión</h2>
				{:catch value}
					<p class="text-warning">{value}</p>
				{/await}

				<div class="input-field">
					<i class="fas fa-user" />
					<input
						placeholder="Usuario"
						required
						bind:value={currentUser.username}
					/>
				</div>
				<div class="input-field">
					<i class="fas fa-lock" />
					<input
						type="password"
						placeholder="Contraseña"
						required
						bind:value={currentUser.password}
					/>
				</div>
				<a href="/auth/forget-password" style="color: #585858"
					>Restaurar contraseña</a
				>
				<button type="submit" class="btn solid">Iniciar</button>
			</form>
		</div>
	</div>

	<div class="panels-container">
		<div class="panel left-panel">
			<div class="content">
				<h3>¿No posees cuenta?</h3>
				<p>
					No esperes más y únete a nuestra Red Social <strong>VoyerClub</strong>
				</p>
				<br />
				<a
					href="/auth/sign-up"
					style="text-decoration: none;"
					sveltekit:prefetch
					class="row justify-content-center"
				>
					<center><button class="btn transparent"> Registrarse </button></center
					>
				</a>
			</div>
			<!-- <img src="/img/base/portada.png" class="image" alt="IMAGEX" style="width: 80%" /> -->
		</div>
	</div>
</div>
