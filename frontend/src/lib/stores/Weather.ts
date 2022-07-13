import type { IWeather } from '$lib/interfaces/IWeather'
import { writable } from 'svelte/store'

// const defaultValue: any = {
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
// }

const createStore = () => {
	const { subscribe, set } = writable<IWeather | Promise<IWeather> | null>()

	return {
		subscribe,
		set: (weather: IWeather | Promise<IWeather>) => {
			set(weather)
		},
		wipe: () => {
			set(null)
		}
	}
}

export const Weather = createStore()
