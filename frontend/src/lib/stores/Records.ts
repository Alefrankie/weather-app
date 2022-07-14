import { session } from '$app/stores'
import { http } from '$lib/hooks/useFetch'
import type { IRecord } from '$lib/interfaces/IRecord'
import { get, writable } from 'svelte/store'

const createStore = () => {
	const { subscribe, set } = writable<IRecord[]>([])

	return {
		subscribe,
		getAll: async () => {
			const data = await http.Get({
				url: `/api/records/${get(session)._id}`
			})
			set(data)
			return data
		},
		set: (data: IRecord[]) => {
			set(data)
			return data
		},
		wipe: () => {
			set([])
		}
	}
}

export const Record = createStore()
