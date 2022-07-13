<script>
	import { session } from '$app/stores'
	import { http } from '$lib/hooks/useFetch'
	// import { SocketStore } from '$lib/stores/Socket'

	export let post
	let inputDisabled

	async function deletePost() {
		await http.Delete({
			url: `/posts/${post.id}`
		})

		window.alert('Publicacion Eliminada')
		// SocketStore.emit('posts:remove', post.id)
	}

	async function editPost() {
		inputDisabled = !inputDisabled
	}

	// SocketStore.on('posts:removed', (postId) => {
	// 	Posts.deletePost(postId)
	// })
</script>

{#if post.user?._id === $session._id}
	<div class="more">
		<span style="cursor: default;">...</span>
		<ul class="more-dropdown">
			<li>
				<button
					style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
					on:click={() => editPost()}
				>
					Editar Publicación
				</button>
			</li>
			<li>
				<button
					style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
					on:click={() => deletePost()}
				>
					Eliminar Publicación
				</button>
			</li>
		</ul>
	</div>
{/if}
