import { format } from 'date-fns';

export const DATE_TIME_FORMAT = 'dd MMM yyyy HH:mm';
export const DATE_FORMAT = 'dd/MM/yyyy';
export const TIME_FORMAT_HOUR_MINUTE = 'hh:mm aa';

export const formatDateTime = (timestampStr: string, dateTimeformat: string = DATE_TIME_FORMAT): string => {
	return !!timestampStr ? format(new Date(timestampStr), dateTimeformat) : '';
};
