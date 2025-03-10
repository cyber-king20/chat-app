import { MESSAGE_DIRECTION, ChatActionType } from './enums';

export interface ChatState {
	error: boolean;
	loading: boolean;
	chatList: ChatItem[];
	contactsList: User[];
}

export interface ChatAction {
	type: ChatActionType;
	payload?: Partial<ChatState> | any;
}

export interface ChatItem {
	userId: string;
	userName: string;
	lastMessageTime: Date;
	lastMessageContent: string;
	messages: MessageItem[];
}

export interface MessageItem {
	content: string;
	direction: MESSAGE_DIRECTION;
	sentAt?: Date;
	receivedAt?: Date;
}
export interface User {
	userId: string;
	userName: string;
}
