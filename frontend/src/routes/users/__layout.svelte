<script>
	import CoverPhoto from '$lib/components/CoverPhoto.svelte'
	import UserPhoto from '$lib/components/UserPhoto.svelte'
	import { useQueryString } from '$lib/hooks/useQueryString'
	import { Subscriber } from '$lib/stores/Subscriber'

	const subscriberId = useQueryString('id')
	// const subscriberId = localStorage.getItem('userId')
</script>

{#await Subscriber.getSubscriber(subscriberId) then subscriber}
	<div class="container">
		<div class="row">
			<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="ui-block">
					<div class="top-header">
						<CoverPhoto coverPhoto={subscriber.coverPhoto} />

						<div class="profile-section">
							<div class="row">
								<div class="col col-lg-5 col-md-5 col-sm-12 col-12" style="padding: 10px 0px;">
									<ul class="profile-menu">
										<li>
											<a href="/user/profile/friends" class="">Suscripciones</a>
										</li>
									</ul>
								</div>
								<div
									class="col col-lg-5 ms-auto col-md-5 col-sm-12 col-12"
									style="padding: 10px 0px;"
								>
									<ul class="profile-menu">
										<li>
											<a
												href="/user/subscribe/?id={subscriber.id}"
												class="btn btn-danger"
												style="color: white"
											>
												Suscribirse
											</a>
										</li>

										<li>
											<a href="#/">Mensaje</a>
										</li>

										<li>
											<a href="/user/gallery" class="">Galería</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<UserPhoto user={subscriber} />
					</div>
				</div>
			</div>
		</div>
	</div>
	<slot />
{/await}
