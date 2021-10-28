import { leadingZero } from './number';

export const timestamp = (date: Date = new Date()): string => {
	// tslint:disable-next-line max-line-length
	return `${date.getFullYear()}-${leadingZero(date.getMonth() + 1)}-${leadingZero(date.getDate())} ${leadingZero(date.getHours())}:${leadingZero(date.getMinutes())}`;
};
