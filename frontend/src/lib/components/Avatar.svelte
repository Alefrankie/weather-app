<script>
	import { HOST_DEFAULT } from '$lib/hooks/useFetch'

	export let src = null
</script>

<div>
	<figure>
		<img
			loading="lazy"
			src={src ? `${HOST_DEFAULT}/files/${src}` : '/img/voyer/profile.png'}
			alt="author"
		/>
	</figure>
</div>

<style lang="scss">
	figure {
		width: 40px;
		height: 40px;
	}

	img {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
