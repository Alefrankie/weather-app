<script lang="ts">
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

			// Weather.set({
			// 	location: {
			// 		name: 'Caracas',
			// 		region: 'Distrito Federal',
			// 		country: 'Venezuela',
			// 		lat: 10.5,
			// 		lon: -66.92,
			// 		tz_id: 'America/Caracas',
			// 		localtime_epoch: 1657737655,
			// 		localtime: '2022-07-13 14:40'
			// 	},
			// 	current: {
			// 		last_updated: '2022-07-13 14:30',
			// 		temp_c: 26.0,
			// 		temp_f: 78.8,
			// 		is_day: 1,
			// 		condition: {
			// 			text: 'Sunny',
			// 			icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
			// 			code: 1000
			// 		},
			// 		wind_mph: 4.3,
			// 		wind_kph: 6.8,
			// 		wind_degree: 70,
			// 		wind_dir: 'ENE',
			// 		pressure_mb: 1017.0,
			// 		pressure_in: 30.03,
			// 		precip_mm: 0.0,
			// 		precip_in: 0.0,
			// 		humidity: 61,
			// 		cloud: 0,
			// 		feelslike_c: 27.1,
			// 		feelslike_f: 80.8,
			// 		vis_km: 10.0,
			// 		vis_miles: 6.0,
			// 		uv: 6.0,
			// 		gust_mph: 7.2,
			// 		gust_kph: 11.5
			// 	}
			// })
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
