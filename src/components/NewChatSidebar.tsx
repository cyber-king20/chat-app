import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useAppSelector } from '@store/selectors';
import { filterUsers } from '@utilities';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import ChatListItem from './ChatListItem';
import { Input } from './ui/input';

const NewChatSidebar = ({ onClose, onUserClick }: any) => {
	const [searchQuery, setSearchQuery] = useState('');

	const { contactsList } = useAppSelector(state => state.chat);
	const filteredUsers = filterUsers(contactsList, searchQuery);

	return (
		<div className="w-full">
			<div className="p-4 flex justify-between items-center">
				<h1 className="text-xl font-semibold">New Chat</h1>
				<X className="cursor-pointer" onClick={onClose} />
			</div>
			<div className="px-4">
				<div className="relative">
					<Input
						placeholder="Search Contact..."
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						className="h-8 w-full pr-6"
					/>
					{searchQuery?.length > 0 ? (
						<Cross2Icon
							className="absolute right-2 top-2 cursor-pointer"
							onClick={() => {
								setSearchQuery('');
							}}
						/>
					) : (
						<MagnifyingGlassIcon className="absolute right-2 top-2 cursor-pointer" />
					)}
				</div>
			</div>
			<div className="mt-4 flex flex-col">
				{filteredUsers.length &&
					filteredUsers.map(user => {
						return (
							<ChatListItem
								key={user.userId}
								userData={{ ...user }}
								onClick={() => onUserClick(user.userId)}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default NewChatSidebar;
