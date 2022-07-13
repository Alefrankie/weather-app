<script lang="ts">
	import { browser } from '$app/env'

	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'
	import { http } from '$lib/hooks/useFetch'
	import LinkToUser from '../Links/LinkToUser.svelte'
	import Loading from '../Loading.svelte'

	$: suggestions = http.Get({
		url: `/api/users/suggestions/`,
	})
</script>

<div class="ui-block">
	<div class="ui-block-title">
		<h6 class="title">Sugerencias de Contenido</h6>
	</div>

	<ul class="widget w-friend-pages-added notification-list friend-requests">
		{#await suggestions}
			<Loading />
		{:then data}
			{#each data as { id, firstName, lastName, username, profilePhoto }}
				<li class="inline-items">
					<Avatar src={profilePhoto} />
					<div class="notification-event">
						<LinkToUser {id} class="h6 notification-friend">
							{firstName}
							{lastName}
						</LinkToUser>

						<span class="chat-message-item">@{username}</span>
					</div>
					<span class="notification-icon">
						<a href="#/" class="accept-request">
							<span class="icon-add without-text">
								<svg class="olymp-happy-face-icon"><use xlink:href="#olymp-happy-face-icon" /></svg>
							</span>
						</a>
					</span>
				</li>
			{/each}
		{:catch error}
			<!-- promise was rejected -->
		{/await}
	</ul>
	<!-- ... end W-Action -->
</div>
