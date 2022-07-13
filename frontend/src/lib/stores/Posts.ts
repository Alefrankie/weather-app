import { http } from '$lib/hooks/useFetch'
import { writable, get } from 'svelte/store'
import { SocketStore } from './Socket'

const createStorePosts = () => {
	const { subscribe, set, update } = writable([])

	return {
		subscribe,
		getPosts: async (userId) => {
			const data = await http.Get({
				url: `/posts/users/${userId}`,
			})

			if (window.location.pathname === '/') return set(data)

			console.log(data)
			set(data.filter(({ user }) => user.id === userId))
		},
		getPost: async (id) => {
			// return await http.Get({
			// 	url: `/posts/${id}`
			// })

			console.log(id)
			return get(Posts).find((post) => post.id === id)
		},
		save: (session) => {
			Posts.getPosts(session)
			SocketStore.emit('posts:notification', session)
		},
		updateLike: (postUpdated) => {
			update((posts) =>
				posts.filter((post) => {
					if (post.id === postUpdated.id) {
						return (post.likes = postUpdated.likes)
					}
				}),
			)
		},
		updateComments: async (postUpdated) => {
			update((posts) =>
				posts.filter((post) => {
					if (post.id === postUpdated.id) {
						return (post.comments = postUpdated.comments)
					}
				}),
			)
		},
		deletePost: async (postDeletedId) => {
			update((posts) => posts.filter((post) => post.id !== postDeletedId))
		},
		wipe: () => {
			set([])
		},
	}
}

export const Posts = createStorePosts()
