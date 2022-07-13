<script>
	import { session } from '$app/stores';
	import { useFormatDate } from '$lib/hooks/useFormatDate';
	import { Messages } from '$lib/stores/Messages';
	import Avatar from '$lib/components/Avatar.svelte';
	import FormMessage from './FormMessage.svelte';
import { afterUpdate, beforeUpdate } from 'svelte';

	export let userSelected = null;

	let div;
	let autoscroll;
	beforeUpdate(() => {
		autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
	});
	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});
</script>

<div class="chat-field">
	<div class="ui-block-title">
		<h6 class="title">
			{userSelected.firstName}
			{userSelected.lastName}
		</h6>
		<a href="#/" class="more"
			><svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /> </svg>
		</a>
	</div>
	<div
		class="mCustomScrollbar ps ps--theme_default ps--active-y"
		data-mcs-theme="dark"
		data-ps-id="af7af66c-80e9-61a0-dce1-231caa188921"
	>
		<ul
			class="notification-list chat-message chat-message-field"
			style="overflow: auto; max-height: 450px;"
      bind:this={div}
		>
			{#each $Messages as item}
				{#if item.from.id === $session.id}
					<div style="float: right; width: 100%">
						<li
							title={`${useFormatDate(item.createdAt)} - ${item.from.firstName} ${
								item.from.lastName
							}`}
							style="float: right; padding: 10px 25px;"
						>
							<div class="notification-event">
								<div class="event-info-wrap" style="justify-content: right;">
									<a href="#/" class="h6 notification-friend">
										{item.from.username}
									</a>
								</div>
								<span class="chat-message-item">
									{item.text}
								</span>
								<div class="more">
									<svg class="olymp-three-dots-icon">
										<use xlink:href="#olymp-three-dots-icon" />
									</svg>
									<ul class="more-dropdown" style="color: black">
										<li>
											<button
												type="button"
												on:click={() => Messages.deleteMessage(item.id, $session.id)}
											>
												Eliminar
											</button>
										</li>
									</ul>
								</div>
							</div>
							<div class="author-thumb">
								<Avatar src={item.from.profilePhoto} />
							</div>
						</li>
					</div>
				{:else}
					<li
						title={`${useFormatDate(item.createdAt)} - ${item.from.firstName} ${
							item.from.lastName
						}`}
						style="padding: 10px 25px;"
					>
						<div class="author-thumb">
							<Avatar src={item.from.profilePhoto} />
						</div>
						<div class="notification-event">
							<div class="event-info-wrap">
								<a href="#/" class="h6 notification-friend">
									{item.from.username}
								</a>
							</div>
							<span class="chat-message-item">
								{item.text}
							</span>
							<div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="#olymp-three-dots-icon" />
								</svg>
								<ul class="more-dropdown" style="color: black">
									<li>
										<button
											type="button"
											on:click={() => Messages.deleteMessage(item.id, $session.id)}
										>
											Eliminar
										</button>
									</li>
								</ul>
							</div>
						</div>
					</li>
				{/if}
			{/each}
		</ul>
		<div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">
			<div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;" />
		</div>
		<div class="ps__scrollbar-y-rail" style="top: 0px; height: 450px; right: 0px;">
			<div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 327px;" />
		</div>
	</div>

	<FormMessage bind:userSelected />
</div>
