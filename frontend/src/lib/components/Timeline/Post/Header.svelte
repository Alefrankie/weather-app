<script>
	import Avatar from '$lib/components/Avatar.svelte'
	import { useFormatDate } from '$lib/hooks/useFormatDate'
	import Options from './Options.svelte'

	export let post
</script>

<main>
	<Avatar src={post.user?.profilePhoto} />
	<div class="details">
		<a class="" href="/users/{post.user?._id}">
			{post.user?.firstName || 'Nombre'}
			{post.user?.lastName || 'Apellido'}
		</a>

		<time>
			{useFormatDate(post?.createdAt)}
		</time>
	</div>
</main>

<Options {post} />

<style>
	main {
		display: flex;
	}

	.details {
		display: flex;
		flex-direction: column;
		margin-left: 0.5rem;
	}
	a {
		color: var(--primary-color);
		font-size: 15px;
		font-weight: 600;
	}

	time {
		color: var(--text-color);
		font-size: 14px;
	}
</style>
