<script>
	import { session } from '$app/stores'
	import { HOST_DEFAULT } from '$lib/hooks/useFetch'
	import Avatar from '../Avatar.svelte'
</script>

<div class="features-video-content">
	<article class="hentry post">
		<div class="post__author author vcard inline-items">
			<Avatar />
			<div class="author-date">
				<a class="h6 post__author-name fn" href="02-ProfilePage.html"> Usuario </a>
				<div class="post__date">
					<time class="published" datetime="2017-03-24T18:18"> Fecha </time>
				</div>
			</div>
		</div>

		<p>Texto</p>

		<div class="post-additional-info inline-items">
			<a href="/#" class="post-add-icon inline-items">
				<svg class="olymp-heart-icon"><use xlink:href="#olymp-heart-icon" /></svg>
				<span>0</span>
			</a>

			<div class="comments-shared">
				<a href="/#" class="post-add-icon inline-items">
					<svg class="olymp-speech-balloon-icon"
						><use xlink:href="#olymp-speech-balloon-icon" /></svg
					>
					<span>0</span>
				</a>
			</div>
		</div>

		<div class="control-block-button post-control-button">
			<a href="/#" class="btn btn-control">
				<svg class="olymp-like-post-icon"><use xlink:href="#olymp-like-post-icon" /></svg>
			</a>
		</div>
	</article>

	<form class="comment-form inline-items">
		<div class="post__author author vcard inline-items">
			<img
				loading="lazy"
				src="{HOST_DEFAULT}/files/{$session.profilePhoto}"
				alt="author"
				width="28"
				height="28"
			/>

			<div class="form-group with-icon-right ">
				<textarea class="form-control" placeholder="Comentario..." />
				<div class="add-options-message">
					<a href="/#" class="options-message">
						<i class="fa fa-paper-plane" />
					</a>
				</div>
			</div>
		</div>
	</form>
</div>
