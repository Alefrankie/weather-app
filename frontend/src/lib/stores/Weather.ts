import type { IWeather } from '$lib/interfaces/IWeather'
import { writable } from 'svelte/store'

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
