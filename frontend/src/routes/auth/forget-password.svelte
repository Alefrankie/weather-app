<script>
	import { goto } from '$app/navigation'
	import { http } from '$lib/hooks/useFetch'

	let currentUser = {
		username: ''
	}

	async function ForgetPassword() {
		const msg = await http.Post({
			url: '/users/forget-password',
			body: currentUser
		})
		goto('/auth/sign-in')
	}
</script>

<svelte:head>
	<title>VoyerClub - Recuperar Contraseña</title>
</svelte:head>

<div class="container">
	<div class="forms-container">
		<div class="signin-signup">
			<form on:submit|preventDefault={ForgetPassword}>
				<h2 class="title">Recuperar Contraseña</h2>

				<div class="input-field">
					<i class="fa fa-user" />
					<input
						placeholder="Usuario"
						required
						autocomplete="off"
						bind:value={currentUser.username}
					/>
				</div>

				<br />
				<button type="submit" class="btn"> Recuperar </button>
			</form>
		</div>
	</div>

	<div class="panels-container">
		<div class="panel left-panel">
			<div class="content">
				<h3>Ingresa a VoyerClub</h3>
				<br />
				<a
					href="/auth/sign-in"
					sveltekit:prefetch
					style="text-decoration: none;"
				>
					<button class="btn transparent" id="sign-in-btn">
						Inicia Sesión
					</button>
				</a>
			</div>
			<!-- <img src="/img/base/portada-5.png" class="image" alt="" /> -->
		</div>
	</div>
</div>
