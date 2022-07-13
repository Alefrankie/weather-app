<script lang="ts">
	import { session } from '$app/stores'
	import Post from '$lib/components/Timeline/Post/Post.svelte'
	import { http } from '$lib/hooks/useFetch'
	import { Posts } from '$lib/stores/Posts'
	import { afterUpdate, beforeUpdate } from 'svelte'
	import Loading from '../Loading.svelte'
	import Thinking from './Thinking.svelte'

	let div
	let autoscroll

	function refreshPosts() {
		Posts.getPosts($session._id)
	}

	beforeUpdate(() => {
		autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20
	})

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight)
	})

	$: posts = http.Get({
		url: `/api/posts/`,
	})
</script>

<!-- <Thinking /> -->

{#await posts}
	<div class="loading">
		<Loading />
	</div>
{:then data}
	<main>
		<div bind:this={div}>
			{#each data as post}
				<Post {post} />
			{:else}
				<article class="hentry post video">
					<div style="width: 100%; display: flex; justify-content: center;">
						<p class="h1 text-center">No hay publicaciones a la vista</p>
					</div>
				</article>
			{/each}
		</div>
		<!-- <span class="btn btn-control btn-more" on:click={refreshPosts}>
			<svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /> </svg>
		</span> -->
	</main>
{/await}

<style>
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
