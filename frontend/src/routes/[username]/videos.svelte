<script>
	import { session } from '$app/stores'
	import Loading from '$lib/components/Loading.svelte'
	import { HOST_DEFAULT, http } from '$lib/hooks/useFetch'

	$: posts = http.Get({
		url: `/api/users/suggestions/`,
	})
</script>

<svelte:head>
	<title>VoyerClub | Fotos</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block responsive-flex">
				<div class="ui-block-title">
					<div class="h6 title">Galería</div>
				</div>
			</div>
		</div>
	</div>
</div>
{#await posts}
	<Loading />
{:then posts}
	<div class="container">
		<div class="row">
			{#each [] as item}
				<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="ui-block">
						<div class="friend-item">
							<div class="friend-header-thumb">
								<!-- POST -->
								<!-- {#if ['.mp4'].includes(item.extension)}
									<div class="post-video">
										<div class="video-thumb">
											<img
												loading="lazy"
												src="{HOST_DEFAULT}/files/{item.src}"
												alt=""
												style="height: 10rem"
											/>
											<a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
												<svg class="olymp-play-icon"><use xlink:href="#olymp-play-icon" /></svg>
											</a>
										</div>

										<div class="video-content">
											<a href="#/" class="h4 title">Iron Maid - ChillGroves</a>
											<p>
												Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua...
											</p>
											<a href="#/" class="link-site">YOUTUBE.COM</a>
										</div>
									</div>
								{/if} -->
								<!-- 
								{#if ['.jpg', '.png'].includes(item.extension)}
									<img
										loading="lazy"
										src="{HOST_DEFAULT}/files/{item.src}"
										alt=""
										style="width: 100%; height: 100%; border-radius: 1rem;"
									/>
								{/if} -->
								<!-- END POST -->
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{:catch error}
	<p>{error}</p>
{/await}
