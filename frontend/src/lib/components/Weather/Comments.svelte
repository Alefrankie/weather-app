<script lang="ts">
	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '$lib/components/Links/LinkToUser.svelte'
	import { http } from '$lib/hooks/useFetch'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'

	export let post

	async function deleteComment(commentId) {
		const postUpdated = await http.Delete({
			url: `/posts/${post.id}/comments/${commentId}`,
		})

		SocketStore.emit('comments:remove', postUpdated)
	}

	// SocketStore.on('comments:removed', (postUpdated) => {
	// 	post = postUpdated
	// 	Posts.updateComments(postUpdated)
	// })

	let comments = [
		{
			id: 1,
			user: {
				id: 1,
				nombre: 'Alefrank',
				apellido: 'Martinez',
				avatar: 'https://randomuser.me/api/portraits/',
			},
			text: 'Hola',
		},
		{
			id: 1,
			user: {
				id: 1,
				nombre: 'José',
				apellido: 'Theis',
				avatar: 'https://randomuser.me/api/portraits/',
			},
			text: 'Hola',
		},
	]
</script>

<hr />

<ul>
	{#each comments.slice(0, 2) as { id, user, text }}
		<!-- {#each comments as comment, index} -->
		<li>
			<Avatar />
			<div class="comment">
				<div class="comment__block">
					<span class="comment__user">
						{user.nombre}
						{user.apellido}
					</span>
					<p class="comment__text">{text}</p>
				</div>
				<button class="comment__like">Me gusta</button>
			</div>

			<div class="post__author author vcard inline-items">
				<!-- Comments Options -->
				<!-- {#if $session._id === user.id}
					<div class="more">
						<svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /></svg>
						<ul class="more-dropdown">
							<li>
								<button
									style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
									on:click={() => deleteComment(id)}
								>
									Eliminar
								</button>
							</li>
						</ul>
					</div>
				{/if} -->
			</div>
		</li>
	{:else}
		<p class="more-comments">Sin Comentarios</p>
	{/each}

	<!-- {#if post.comments.length > 2}
		<a href="#/" class="more-comments"> View more comments + </a>
	{/if} -->
</ul>

<style>
	li {
		display: flex;
		margin-bottom: 0.5rem;
	}

	.comment {
		margin-left: 0.5rem;
	}
	.comment__block {
		display: flex;
		flex-direction: column;

		background-color: var(--secondary-color);
		border-radius: 10px;
		padding: 0.5rem 1rem 0rem 1rem;
	}

	.comment__user {
		font-size: 15px;
		color: var(--primary-color);
		font-weight: 700;
	}
	.comment__text {
		font-size: 14px;
		color: var(--text-primary-color);
		font-weight: 500;
	}

	.comment__like {
		font-size: 14px;
		color: var(--text-primary-color);
	}
</style>
