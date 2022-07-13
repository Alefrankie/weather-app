import type { IWeather } from '$lib/interfaces/IWeather'
import { writable } from 'svelte/store'

// interface IOneChat {
//   sessionId: string
//   subscriberId: string
// }

// const defaultValue: IWeather | null = null

const createStore = () => {
	const { subscribe, set } = writable<IWeather | null>()

	return {
		subscribe,
		set: (weather: IWeather) => {
			set(weather)
		},
		wipe: () => {
			set(null)
		}
	}
}

export const Weather = createStore()
