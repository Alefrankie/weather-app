<script>
	import { page } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { http } from '$lib/hooks/useFetch'

	$: user = http.Get({
		url: `/api/users/${$page.params.username}`
	})
</script>

{#await user}
	<div style="display: flex; justify-content: center;">
		<Loading />
	</div>
{:then user}
	<div class="container">
		<div class="cover-photo">
			<figure>
				<img src="/img/voyer/profile.png" alt="img" />
			</figure>
		</div>

		<div class="links">
			<ul>
				<li>
					<a href="/{$page.params.username}">Mi Perfil</a>
				</li>

				<li>
					<a href="/{$page.params.username}/subscriptions">Suscripciones</a>
				</li>

				<li>
					<a href="/{$page.params.username}/followers">Suscriptores</a>
				</li>
				<li>
					<a href="/{$page.params.username}/gallery">Galería</a>
				</li>

				<li>
					<a href="/{$page.params.username}/rate">Tarifa</a>
				</li>
			</ul>
		</div>
	</div>

	<br />

	<slot />
{:catch error}
	<div style="text-align: center;">
		<div
			class="content-bg-wrap bg-badges"
			style="height: 100vh; background-size: 100% 100%; z-index: -1"
		/>
		<div class="container">
			<div class="row">
				<div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
					<div class="main-header-content">
						<h1>VoyerClub</h1>
						<p>Usuario no encontrado</p>
						<p>{error.message}</p>
					</div>
					<br />
					<br />
					<br />
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
</style>
