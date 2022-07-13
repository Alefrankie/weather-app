<script>
	import { goto } from '$app/navigation'
	import { http } from '$lib/hooks/useFetch'
	import { uppercaseString } from '$lib/utils/string'

	/*let currentUser = {
    firstName: "Alefrank",
    lastName: "Martinez",
    username: "Diwaii",
    email: "Alefrank.m@gmail.com",
    password: "123456",
    country: "Venezuela",
  };*/

	let currentUser = {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		country: '',
	}

	$: currentUser.firstName = uppercaseString(currentUser.firstName)
	$: currentUser.lastName = uppercaseString(currentUser.lastName)
	$: currentUser.username = uppercaseString(currentUser.username)
	$: currentUser.email = uppercaseString(currentUser.email)
	$: currentUser.password = uppercaseString(currentUser.password)

	async function signUp() {
		const msg = await http.Post({
			url: '/users/',
			body: currentUser,
		})
		goto('/auth/sign-in')
	}
</script>

<svelte:head>
	<title>VoyerClub - Registro</title>
</svelte:head>

<div class="container">
	<div class="forms-container">
		<div class="signin-signup movil">
			<form on:submit|preventDefault={signUp}>
				<h2 class="title">Registrarse</h2>
				<div class="input-field">
					<i class="fa fa-id-card" />
					<input
						placeholder="Nombres"
						autocomplete="off"
						required
						bind:value={currentUser.firstName}
					/>
				</div>
				<div class="input-field">
					<i class="fa fa-id-card" />
					<input
						placeholder="Apellidos"
						required
						autocomplete="off"
						bind:value={currentUser.lastName}
					/>
				</div>
				<div class="input-field">
					<i class="fa fa-user" />
					<input
						placeholder="Usuario"
						required
						autocomplete="off"
						bind:value={currentUser.username}
					/>
				</div>
				<div class="input-field">
					<i class="fa fa-lock" />
					<input
						type="password"
						placeholder="Password"
						required
						bind:value={currentUser.password}
					/>
				</div>
				<div class="input-field">
					<i class="fa fa-envelope" />
					<input
						type="email"
						placeholder="Email"
						required
						autocomplete="off"
						bind:value={currentUser.email}
					/>
				</div>
				<div class="input-field">
					<i class="fa fa-map" />
					<select
						required
						name="id_paises"
						class="form-control fill"
						style="border-radius: 25px; background: #f0f0f0; border: none; color: #a4a4a4;"
						bind:value={currentUser.country}
					>
						<!-- <option disabled selected>-- SELECCIONE --</option> -->
						<!-- Countries -->
						<!-- {#each ["countries"] as item} -->
						<option value="Venezuela" selected>Venezuela</option>
						<!-- {/each}*/ -->
					</select>
				</div>
				<div class="ui-block">
					<div class="available-widget">
						<div class="checkbox">
							<label style="color: #333">
								<input name="condiciones_uso" type="radio" value="1" required />
								Acepto Condiciones
							</label>
						</div>
					</div>
				</div>
				<br />
				<button type="submit" class="btn"> Registrarse </button>
			</form>
		</div>
	</div>
	<div class="panels-container">
		<div class="panel left-panel">
			<div class="content">
				<h3>Ingresa a VoyerClub</h3>
				<br />
				<a href="/auth/sign-in" sveltekit:prefetch style="text-decoration: none;">
					<center><button class="btn transparent" id="sign-in-btn"> Inicia Sesión </button></center>
				</a>
			</div>
			<img src="/img/base/portada.png" class="image" alt="IMAGEX" style="width: 80%" />
		</div>
	</div>
</div>

<style>
	@media (max-width: 800px) {
		.movil {
			margin-top: 25%;
		}
	}
</style>
