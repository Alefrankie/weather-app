<script>
	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'
	import { HOST_DEFAULT } from '$lib/hooks/useFetch'
	import { Posts } from '$lib/stores/Posts'

	let src = null
	let srcUploaded = null
	let text = ''
	let menu = 'Multimedia'
	let preview = false

	async function previewSrc() {
		const [file] = src.files
		srcUploaded.src = URL.createObjectURL(file)
		preview = true
	}

	async function uploadPost() {
		const formData = new FormData()

		if (menu === 'Multimedia') {
			if (!preview) return alert('Debe seleccionar una foto o vídeo')
			const [file] = src.files
			formData.append('file', file)
		}

		formData.append('user', $session._id)
		formData.append('text', text)

		await fetch(`${HOST_DEFAULT}/posts/upload`, {
			body: formData,
			method: 'POST',
		})

		Posts.save($session)
		window.alert('Publicación Cargada')
		// Posts.getPosts($session.id)
		// srcUploaded.src = '/img/photo.png'
		window.location.reload()
	}
</script>

<div class="ui-block">
	<div class="news-feed-form">
		<div class="tab-pane fade active show">
			<form on:submit|preventDefault={uploadPost} enctype="multipart/form-data">
				<Avatar src={$session.profilePhoto} />

				<div class="form-group with-icon label-floating is-empty">
					<label for="comment-area2" class="control-label">
						Comparte lo que estás pensando aquí...
					</label>
					<textarea
						bind:value={text}
						id="comment-area"
						class="form-control"
						required={menu === 'Multimedia' ? false : true}
					/>
				</div>

				<div class="add-options-message">
					{#if menu === 'Multimedia'}
						<label class="options-message" for="upload-src">
							<input bind:this={src} type="file" hidden id="upload-src" on:change={previewSrc} />
							<img
								bind:this={srcUploaded}
								src="/img/photo.png"
								alt="*"
								style="width: 5rem; height: 5rem; object-fit: cover;"
							/>
						</label>
					{/if}
					<button class="btn btn-primary btn-md-2">
						Publicar {menu}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
