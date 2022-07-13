<script lang="ts">
	import { session } from '$app/stores';
	import { useFormatDate } from '$lib/hooks/useFormatDate';
	import { Chats } from '$lib/stores/Chats';
	import { Messages } from '$lib/stores/Messages';
	import Avatar from '$lib/components/Avatar.svelte';
	import LinkToUser from '../Links/LinkToUser.svelte';

	export let userSelected = null;

	function handleUserSelected(data) {
		userSelected = data;

		Messages.getMessages({
			sessionId: $session.id,
			subscriberId: userSelected.id
		});

		Chats.getChats($session.id);
	}

	Chats.getChats($session.id);
</script>

<div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
	<!-- Notification List Chat Messages -->
	<ul class="notification-list chat-message">
		{#each $Chats as item}
			<li>
				<Avatar src={item.from.profilePhoto} />
				<div class="notification-event">
					<LinkToUser
						id={item.from.id}
						class="h6 notification-friend"
					>
						{item.from.firstName}
						{item.from.lastName}
					</LinkToUser>

					<span class:not-read={item.read === false}>
						{item.text}
					</span>
					<span class="notification-date">
						<time class="entry-date updated" datetime="2018-07-07">
							{useFormatDate(item.createdAt)}
						</time>
					</span>
				</div>
				<span
					class="notification-icon"
					style="cursor: pointer;"
					on:click={() => handleUserSelected(item.from)}
				>
					<i class="fa fa-comments" style="font-size: 150%; color: #ccccc;" />
				</span>

				<div class="more">
					<svg class="olymp-three-dots-icon">
						<use xlink:href="#olymp-three-dots-icon" />
					</svg>
					<ul class="more-dropdown" />
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.not-read {
		font-weight: 800;
	}
</style>
