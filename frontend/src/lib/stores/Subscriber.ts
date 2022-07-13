import { http } from '$lib/hooks/useFetch'
import { writable } from 'svelte/store'

const createStoreSubscriber = () => {
	const { subscribe, set, update } = writable({ id: '', coverPhoto: '' })

	return {
		subscribe,
		getSubscriber: async (subscriberId, session) => {
			const subscriber = await http.Get({
				url: `/users/${subscriberId}`,
			})

			// $session.subscriptions.map((item) => {
			//   if (
			//     item.subscriber.id === $session.id &&
			//     item.creator.id === $session.subscriber.id
			//   ) {
			//     $session.subscriber.subscriptionPayed = true
			//   }
			// })

			set(subscriber)

			return subscriber
		},
		wipe: () => {
			set(null)
		},
	}
}

export const Subscriber = createStoreSubscriber()
