<script>
	import Details from '$lib/components/Weather/Details.svelte'
	import Location from '$lib/components/Weather/Location.svelte'
	import Points from '$lib/components/Widgets/Points.svelte'
</script>

<svelte:head>
	<title>TheWeather | Dashboard</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col-sm-12 col-md-12 col-lg-4">
			<Location />
		</div>

		<div class="col-sm-12 col-md-12 col-lg-4">
			<Points />
			<!-- <Suggestions /> -->
		</div>

		<div class="col-sm-12 col-md-12 col-lg-4">
			<Details />
		</div>
	</div>
</div>
