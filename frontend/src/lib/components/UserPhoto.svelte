<script>
	import { session } from '$app/stores'

	// import { session } from '$app/stores'
	import { HOST_DEFAULT } from '$lib/hooks/useFetch'
	import LinkToUser from './Links/LinkToUser.svelte'
	let src = null
	let srcUploaded = null
	export let user = null

	async function uploadSrc() {
		const [file] = src.files

		srcUploaded.src = URL.createObjectURL(file)
		// alert("Multimedia subida correctamente");

		if (file) {
			const formData = new FormData()
			formData.append('profile-photo', file)
			formData.append('id', user.id)

			await fetch(`${HOST_DEFAULT}/api/user/change-profile-photo`, {
				body: formData,
				method: 'POST',
			})
		}
	}
</script>

<main>
	<div class="details">
		<span>
			{user.firstName}
			{user.lastName}
		</span>

		<span>@{user.username}</span>
	</div>

	<div class="avatar">
		<figure>
			<img
				src={user.profilePhoto
					? `${HOST_DEFAULT}/files/${user.profilePhoto}`
					: '/img/voyer/profile.png'}
				bind:this={srcUploaded}
				alt=""
			/>
		</figure>
		{#if user.id === $session._id}
			<label class="hover-layer">
				<input required name="file" bind:this={src} type="file" hidden on:change={uploadSrc} />
				<i class="fas fa-edit" />
			</label>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.details {
		display: flex;
		font-size: 16px;
		flex-direction: column;

		span:nth-child(1) {
			font-weight: bold;
			color: var(--primary-color);
		}
		span:nth-child(2) {
			color: var(--text-primary-color);
		}

		@media (max-width: 1200px) {
			span {
				display: none;
			}
		}
	}

	.avatar {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}

	img {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 100%;
	}

	.hover-layer {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		color: transparent;
		font-size: 16px;
	}

	.hover-layer:hover {
		background-color: rgb(0, 0, 0, 0.5);
		cursor: pointer;
		color: #fff;
		transition: 0.2s ease all;
	}
</style>
