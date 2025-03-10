import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export const SendMessageContainer = ({ children }: any) => {
	return <div className="min-h-16 bg-gray-200 ">{children}</div>;
};

const SendMessage = ({ handleSendMessage }: any) => {
	const [messageText, setMessageText] = useState('');

	return (
		<div className="min-h-16 bg-gray-200 ">
			<div className="h-full">
				<div className="px-4 py-2 flex justify-center gap-8 items-end">
					<div className="pb-4">
						<div className="bg-gray-300 rounded-full p-1">
							<PlusIcon size={16} className="cursor-pointer" />
						</div>
					</div>

					<Textarea
						className="bg-white resize-none min-h-none overflow-y-scroll"
						value={messageText}
						onChange={e => setMessageText(e.target.value)}
					/>

					<div className="pb-3">
						<Button
							className="flex gap-2"
							onClick={() => {
								handleSendMessage(messageText);
								setMessageText('');
							}}
						>
							<span>Send</span>
							<PaperPlaneIcon />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SendMessage;
