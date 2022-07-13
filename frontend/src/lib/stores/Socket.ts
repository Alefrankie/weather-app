import { io, Socket } from 'socket.io-client'
import { readable, get } from 'svelte/store'

const SSocket = readable(null, (set) => {
	const socket = io('http://localhost:3001')

	console.log('Socket up')

	set(socket)
})

export const SocketStore: Socket = get(SSocket)

// Comments
// SocketStore.on('comments:added', (commentCreated) => {
// 	Posts.addComment(commentCreated)
// })

// SocketStore.on('comments:removed', (commentId) => {
// 	Posts.updateComments(commentId)
// })
