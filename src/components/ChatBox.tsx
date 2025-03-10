import { ChatActionType, MESSAGE_DIRECTION } from '@store/enums';
import { useAppSelector } from '@store/selectors';
import { formatMessageDate, groupMessagesByDate } from '@utilities';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import InitialsAvatar from './InitialsAvatar';
import Message from './Message';
import SendMessage from './SendMessage';
import { Button } from './ui/button';

const ChatBox = ({ chatUserId, handleResetChat }: any) => {
	const dispatch = useDispatch();
	const chatBoxRef = useRef(null);

	const { chatList, contactsList } = useAppSelector(state => state.chat);

	const activeChatUser = contactsList?.find((item: any) => item.userId === chatUserId);
	const activeChatUserMessages = chatList?.find((item: any) => item.userId === chatUserId)?.messages;

	const handleSendMessage = (userId: string, message: string) => {
		dispatch({
			type: ChatActionType.SEND_MESSAGE,
			payload: {
				userId,
				messageData: {
					content: message,
					direction: MESSAGE_DIRECTION.OUTGOING,
					sentAt: new Date()
				}
			}
		});
	};

	const handleClearChat = (userId: string) => {
		dispatch({
			type: ChatActionType.CLEAR_CHAT,
			payload: { userId }
		});
	};
	const handleDeleteContact = (userId: string) => {
		dispatch({
			type: ChatActionType.DELETE_CONTACT,
			payload: { userId }
		});
		handleResetChat();
	};

	useEffect(() => {
		const messagesContainer = document.getElementById('messages-container');
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	}, []);

	return (
		<div className="relative h-full flex flex-col">
			<div className="w-full bg-gray-300 py-2 px-4 flex justify-between items-center">
				<div className="flex gap-4 items-center">
					<InitialsAvatar name={activeChatUser?.userName || ''} />
					<div className="flex gap-2">
						<span>{activeChatUser?.userName}</span>
					</div>
				</div>
				<div className="flex gap-4">
					<Button
						variant={'secondary'}
						onClick={() => {
							handleClearChat(chatUserId);
						}}
					>
						Clear Chat
					</Button>
					<Button
						onClick={() => {
							handleDeleteContact(chatUserId);
						}}
					>
						Delete Contact
					</Button>
				</div>
			</div>
			<>
				<div id="messages-container" className="grow overflow-scroll" ref={chatBoxRef}>
					{Object.entries(groupMessagesByDate(activeChatUserMessages || []) || {}).map(
						([date, messageArray]) => {
							return (
								<div key={date} className="flex flex-col gap-3 px-4 py-2">
									<Message
										messageItem={{
											content: formatMessageDate(date),
											direction: MESSAGE_DIRECTION.SYSTEM
										}}
									/>
									{messageArray?.map((message: any, index: number) => (
										<Message key={index} messageItem={message} />
									))}
								</div>
							);
						}
					)}
				</div>
				<SendMessage handleSendMessage={(message: string) => handleSendMessage(chatUserId, message)} />
			</>
		</div>
	);
};

export default ChatBox;
