import { ChatActionType } from './enums';
import { CHAT_LIST, CONTACTS_LIST } from './initialValues';
import { ChatAction, ChatItem, ChatState } from './interfaces';

export const initialState: ChatState = {
	error: false,
	loading: true,
	contactsList: [...CONTACTS_LIST],
	chatList: [...CHAT_LIST]
};

export default (state = initialState, { type, payload }: ChatAction): ChatState => {
	switch (type) {
		case ChatActionType.CLEAR_CHAT:
			return {
				...state,
				chatList: state.chatList.filter(chat => chat.userId !== payload.userId)
			};
		case ChatActionType.DELETE_CONTACT:
			return {
				...state,
				contactsList: state.contactsList.filter(contact => contact.userId !== payload.userId),
				chatList: state.chatList.filter(chat => chat.userId !== payload.userId)
			};
		case ChatActionType.SEND_MESSAGE:
			const { userId, messageData } = payload;
			let updatedChatList;
			if (!!state.chatList.find(chat => chat.userId === userId)?.userId) {
				updatedChatList = state.chatList.map((chat: ChatItem) => {
					if (chat.userId === userId) {
						return {
							...chat,
							messages: [...chat.messages, messageData],
							lastMessageContent: messageData.content,
							lastMessageTime: new Date()
						};
					}
					return chat;
				});
			} else {
				const userData = state.contactsList.find(contact => contact.userId === userId)!;
				updatedChatList = [
					...state.chatList,
					{
						userId,
						userName: userData.userName,
						messages: [messageData],
						lastMessageContent: messageData.content,
						lastMessageTime: new Date()
					}
				];
			}

			debugger;
			return {
				...state,
				chatList: updatedChatList
			};
		default:
			return state;
	}
};
