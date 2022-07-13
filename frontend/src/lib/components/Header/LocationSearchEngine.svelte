<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import type { IWeather } from '$lib/interfaces/IWeather'
	import { Weather } from '$lib/stores/Weather'
	import Loading from '../Loading.svelte'

	export let weather: IWeather | Promise<IWeather> | null = null
	let key = '1'
	let timeoutId: any = null

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef0742f166mshbc8f849a5caddacp163f2djsn54cba83d5f58',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	}

	$: if (key.length > 0) {
		// users = http.Get({
		// 	url: `/api/users/filter?key=${key}`
		// })
		// if (timeoutId) {
		// 	clearTimeout(timeoutId)
		// }

		// timeoutId = setTimeout(() => {
		// 	weather = fetch(
		// 		`https://weatherapi-com.p.rapidapi.com/current.json?q=${key}`,
		// 		options
		// 	).then((response) => response.json())
		// }, 1000)

		new Promise((resolve) => {
			resolve(
				Weather.set({
					location: {
						name: 'Coro',
						region: 'Falcon',
						country: 'Venezuela',
						lat: 11.41,
						lon: -69.67,
						tz_id: 'America/Caracas',
						localtime_epoch: 1657723501,
						localtime: '2022-07-13 10:45'
					},
					current: {
						last_updated_epoch: 1657723500,
						last_updated: '2022-07-13 10:45',
						temp_c: 27.7,
						temp_f: 81.9,
						is_day: 1,
						condition: {
							text: 'Partly cloudy',
							icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
							code: 1003
						},
						wind_mph: 14.5,
						wind_kph: 23.4,
						wind_degree: 101,
						wind_dir: 'ESE',
						pressure_mb: 1015.0,
						pressure_in: 29.96,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 72,
						cloud: 28,
						feelslike_c: 30.6,
						feelslike_f: 87.1,
						vis_km: 10.0,
						vis_miles: 6.0,
						uv: 7.0,
						gust_mph: 16.8,
						gust_kph: 27.0
					}
				})
			)
		})
	} else {
		weather = null
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
