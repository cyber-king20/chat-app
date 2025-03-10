import { MessageItem } from '@store/branches/chat/interfaces';
import { MESSAGE_DIRECTION } from '@store/enums';
import { format, isToday, isYesterday, parse } from 'date-fns';
import { DATE_FORMAT, formatDateTime } from './date';

export const formatMessageDate = (inputDate: string) => {
	// Parse the input date from MM/dd/yyyy format
	const date = parse(inputDate, DATE_FORMAT, new Date());

	if (!inputDate) {
		return '';
	}

	// Check if the date is today or yesterday
	if (isToday(date)) {
		return 'Today';
	} else if (isYesterday(date)) {
		return 'Yesterday';
	} else {
		// Return the formatted date as MM/dd/yyyy
		return format(date, DATE_FORMAT);
	}
};

export const groupMessagesByDate = (messages: MessageItem[]) => {
	return messages.reduce((acc: any, message: any) => {
		// Use date-fns to format the date as MM/dd/yyyy
		const date = formatDateTime(
			message.direction === MESSAGE_DIRECTION.INCOMING ? message.receivedAt : message.sentAt,
			DATE_FORMAT
		);

		// If the date is already in the accumulator, push the message to that date's group
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(message);

		return acc;
	}, {});
};

export const filterUsers = <T extends { userName: string }>(users: T[], searchText: string): T[] => {
	if (!searchText) return users;

	return users.filter(user => user.userName.toLowerCase().includes(searchText.toLowerCase()));
};
