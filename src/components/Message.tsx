import { MESSAGE_DIRECTION } from '@store/enums';
import { formatDateTime, TIME_FORMAT_HOUR_MINUTE } from '@utilities';
import React from 'react';

const Message = ({ messageItem }: any) => {
	const { direction, content } = messageItem;
	switch (direction) {
		case MESSAGE_DIRECTION.SYSTEM:
			return (
				<div className="flex justify-center">
					<span className="text-xs bg-[#D7EFFF] px-2 py-1 rounded-lg">{content}</span>
				</div>
			);
		case MESSAGE_DIRECTION.OUTGOING:
			return (
				<div className="flex justify-end">
					<div className="bg-[#DDFFDA] rounded-lg py-1 text-sm min-w-20 max-w-[50%]">
						<p className="px-4 whitespace-pre-wrap">{content}</p>
						<div className="flex justify-end items-center mt-1 pr-4">
							<span className="text-[10px]  leading-3 text-gray-400">
								{formatDateTime(messageItem.sentAt, TIME_FORMAT_HOUR_MINUTE)}
							</span>
						</div>
					</div>
				</div>
			);
		case MESSAGE_DIRECTION.INCOMING:
			return (
				<div className="flex justify-start max-w-96">
					<div className="bg-white rounded-lg py-1 text-sm min-w-20 max-w-1/2">
						<p className="px-4 whitespace-pre-wrap">{content}</p>
						<div className="flex justify-end mt-1 pr-4">
							<span className="text-[10px]  leading-3 text-gray-400">
								{formatDateTime(messageItem.receivedAt, TIME_FORMAT_HOUR_MINUTE)}
							</span>
						</div>
					</div>
				</div>
			);
		default:
			return <></>;
	}
};

export default Message;
