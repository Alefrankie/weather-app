<script lang="ts">
	import { session } from '$app/stores'
	import ChatBox from '$lib/components/Streaming/ChatBox.svelte'
	import io from 'socket.io-client'

	let videoRef = undefined

	const socket = io('https://services.voyerclub.com/', {
		transports: ['polling'],
	})

	let broadcasterId = ''
	let peerConnections = {} as any
	let broadcastLaunched = false
	const constraints = {
		// audio: true,
		video: { facingMode: 'user' },
	}

	const config = {
		iceServers: [
			{
				urls: ['stun:stun.l.google.com:19302'],
			},
		],
	}

	socket.on('broadcaster', (id) => {
		broadcasterId = id
	})

	socket.on('watcher', (id) => {
		const peerConnection = new RTCPeerConnection(config)
		peerConnections[id] = peerConnection
		peerConnections = peerConnections[id]
		const stream = videoRef.srcObject
		stream.getTracks().forEach((track: any) => peerConnection.addTrack(track, stream))

		peerConnection.onicecandidate = (event) => {
			if (event.candidate) {
				socket.emit('candidate', id, event.candidate)
			}
		}

		peerConnection
			.createOffer()
			.then((sdp) => peerConnection.setLocalDescription(sdp))
			.then(() => {
				socket.emit('offer', id, peerConnection.localDescription)
			})
	})

	socket.on('answer', (id, description) => {
		peerConnections.setRemoteDescription(description)
	})

	socket.on('candidate', (id, candidate) => {
		peerConnections.addIceCandidate(new RTCIceCandidate(candidate))
	})

	socket.on('disconnectPeer', (id) => {
		peerConnections.close()
	})

	const handleCanPlay = () => {
		videoRef.play()
	}

	const launchBroadcast = async () => {
		// const res = await http.Post({
		//   url: `${HOST}/streaming/new`,
		//   body: {
		//     socket_id: broadcasterId,
		//     username: $session.username
		//   }
		// })
		// broadcastLaunched = true
		// const { payload: broadcasterData } = await res.json()
		// socket.emit('new-broadcaster', broadcasterData)
		// return broadcasterData

		navigator.mediaDevices.getUserMedia(constraints).then((data) => {
			videoRef.srcObject = data
		})
		localStorage.setItem('streamingId', socket.id)
		socket.emit('broadcaster', { id: socket.id })
		broadcastLaunched = true
	}

	const stopBroadcast = () => {
		socket.emit('disconnectPeer', socket.id)
		videoRef.pause()
		videoRef.srcObject = null
		broadcastLaunched = false
	}
</script>

<div class="container">
	<div class="row">
		<div class="col-12" style="display: flex; justify-content: space-between; gap: 1rem">
			<button
				class="btn-broadcast"
				disabled={broadcastLaunched}
				type="button"
				on:click={launchBroadcast}
			>
				Iniciar
			</button>
			<button
				class="btn-broadcast"
				disabled={!broadcastLaunched}
				type="button"
				on:click={stopBroadcast}
			>
				Finalizar
			</button>
		</div>
	</div>
</div>
<br />

<div class="container">
	<div class="row">
		<div class="col-12">
			<video
				autoPlay
				muted
				on:canplay={handleCanPlay}
				playsInline
				bind:this={videoRef}
				poster="/img/voyer/profile.png"
			/>

			<!-- <ChatBox /> -->
		</div>
	</div>
</div>

<style lang="scss">
	video {
		width: 100%;
		border: 1px solid var(--border-color);
		border-radius: 10px;
		object-fit: cover;
	}

	.btn-broadcast {
		border: 1px solid var(--border-color);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary-color);
		width: 50%;
		border-radius: 10px;
		font-size: 16px;
		padding: 0.5rem 0;
		&:disabled {
			color: var(--secondary-color);
		}
	}
</style>
