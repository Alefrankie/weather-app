<script lnag="ts">
	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '$lib/components/Links/LinkToUser.svelte'
	import Details from '$lib/components/Timeline/Post/Details.svelte'
	import FormComment from '$lib/components/Timeline/Post/FormComment.svelte'
	import { HOST_DEFAULT, http } from '$lib/hooks/useFetch'
	import { useFormatDate } from '$lib/hooks/useFormatDate'
	import { useQueryString } from '$lib/hooks/useQueryString'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'
	import { afterUpdate, beforeUpdate, onMount } from 'svelte'

	let div
	let autoscroll
	let post

	onMount(async () => {
		await Posts.getPosts($session.id)
		const queryPostId = useQueryString('id')
		post = await $Posts.find((post) => post.id === queryPostId)
	})

	async function deleteComment(postId, commentId) {
		const postUpdated = await http.Delete({
			url: `/posts/${postId}/comments/${commentId}`,
		})

		post = postUpdated
		SocketStore.emit('comments:remove', postUpdated)
	}

	SocketStore.on('comments:removed', (postUpdated) => {
		Posts.updateComments(postUpdated)
	})

	beforeUpdate(() => {
		autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20
	})

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight)
	})
</script>

{#if post}
	<div class="container">
		<div class="row">
			<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="ui-block features-video">
					<!-- IMAGEN A MOSTRAR BRO -->
					<div class="video-player">
						<img
							loading="lazy"
							src="{HOST_DEFAULT}/files/{post.src}"
							alt="post"
							width="800"
							height="532"
							class="foto"
						/>
					</div>
					<!-- CAJA DE CONTENIDO -->
					<div class="features-video-content">
						<!-- APARTADO DEL DUEÑOL POST BRO, ES DECIR QUIEN LA SUBIO -->
						<article class="hentry post">
							<div class="post__author author vcard inline-items">
								<img
									loading="lazy"
									src="{HOST_DEFAULT}/files/{post.user.profilePhoto}"
									width="36"
									height="36"
									alt="author"
								/>

								<div class="author-date" title="{post.user.firstName} {post.user.lastName}">
									<a class="h6 post__author-name fn" href="02-ProfilePage.html">
										{post.user.username}
									</a>
									<div class="post__date">
										<time class="published" datetime="2017-03-24T18:18">
											{useFormatDate(post.createdAt)}
										</time>
									</div>
								</div>
							</div>

							<p>
								{post.text}
							</p>
							<Details {post} />
						</article>

						<!-- COMENTARIO PODEROSAS DE LAS PERSONAS QUE LE COMENTARION EL POST -->
						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="comments-list" style="max-height: 350px; overflow: auto;" bind:this={div}>
								{#each post.comments as comment}
									<li class="comment-item">
										<div class="post__author author vcard inline-items">
											<Avatar src={comment.user.profilePhoto} />
											<LinkToUser id={comment.user.id}>
												<div
													class="author-date"
													title="{comment.user.firstName} {comment.user.lastName}"
												>
													<span class="h6 post__author-name fn">{comment.user.username}</span>
													<div class="post__date">
														<time class="published" datetime="2017-03-24T18:18">
															{useFormatDate(comment.createdAt)}
														</time>
													</div>
												</div>
											</LinkToUser>
											{#if $session.id === comment.user.id}
												<div class="more">
													<svg class="olymp-three-dots-icon"
														><use xlink:href="#olymp-three-dots-icon" /></svg
													>
													<ul class="more-dropdown">
														<li>
															<button
																style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
																on:click={() => deleteComment(post.id, comment.id)}
															>
																Eliminar
															</button>
														</li>
													</ul>
												</div>
											{/if}
										</div>
										<p>
											{comment.text}
										</p>
									</li>
								{/each}
							</ul>
						</div>

						<!-- AQUI SE PUEDE COMENTAR BURGARIDADES PARA EL DUEÑO DEL POST -->
						<FormComment bind:post />
					</div>
				</div>
				<!-- ... end Features Video -->
			</div>
		</div>
	</div>
{/if}

<style type="text/css">
	.foto {
		height: 600px;
		object-fit: contain;
	}

	@media (max-width: 820px) {
		.foto {
			height: 1%;
			object-fit: contain;
		}
	}
</style>
