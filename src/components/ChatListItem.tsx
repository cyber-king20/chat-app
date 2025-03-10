import { ChatItem, User } from '@store/branches/chat/interfaces';
import { formatDateTime } from '@utilities';
import React from 'react';
import InitialsAvatar from './InitialsAvatar';
import { cn } from '@src/lib/utils';

const ChatListItem = ({
	isActive,
	userData,
	onClick
}: {
	isActive?: boolean;
	userData: User | ChatItem;
	onClick: (userId: string) => void;
}) => {
	return (
		<div
			className={cn(
				'flex items-center px-4 py-2 gap-4 hover:bg-gray-200 cursor-pointer',
				isActive ? 'bg-gray-200' : ''
			)}
			onClick={() => onClick(userData.userId)}
		>
			<InitialsAvatar name={userData.userName} />
			<div className="flex flex-col grow">
				<div className="flex justify-between">
					<span>{userData.userName}</span>
					{!!userData?.lastMessageTime && (
						<span className="text-xs text-gray-500">
							{formatDateTime(userData?.lastMessageTime, 'hh:mm aa')}
						</span>
					)}
				</div>
				<div className="flex justify-between gap-4">
					{!!userData?.lastMessageContent && (
						<span className="text-xs text-gray-500 line-clamp-1">{userData?.lastMessageContent}</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChatListItem;
