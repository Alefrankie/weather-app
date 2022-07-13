<script lang="ts">
	import LinkToPost from '$lib/components/Links/LinkToPost.svelte'
	import { HOST_DEFAULT, http } from '$lib/hooks/useFetch'

	export let post
	let inputDisabled = true
	let textEdited = ''

	function file_extension(filename) {
		return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined
	}

	async function uploadPost() {
		await http.Put({
			url: `/posts/${post.id}`,
			body: { text: post.text },
		})
		inputDisabled = !inputDisabled
	}
</script>

<form on:submit|preventDefault={uploadPost}>
	<input bind:value={post.text} style="color: #B0B3B8;" disabled={inputDisabled} />
	{#if !inputDisabled}
		<button class="btn btn-md-12 btn-primary">Actualizar</button>
	{/if}
</form>

<a href="/posts/{post._id}">
	{#if ['mp4'].includes(file_extension(post.src))}
		<div class="post-video">
			<div class="video-thumb">
				<img loading="lazy" src="{HOST_DEFAULT}/files/{post.src}" alt="" width="197" height="194" />
				<a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
					<svg class="olymp-play-icon"><use xlink:href="#olymp-play-icon" /></svg>
				</a>
			</div>

			<div class="video-content">
				<a href="#/" class="h4 title">Iron Maid - ChillGroves</a>
				<p>
					Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua...
				</p>
				<a href="#/" class="link-site">YOUTUBE.COM</a>
			</div>
		</div>
	{/if}

	{#if ['jpg', 'png'].includes(file_extension(post.src))}
		<div class="post-thumb">
			<img
				loading="lazy"
				src="{HOST_DEFAULT}/files/{post.src}"
				alt=""
				style="width: 100%; height: 100%"
			/>
		</div>
	{/if}
</a>

<style>
	input {
		border: none;
	}
</style>
