import { MESSAGE_DIRECTION } from './enums';

export const CONTACTS_LIST = [
	{
		userId: 'user1',
		userName: 'Rohit Sharma'
	},
	{
		userId: 'user2',
		userName: 'Suresh Kumar'
	},
	{
		userId: 'user3',
		userName: 'Deepak Kumar'
	},
	{
		userId: 'user4',
		userName: 'Priya Kishore'
	},
	{
		userId: 'user5',
		userName: 'Ramesh Gupta'
	}
];

export const CHAT_LIST = [
	{
		userId: 'user1',
		userName: 'Rohit Sharma',
		lastMessageTime: new Date('2024-03-10T10:35:00Z'),
		lastMessageContent: 'Hi!',
		messages: [
			{
				content: 'Hey! How are you?',
				direction: MESSAGE_DIRECTION.INCOMING,
				receivedAt: new Date('2024-03-10T10:30:00Z')
			},
			{
				content: "I'm good, thanks!",
				direction: MESSAGE_DIRECTION.OUTGOING,
				sentAt: new Date('2024-03-10T10:35:00Z')
			}
		]
	},
	{
		userId: 'user5',
		userName: 'Ramesh Gupta',
		lastMessageTime: new Date('2024-03-10T10:35:00Z'),
		lastMessageContent: 'Hi!',
		messages: [
			{ content: 'Hello!', direction: MESSAGE_DIRECTION.INCOMING, receivedAt: new Date('2024-03-09T13:30:00Z') },
			{
				content: "Hey Bob! What's up?",
				direction: MESSAGE_DIRECTION.OUTGOING,
				sentAt: new Date('2024-03-09T16:30:00Z')
			}
		]
	}
];
