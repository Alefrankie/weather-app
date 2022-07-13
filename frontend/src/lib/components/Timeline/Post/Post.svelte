<script lang="ts">
	import Content from '$lib/components/Timeline/Post/Content.svelte'
	import Details from '$lib/components/Timeline/Post/Details.svelte'
	import Header from '$lib/components/Timeline/Post/Header.svelte'
	import FormComment from '$lib/components/Timeline/Post/FormComment.svelte'
	import Comments from './Comments.svelte'

	export let post
</script>

<main>
	<Header {post} />

	<Content {post} />

	<Details {post} />
	<Comments {post} />
	<!-- <FormComment {post} /> -->
</main>

<style>
	main {
		background-color: #242526;
		border-radius: 10px;
		padding: 2rem 2rem 1rem 2rem;
		margin-bottom: 2rem;
	}
</style>
