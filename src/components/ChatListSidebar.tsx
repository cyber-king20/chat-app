import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useAppSelector } from '@store/selectors';
import { MessageSquarePlus } from 'lucide-react';
import React, { useState } from 'react';

import { filterUsers } from '@utilities';
import ChatListItem from './ChatListItem';
import { TooltipModified } from './ui/TooltipModified';
import { Input } from './ui/input';

const ChatListSidebar = ({ onNewChatClick, onChatItemClick, activeChatUserId }: any) => {
	const [searchQuery, setSearchQuery] = useState('');

	const { chatList } = useAppSelector(state => state.chat);
	const filteredUsers = filterUsers(chatList, searchQuery);

	return (
		<div className="w-full bg-white">
			<div className="p-4 flex justify-between items-center">
				<h1 className="text-xl font-semibold">Chats</h1>
				<TooltipModified tooltipText="New Chat">
					<MessageSquarePlus className="cursor-pointer" onClick={onNewChatClick} />
				</TooltipModified>
			</div>
			<div className="px-4">
				<div className="relative">
					<Input
						placeholder="Search Chat..."
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						className="h-8 w-full pr-6 pl-8"
					/>
					{!!searchQuery && (
						<Cross2Icon
							className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={() => {
								setSearchQuery('');
							}}
						/>
					)}

					<MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer" />
				</div>
			</div>
			<div className="mt-4">
				{filteredUsers.length ? (
					filteredUsers
						.sort((a, b) => {
							const aTime = new Date(a.lastMessageTime).getTime();
							const bTime = new Date(b.lastMessageTime).getTime();
							return bTime - aTime;
						})
						.map(user => {
							return (
								<ChatListItem
									key={user.userId}
									isActive={user.userId === activeChatUserId}
									userData={user}
									onClick={onChatItemClick}
								/>
							);
						})
				) : (
					<h2 className="mt-8 text-center italic text-gray-400">No Chats </h2>
				)}
			</div>
		</div>
	);
};

export default ChatListSidebar;
