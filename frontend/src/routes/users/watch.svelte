<script lang="ts">
	import io from 'socket.io-client'
	const socket = io('https://services.voyerclub.com/', {
		transports: ['polling']
	})

	const config = {
		iceServers: [
			{
				urls: ['stun:stun.l.google.com:19302']
			}
		]
	}

	let peerConnection: any
	let videoRef = null as any

	socket.on('offer', (id, description) => {
		console.log(id)
		peerConnection = new RTCPeerConnection(config)
		peerConnection
			.setRemoteDescription(description)
			.then(() => peerConnection.createAnswer())
			.then((sdp: any) => peerConnection.setLocalDescription(sdp))
			.then(() => {
				socket.emit('answer', id, peerConnection.localDescription)
			})
		peerConnection.ontrack = (event: any) => {
			videoRef.srcObject = event.streams[0]
		}
		peerConnection.onicecandidate = (event: any) => {
			if (event.candidate) {
				socket.emit('candidate', id, event.candidate)
			}
		}
	})

	socket.on('candidate', (id, candidate) => {
		peerConnection
			.addIceCandidate(new RTCIceCandidate(candidate))
			.catch((e: any) => console.error(e))
	})

	socket.on('disconnectPeer', () => {
		peerConnection.close()
	})

	window.onunload = window.onbeforeunload = () => {
		socket.emit('watcher-disconnect')
		peerConnection.close()
		socket.close()
	}

	const handleWatcher = () => {
		socket.emit('watcher', localStorage.getItem('streamingId'), 'other')
	}
</script>

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block">
				<div class="ui-block-title inline-items">
					<div class="btn btn-control btn-control-small bg-yellow">
						<svg class="olymp-trophy-icon"><use xlink:href="#olymp-trophy-icon" /></svg>
					</div>
					<h6 class="title">Texto</h6>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block features-video">
				<div class="video-player">
					<video autoplay bind:this={videoRef} loading="lazy" style="width: 100%;" />

					<button class="play-video watch__button" on:click={() => handleWatcher()}>
						<svg class="olymp-play-icon"><use xlink:href="#olymp-play-icon" /></svg>
					</button>

					<div class="video-content">
						<div class="h4 title">Texto</div>
					</div>

					<div class="overlay" />
				</div>

				<div class="features-video-content">
					<article class="hentry post">
						<div class="post__author author vcard inline-items">
							<img loading="lazy" src="img/author-page.webp" width="36" height="36" alt="author" />

							<div class="author-date">
								<a class="h6 post__author-name fn" href="02-ProfilePage.html"> Usuario </a>
								<div class="post__date">
									<time class="published" datetime="2017-03-24T18:18"> Fecha </time>
								</div>
							</div>
						</div>

						<p>Texto</p>

						<div class="post-additional-info inline-items">
							<a href="/#" class="post-add-icon inline-items">
								<svg class="olymp-heart-icon"><use xlink:href="#olymp-heart-icon" /></svg>
								<span>0</span>
							</a>

							<div class="comments-shared">
								<a href="/#" class="post-add-icon inline-items">
									<svg class="olymp-speech-balloon-icon"
										><use xlink:href="#olymp-speech-balloon-icon" /></svg
									>
									<span>0</span>
								</a>
							</div>
						</div>

						<div class="control-block-button post-control-button">
							<a href="/#" class="btn btn-control">
								<svg class="olymp-like-post-icon"><use xlink:href="#olymp-like-post-icon" /></svg>
							</a>
						</div>
					</article>

					<div class="mCustomScrollbar" data-mcs-theme="dark">
						<ul class="comments-list">
							<!-- Comentarios -->
							<li class="comment-item">
								<div class="post__author author vcard inline-items">
									<img
										loading="lazy"
										src="img/avatar48-sm.webp"
										alt="author"
										width="28"
										height="28"
									/>

									<div class="author-date">
										<a class="h6 post__author-name fn" href="/#"> Usuario </a>
										<div class="post__date">
											<time class="published" datetime="2017-03-24T18:18"> Fecha </time>
										</div>
									</div>
								</div>
								<p>Texto</p>
							</li>
							<!--  -->
						</ul>
					</div>

					<form class="comment-form inline-items">
						<div class="post__author author vcard inline-items">
							<img loading="lazy" src="img/avatar73-sm.webp" alt="author" width="28" height="28" />

							<div class="form-group with-icon-right ">
								<textarea class="form-control" placeholder="Comentario..." />
								<div class="add-options-message">
									<a href="#/" class="options-message">
										<i class="fa fa-paper-plane" />
									</a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
