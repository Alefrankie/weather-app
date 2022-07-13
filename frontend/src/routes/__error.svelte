<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error: `${status}: ${error.message}`,
			},
		}
	}
</script>

<script>
	export let error
</script>

<div class="main-header" style="text-align: center;">
	<div class="content-bg-wrap bg-badges" style="height: 100vh; background-size: 100% 100%" />
	<div class="container">
		<div class="row">
			<div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
				<div class="main-header-content">
					<h1>VoyerClub</h1>
					<p>{error}</p>
				</div>
				<br />
				<br />
				<br />
				<a href="/auth/sign-in" class="btn btn-primary btn-md-2"> Iniciar Sesión </a>
			</div>
		</div>
	</div>
</div>
