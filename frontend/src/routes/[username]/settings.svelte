<script>
	import { session } from '$app/stores'
	import { http } from '$lib/hooks/useFetch'

	let MENU = 'PersonalInformation'

	let form = {
		_id: $session._id,
		firstName: $session.firstName,
		username: $session.username,
		lastName: $session.lastName
	}

	const updateProfile = async () => {
		const data = await http.Post({
			url: '/users/update-profile',
			body: form
		})
	}

	let formPass = {
		id: $session._id,
		passActual: '',
		passNew: '',
		passConfirm: ''
	}
	let status = false
	$: status =
		formPass.passNew == formPass.passConfirm &&
		formPass.passNew != '' &&
		formPass.passConfirm != ''
			? true
			: false

	const updatePassword = async () => {
		try {
			const data = await http.Post({
				url: '/users/update-password',
				body: formPass
			})
		} catch (error) {
			console.log(error)
		}
	}
</script>

<div class="container">
	<div class="row">
		{#if MENU.includes('PersonalInformation')}
			<div
				class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
			>
				<div class="ui-block">
					<div class="ui-block-title">
						<h6 class="title">Información Personal</h6>
					</div>
					<div class="ui-block-content">
						<form on:submit|preventDefault={updateProfile}>
							<div class="row">
								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
									<div class="form-group label-floating">
										<label for="firstName" class="control-label">Nombre</label>
										<input
											id="firstName"
											class="form-control"
											bind:value={form.firstName}
											required
											autocomplete="off"
										/>
										<span class="material-input" />
									</div>

									<div class="form-group label-floating">
										<label for="username" class="control-label">Usuario</label>
										<input
											for="username"
											class="form-control"
											bind:value={form.username}
											required
											autocomplete="off"
										/>
										<span class="material-input" />
									</div>
								</div>

								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
									<div class="form-group label-floating">
										<label for="lastName" class="control-label">Apellidos</label
										>
										<input
											for="lastName"
											class="form-control"
											type="text"
											bind:value={form.lastName}
											required
											autocomplete="off"
										/>
										<span class="material-input" />
									</div>
								</div>

								<div class="col col-lg-12 col-md-12 col-sm-12 col-12">
									<button class="btn btn-primary btn-lg full-width"
										>Guardar Cambios</button
									>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		{/if}

		{#if MENU.includes('ChangePassword')}
			<div
				class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
			>
				<div class="ui-block">
					<div class="ui-block-title">
						<h6 class="title">Cambiar Contraseña</h6>
					</div>
					<div class="ui-block-content">
						<form on:submit|preventDefault={updatePassword}>
							<div class="row">
								<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group label-floating">
										<label for="current_password" class="control-label"
											>Confirmar Contraseña Actual</label
										>
										<input
											class="form-control"
											type="password"
											bind:value={formPass.passActual}
											id="passActual"
											autocomplete="off"
											required
										/>
										<span class="material-input" />
									</div>
								</div>

								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
									<div class="form-group label-floating is-empty">
										<label for="passNew" class="control-label"
											>Nueva Contraseña</label
										>
										<input
											class="form-control"
											type="password"
											bind:value={formPass.passNew}
											id="passNew"
											autocomplete="off"
											required
										/>
										<span class="material-input" />
									</div>
								</div>
								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
									<div class="form-group label-floating is-empty">
										<label for="passConfirm" class="control-label"
											>Confirmar Nueva Contraseña</label
										>
										<input
											class="form-control"
											type="password"
											bind:value={formPass.passConfirm}
											id="passConfirm"
											autocomplete="off"
											required
										/>
										<span class="material-input" />
									</div>
								</div>
							</div>

							{#if status}
								<div class="col col-lg-12 col-md-12 col-sm-12 col-12">
									<button class="btn btn-primary btn-lg full-width"
										>Guardar Cambios</button
									>
								</div>
							{/if}
						</form>

						<!-- ... end Change Password Form -->
					</div>
				</div>
			</div>
		{/if}

		<div
			class="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none"
		>
			<div class="ui-block">
				<div class="your-profile">
					<div class="accordion" id="accordionExample1">
						<div class="accordion-item">
							<div
								id="collapseOne1"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne1"
								data-bs-parent="#accordionExample1"
							>
								<div class="accordion-body">
									<ul class="your-profile-menu">
										<li>
											<a
												href="#/"
												on:click|preventDefault={() =>
													(MENU = 'PersonalInformation')}
											>
												<h6>Información Personal</h6>
											</a>
										</li>
										<li>
											<a
												href="#/"
												on:click|preventDefault={() =>
													(MENU = 'ChangePassword')}
											>
												<h6>Cambiar Contraseña</h6>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- ... end Your Profile  -->
			</div>
		</div>
	</div>
</div>
