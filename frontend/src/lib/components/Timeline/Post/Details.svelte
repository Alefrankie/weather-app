<script>
	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '$lib/components/Links/LinkToUser.svelte'
	import { http } from '$lib/hooks/useFetch'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'
	export let post

	async function giveMeLike() {
		const postUpdated = await http.Post({
			url: '/posts/likes',
			body: { post },
		})
		SocketStore.emit('posts:like', postUpdated)
	}

	// SocketStore.on('posts:liked', (postUpdated) => {
	// 	post = postUpdated
	// 	Posts.updateLike(postUpdated)
	// })

	// Posts.like(post, $session)

	$: haveLike = post.likes?.find(({ user }) => user.id === $session._id) ? '#e14747' : '#ccc'
</script>

<!-- <div class="control-block-button post-control-button">
	<span on:click={giveMeLike} class="btn btn-control" style="background-color: {haveLike}">
		<svg class="olymp-like-post-icon">
			<use xlink:href="#olymp-like-post-icon" />
		</svg>
	</span>
</div> -->

<div class="post-additional-info inline-items" style="border: none;">
	<!-- <span on:click={() => giveMeLike()} style="cursor: pointer" class="post-add-icon inline-items">
		<i class="fa fa-heart" style="color: {haveLike}; font-size: 1rem" />
		<span>{post?.likes?.length || ''}</span>
	</span> -->

	<!-- <ul class="friends-harmonic">
		{#each post.likes as like, i}
			{#if i < 5}
				<li>
					<Avatar src={like.user.profilePhoto} />
				</li>
			{/if}
		{/each}
	</ul> -->

	<div class="names-people-likes">
		<!-- Mostrar la ultima persona que dio like -->
		<!-- {#if post.likes.length === 1}
			<LinkToUser id={post.lastUser.id}>
				{post.lastUser.username}
			</LinkToUser>

			<br /> ha reaccionado
		{:else if post.likes.length === 2}
			<LinkToUser id={post.lastUser.id}>
				{post.lastUser.username}
			</LinkToUser>
			y
			<LinkToUser id={post.secondLastUser.id}>
				{post.secondLastUser.username}
			</LinkToUser>
			<br />han reaccionado
		{:else if post.likes.length > 2}
			<LinkToUser id={post.lastUser.id}>
				{post.lastUser.username}
			</LinkToUser>
			<LinkToUser id={post.secondLastUser.id}>
				{post.secondLastUser.username}
			</LinkToUser>
			y
			<br />{post.likes.length - 2} personas han reaccionado
		{/if} -->
	</div>

	<div class="comments-shared">
		<span class="post-add-icon inline-items">
			<i class="fa fa-comments" style="font-size: 150%;" />
			&nbsp;
			<span style="font-weight: 600; font-size: 1rem;">{post.comments?.length}</span>
		</span>
	</div>
</div>
