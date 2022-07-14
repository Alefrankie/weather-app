import { session } from '$app/stores'
import { http } from '$lib/hooks/useFetch'
import type { IFavorite } from '$lib/interfaces/IFavorite'
import { get, writable } from 'svelte/store'

const createStore = () => {
	const { subscribe, set } = writable<IFavorite[]>([])

	return {
		subscribe,
		getAll: async () => {
			const data = await http.Get({
				url: `/api/favorites/${get(session)._id}`
			})
			set(data)
			return data
		},
		set: (data: IFavorite[]) => {
			set(data)
			return data
		},
		wipe: () => {
			set([])
		}
	}
}

export const Favorites = createStore()
