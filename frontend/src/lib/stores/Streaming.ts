import { derived, writable } from 'svelte/store'
import { SocketStore } from './Socket'

// interface IOneChat {
//   sessionId: string
//   subscriberId: string
// }
const createStoreChats = () => {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    getChats: (id: string) => {
      SocketStore.emit('fetch-chats', id, (lastMessages) => {
        set(lastMessages)
      })
    },
    markAllRead: (id: string) => {
      SocketStore.emit('mark-all-read', id)
      update((messages) => messages.filter((item) => (item.read = true)))
    },
    wipe: () => {
      set([])
    }
  }
}

export const Chats = createStoreChats()

export const notReads = derived(
  Chats,
  ($Chats) => $Chats.filter(({ read }) => read === false).length
)
