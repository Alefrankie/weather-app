<script lang="ts">
	import { goto } from '$app/navigation'

	import { session } from '$app/stores'

	import { http } from '$lib/hooks/useFetch'
	import { Record } from '$lib/stores/Records'

	import { Weather } from '$lib/stores/Weather'

	let key = ''
	let timeoutId: any = null

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef0742f166mshbc8f849a5caddacp163f2djsn54cba83d5f58',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	}

	$: if (key.length > 0) {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}

		timeoutId = setTimeout(async () => {
			const promise = fetch(
				`https://weatherapi-com.p.rapidapi.com/current.json?q=${key}`,
				options
			).then((res) => res.json())
			Weather.set(promise)

			goto('/')

			if ($session.authenticated) {
				await http.Post({
					url: '/api/records/',
					body: {
						text: key,
						userId: $session._id
					}
				})

				const data = await http.Get({
					url: `/api/records/${$session._id}`
				})

				Record.set(data)
			}
		}, 500)
	} else {
		Weather.wipe()
	}
</script>

<main>
	<div class="box-input">
		<input
			placeholder="Busca aquí personas o páginas..."
			type="text"
			bind:value={key}
		/>
	</div>
</main>

<style lang="scss">
	main {
		width: 40%;
	}

	@media (min-width: 1200px) {
		main {
			width: 30%;
		}
	}

	.box-input {
		display: flex;
		// border: 1px white solid;
		flex-direction: column;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
	}

	input {
		border: none;
		outline: none;
		padding: 1rem 0 1rem 2rem;
		font-size: 1.2rem;
		background-color: var(--secondary-color);
		border-radius: 50px;
		color: var(--primary-color);
	}
</style>
