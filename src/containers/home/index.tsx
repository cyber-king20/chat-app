import ChatBox from '@components/ChatBox';
import ChatListSidebar from '@components/ChatListSidebar';
import NewChatSidebar from '@components/NewChatSidebar';
import { cn } from '@src/lib/utils';
import * as React from 'react';
import { useState } from 'react';

export const Home: React.FunctionComponent = () => {
	const [newChatPanelActive, setNewChatPanelActive] = useState(false);
	const [activeChatUserId, setActiveChatUserId] = useState<string | null>(null);

	return (
		<div className="bg-gray-400 h-full w-full">
			<div className="h-full grid grid-cols-[1fr_3fr]">
				<div className="h-full w-full flex min-w-[22rem] relative border-r-2">
					<div
						className={cn(
							'absolute w-full z-10 left-0 bg-white transition-all h-full duration-500',
							newChatPanelActive ? 'left-0 ' : '-left-full'
						)}
					>
						<NewChatSidebar
							onClose={() => setNewChatPanelActive(false)}
							onUserClick={(userId: string) => {
								setActiveChatUserId(userId);
								setNewChatPanelActive(false);
							}}
						/>
					</div>
					<ChatListSidebar
						activeChatUserId={activeChatUserId}
						onNewChatClick={() => setNewChatPanelActive(true)}
						onChatItemClick={userId => {
							setActiveChatUserId(userId);
						}}
					/>
				</div>
				<div className="h-screen bg-[url('/whatsapp-bg.svg')]  bg-[length:500px] bg-[#ECE5DD]">
					{activeChatUserId ? (
						<ChatBox chatUserId={activeChatUserId} handleResetChat={() => setActiveChatUserId(null)} />
					) : (
						<div className="h-full flex justify-center items-center">
							<div className="text-black opacity-100">Select any chat</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
