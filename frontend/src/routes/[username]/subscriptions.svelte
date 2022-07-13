<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block responsive-flex">
				<div class="ui-block-title">
					<div class="h6 title">Personas que sigues</div>
					<form class="w-search">
						<div class="form-group with-button is-empty">
							<input class="form-control" type="text" placeholder="Buscar persona..." />
							<button>
								<svg class="olymp-magnifying-glass-icon"
									><use xlink:href="#olymp-magnifying-glass-icon" /></svg
								>
							</button>
							<span class="material-input" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		{#each ['1', '1', '1', '1'] as item}
			<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="ui-block">
					<div class="friend-item">
						<div class="friend-header-thumb">
							<img src="/img/voyer/encabezado.jpg" style="width: 318px; height: 122px" alt="" />
						</div>
						<div class="friend-item-content">
							<div class="more">
								<svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /></svg>
								<ul class="more-dropdown">
									<li>
										<a href="#/">Ver perfil</a>
									</li>
									<li>
										<a href="#/">Reportar perfil</a>
									</li>
								</ul>
							</div>
							<div class="friend-avatar">
								<div class="author-thumb">
									<img src="/img/voyer/profile.png" style="width: 92px; height: 92px" alt="" />
								</div>
								<div class="author-content">
									<a href="#/?class=h5+author-name">ALEFRANKIE</a>
									<!-- <a href="#/" class="h5 author-name">ALEFRANKIE</a> -->
									<div class="country">@¿?</div>
								</div>
							</div>
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
												<div class="title">Amigos</div>
											</a>

											<a href="#/" class="friend-count-item">
												<div class="h6">0</div>
												<div class="title">Fotos</div>
											</a>
										</div>
										<div class="control-block-button" data-swiper-parallax="-100">
											<a href="#/" class="btn btn-control bg-red">
												<svg class="olymp-chat---messages-icon"
													><use xlink:href="#olymp-chat---messages-icon" /></svg
												>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
