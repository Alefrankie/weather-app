<script>
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	import Points from '$lib/components/Widgets/Points.svelte';
	import Suggestions from '$lib/components/Widgets/Suggestions.svelte';
</script>

<svelte:head>
	<title>TheWeather | Dashboard</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col-sm-12 col-md-12 col-lg-8">
			<Timeline />
		</div>
		<aside class="col-sm-12 col-md-12 col-lg-4">
			<Points />

			<!-- <Suggestions /> -->
		</aside>
	</div>
</div>

<a class="back-to-top" href="#/">
	<svg class="back-icon" width="14" height="18">
		<use xlink:href="#olymp-back-to-top" />
	</svg>
</a>
