<script>
	import { session } from '$app/stores'
	import Thinking from '$lib/components/Weather/Thinking.svelte'
	import Timeline from '$lib/components/Weather/Location.svelte'
	import CreateEvent from '$lib/components/Widgets/CreateEvent.svelte'
	import CreateStreaming from '$lib/components/Widgets/CreateStreaming.svelte'
</script>

<svelte:head>
	<title>VoyerClub | Perfil</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col-sm-12 col-md-12 col-lg-8">
			<Timeline />
		</div>
		<aside class="col-sm-12 col-md-12 col-lg-4">
			<CreateStreaming />
			<CreateEvent />
			<!-- <Suggestions /> -->
		</aside>
	</div>
</div>
