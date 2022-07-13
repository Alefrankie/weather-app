import { writable } from 'svelte/store';
import { SocketStore } from './Socket';

interface IOneChat {
	sessionId: string;
	subscriberId: string;
}

interface ISendMessage {
	from: string;
	to: string;
	text: string;
}

interface INotification {
	from: string;
	to: string;
}
const createStoreMessages = () => {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		getMessages: ({ sessionId, subscriberId }: IOneChat) => {
			SocketStore.emit(
				'fetch-messages',
				{
					sessionId,
					subscriberId
				},
				(data) => {
					const dataFormatted = data.filter((e) => (e.deleted.includes(sessionId) ? false : true));
					set(dataFormatted);
				}
			);
		},
		sendMessage: (body: ISendMessage) => {
			SocketStore.emit('send-message', body, () => {
				Messages.getMessages({ sessionId: body.from, subscriberId: body.to });
			});
		},
		deleteMessage: (messageId: string, sessionId) => {
			// alert(messageId)
			SocketStore.emit('delete-message', { messageId, sessionId });
		},
		notify: (notification: INotification) => {
			SocketStore.emit('notify-new-message', notification);
		},
		wipe: () => {
			set([]);
		}
	};
};

export const Messages = createStoreMessages();
