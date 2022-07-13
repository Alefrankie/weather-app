<script>
	import { session } from '$app/stores'
	import { http } from '$lib/hooks/useFetch'
	import Avatar from '$lib/components/Avatar.svelte'

	async function whoAmI() {
		const headers = new Headers({
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `bearer ${localStorage.getItem('token')}`,
		})

		const { user } = await http.Get({
			url: '/users/who-am-i',
			headers,
		})
		session.set(user)
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	<title>VoyerClub - Administración</title>

	<!-- Global stylesheets -->
	<link
		href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900"
		rel="stylesheet"
		type="text/css"
	/>
	<link href="/css/admin/styles.min.css" rel="stylesheet" type="text/css" />
	<link href="/css/admin/all.min.css" rel="stylesheet" type="text/css" />
	<link href="/css/admin/fontawesome-all.min.css" rel="stylesheet" type="text/css" />
	<script src="/js/admin/jquery.min.js"></script>
	<script src="/js/admin/bootstrap.bundle.min.js"></script>
	<script src="/js/admin/d3.min.js"></script>
	<script src="/js/admin/d3_tooltip.js"></script>
	<script src="/js/admin/moment.min.js"></script>
	<script src="/js/admin/daterangepicker.js"></script>

	<script src="/js/admin/app.js"></script>
	<script src="/js/admin/dashboard.js"></script>
</svelte:head>

{#await whoAmI()}
	<div class="row justify-content-center">
		<img class="img-bottom" src="/img/loading.gif" style="width: 20%;" alt="" />
	</div>
{:then}
	<body>
		<div class="navbar navbar-expand-lg navbar-dark navbar-static">
			<div class="d-flex flex-1 d-lg-none">
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbar-mobile"
				>
					<i class="icon-paragraph-justify3" />
					<span class="badge badge-mark border-warning m-1" />
				</button>
			</div>

			<div class="navbar-brand wmin-0 mr-lg-5">
				<a href="/#">
					<span class="h4" style="color: white">VoyerClub</span>
				</a>
			</div>

			<div class="collapse navbar-collapse order-2 order-lg-1" id="navbar-mobile">
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<a href="/#" class="navbar-nav-link" data-toggle="dropdown">
							<i class="fa fa-exchange-alt" />
							<span class="d-lg-none ml-3">Users</span>
							<span class="badge badge-mark border-warning ml-auto ml-lg-0" />
						</a>

						<div class="dropdown-menu dropdown-content wmin-lg-300">
							<div class="dropdown-content-header">
								<span class="font-weight-semibold">Entornos</span>
								<a href="/#" class="text-body"><i class="icon-search4 font-size-base" /></a>
							</div>

							<div class="dropdown-content-body dropdown-scrollable">
								<ul class="media-list">
									<li class="media">
										<div class="media-body">
											<a href="/#" class="media-title font-weight-semibold">Modo Usuario</a>
										</div>
										<div class="ml-3 align-self-center">
											<span class="badge badge-mark border-danger" />
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<ul
				class="navbar-nav flex-row order-1 order-lg-2 flex-1 flex-lg-0 justify-content-end align-items-center"
			>
				<li class="nav-item nav-item-dropdown-lg dropdown dropdown-user h-100">
					<a
						href="/#"
						class="navbar-nav-link navbar-nav-link-toggler d-inline-flex align-items-center h-100 dropdown-toggle"
						data-toggle="dropdown"
					>
						<!-- <img src="/img/voyer/profile.png" class="rounded-pill" height="34" alt=""> -->
						<Avatar src={$session.profilePhoto} />
						<span class="d-none d-lg-inline-block ml-2"> {$session.username} </span>
					</a>

					<div class="dropdown-menu dropdown-menu-right">
						<a href="/#" class="dropdown-item"><i class="fa fa-user" /> Perfil </a>
						<a href="/#" class="dropdown-item"><i class="fa fa-sign-out-alt" /> Cerrar Sesión</a>
					</div>
				</li>
			</ul>
		</div>
		<!-- /main navbar -->

		<!-- Secondary navbar -->
		<div class="navbar navbar-expand navbar-light px-0 px-lg-3">
			<div class="overflow-auto overflow-lg-visible scrollbar-hidden flex-1">
				<ul class="navbar-nav flex-row text-nowrap">
					<li class="nav-item">
						<a href="index.html" class="navbar-nav-link active">
							<i class="fa fa-home" />
							Inicio
						</a>
					</li>

					<li class="nav-item dropdown nav-item-dropdown-lg">
						<a href="/#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-credit-card" />
							Administrar
						</a>

						<div class="dropdown-menu">
							<div class="dropdown-header">Opcion</div>
							<div class="dropdown-submenu dropdown-submenu-left">
								<a href="/#" class="dropdown-item dropdown-toggle">
									<i class="fa fa-dollar-sign" /> Pagos Pendientes
								</a>
								<a href="/#" class="dropdown-item dropdown-toggle">
									<i class="fa fa-user-plus" /> Suscripciones
								</a>
							</div>
						</div>
					</li>

					<li class="nav-item">
						<a href="index.html" class="navbar-nav-link active">
							<i class="fa fa-users" />
							Usuarios
						</a>
					</li>

					<li class="nav-item">
						<a href="index.html" class="navbar-nav-link active">
							<i class="fa fa-comment" />
							Mensajes
						</a>
					</li>

					<li class="nav-item">
						<a href="index.html" class="navbar-nav-link active">
							<i class="fa fa-ban" />
							Reportados
						</a>
					</li>

					<li class="nav-item">
						<a href="index.html" class="navbar-nav-link active">
							<i class="fa fa-cog" />
							Parametros
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- /secondary navbar -->

		<!-- CONTENT FAGG -->
		<div class="page-content p-3">
			<slot />
		</div>

		<!-- Footer -->
		<div class="navbar navbar-expand-lg navbar-light border-bottom-0 border-top">
			<div class="text-center d-lg-none w-100">
				<button
					type="button"
					class="navbar-toggler dropdown-toggle"
					data-toggle="collapse"
					data-target="#navbar-footer"
				>
					<i class="icon-unfold mr-2" />
					Footer
				</button>
			</div>

			<div class="navbar-collapse collapse" id="navbar-footer">
				<span class="navbar-text">
					2022 <a href="/#"> VoyerClub </a>
				</span>
			</div>
		</div>
	</body>
{:catch { message }}
	{#if (message = 'Unauthorized')}
		<div class="main-header" style="text-align: center;">
			<div class="content-bg-wrap bg-badges" style="height: 100vh; background-size: 100% 100%" />
			<div class="container">
				<div class="row">
					<div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
						<div class="main-header-content">
							<h1>VoyerClub</h1>
							<p>Disculpe las molestias, pero necesita iniciar sesión primero antes de continuar</p>
						</div>
						<br />
						<br />
						<br />
						<a href="/auth/sign-in" class="btn btn-primary btn-md-2"> Iniciar Sesión </a>
					</div>
				</div>
			</div>
		</div>
	{/if}
{/await}
