<script>
	import { session } from '$app/stores'
	import LinkToUser from '$lib/components/Links/LinkToUser.svelte'
	import Loading from '$lib/components/Loading.svelte'
	import { HOST_DEFAULT, http } from '$lib/hooks/useFetch'

	$: suggestions = http.Get({
		url: `/api/users/suggestions`,
	})
</script>

<svelte:head>
	<title>VoyerClub | Sugerencias</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col-12 suggestions">
			<span>Sugerencias de Perfiles del Momento 🔥</span>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		{#await suggestions}
			<Loading />
		{:then suggestions}
			{#each suggestions as item}
				<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="card__suggestion">
						<div class="card__header">
							<img src={item.coverPhoto || '/img/voyer/encabezado.jpg'} alt="cover" />
						</div>
						<div class="card__avatar">
							<figure>
								<img
									src={item.profilePhoto
										? `${HOST_DEFAULT}/files/${item.profilePhoto}`
										: '/img/voyer/profile.png'}
									alt=""
								/>
							</figure>
						</div>

						<div class="card__link">
							<a href="/{item.username}" id={item.id}>
								{item.firstName}
								{item.lastName}
							</a>
							<span>@{item.username}</span>
						</div>

						<div class="friend-item-content">
							<div
								class="swiper-container swiper-swiper-unique-id-3 initialized"
								data-slide="fade"
								id="swiper-unique-id-3"
							>
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="friend-count" data-swiper-parallax="-500">
											<a href="#/" class="friend-count-item">
												<div class="h6">1</div>
												<div class="title">Seguidores</div>
											</a>

											<a href="#/" class="friend-count-item">
												<div class="h6">3</div>
												<div class="title">Seguidos</div>
											</a>

											<a href="#/" class="friend-count-item">
												<div class="h6">3</div>
												<div class="title">Amigos</div>
											</a>
										</div>
										<div
											class="control-block-button"
											style="display: flex; justify-content: center;"
										>
											<button class="btn btn-control bg-red">
												<span>
													<i class="fas fa-comments" />
												</span>
											</button>

											<button class="btn btn-control bg-red">
												<span>
													<i class="fas fa-user-plus" />
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else}
				No hay sugerencias
			{/each}
		{:catch error}
			<h1>Ha ocurrido un error {error}</h1>
		{/await}
	</div>
</div>

<style lang="scss">
	.suggestions {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 2rem;
		border-radius: 10px;
		padding: 2rem 2rem;

		background-color: var(--third-color);

		span {
			font-size: 16px;
			font-weight: 500;
			color: var(--primary-color);
		}
	}

	.card__suggestion {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		border-radius: 10px;
		padding: 1rem 1rem;

		background-color: var(--third-color);
	}

	.card__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		border-radius: 10px;
	}

	.card__avatar {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}

	.card__link {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}
</style>
