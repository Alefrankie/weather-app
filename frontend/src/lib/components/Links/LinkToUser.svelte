<script>
	export let id
	const linking = () => {
		localStorage.setItem('userId', id)
	}
</script>

<a href="/user?id={id}" on:click={linking} rel="external" {...$$props}>
	<slot />
</a>
