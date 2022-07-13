<script lang="ts">
	import { session } from '$app/stores'
	import { HOST_DEFAULT, http } from '$lib/hooks/useFetch'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'

	let text = ''
	export let post
	async function sendComment() {
		if (text.length > 0) {
			const postUpdated = await http.Post({
				url: `/posts/${post.id}/comments`,
				body: { text, userId: $session.id },
			})

			SocketStore.emit('comments:add', postUpdated)
			text = ''
		} else {
			alert('No puedes dejar el campo vacío')
		}
	}

	SocketStore.on('comments:added', (postUpdated) => {
		post = postUpdated
		Posts.updateComments(postUpdated)
	})
</script>

<form on:submit|preventDefault class="comment-form inline-items">
	<div class="post__author author vcard inline-items">
		<figure style="width: 40px; height: 40px; overflow: hidden;">
			<img loading="lazy" src="{HOST_DEFAULT}/files/{$session.profilePhoto}" alt="author" />
		</figure>

		<div class="form-group with-icon-right ">
			<textarea
				class="form-control"
				bind:value={text}
				on:keypress={(e) => {
					if (e.key === 'Enter') sendComment()
				}}
			/>
			<!-- <div class="add-options-message">
        <a
          
          href="#/"
          class="options-message"
          data-bs-toggle="modal"
          data-bs-target="#update-header-photo"
        >
          <svg class="olymp-camera-icon">
            <use xlink:href="#olymp-camera-icon" />
          </svg>
        </a>
      </div> -->
		</div>
	</div>

	<button class="btn btn-md-2 btn-primary" on:click={sendComment}>Comentar</button>
</form>
