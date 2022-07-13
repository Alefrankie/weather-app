<script>
	import { session } from '$app/stores'
	import { HOST_DEFAULT } from '$lib/hooks/useFetch'

	// console.log($session);
	let src = null
	let srcUploaded = null
	export let coverPhoto = null
	async function uploadSrc() {
		const [file] = src.files

		srcUploaded.src = URL.createObjectURL(file)
		// alert("Multimedia subida correctamente");

		if (file) {
			const formData = new FormData()
			formData.append('profile-photo', file)
			formData.append('id', $session.id)

			await fetch(`${HOST_DEFAULT}/api/user/change-cover-photo`, {
				body: formData,
				method: 'POST',
			})
		}
	}
</script>

<div>
	<img
		src={coverPhoto ? `${HOST_DEFAULT}/files/${coverPhoto}` : '/img/voyer/encabezado.jpg'}
		bind:this={srcUploaded}
		alt="img"
	/>
</div>

<style>
	div {
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		z-index: 1;
	}

	img {
		height: 400px;
		width: 100%;
		object-fit: cover;
		object-position: top;
	}
</style>
