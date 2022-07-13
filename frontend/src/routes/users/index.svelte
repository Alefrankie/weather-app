<script>
	import Timeline from '$lib/components/Weather/Location.svelte'
	import JoinEvent from '$lib/components/Widgets/JoinEvent.svelte'
	import JoinStreaming from '$lib/components/Widgets/JoinStreaming.svelte'
	import { Subscriber } from '$lib/stores/Subscriber'

	// const subscriberId = useQueryString('id')
	// const subscriberId = localStorage.getItem('userId')

	// Subscriber.getSubscriber(subscriberId)
	// Check Subscription
</script>

<div class="container">
	<div class="row">
		<Timeline userId={$Subscriber.id} />

		<div
			class="col col-xl-4 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
		>
			<JoinStreaming />
			<JoinEvent />
		</div>
	</div>
</div>
