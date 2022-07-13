<script>
	export let id;
	// const linking = () => {
	// 	localStorage.setItem('userId', userId);
	// };
</script>

<a href="/post?id={id}" {...$$props}>
	<slot />
</a>
