import { sortBy, prop, omit } from 'ramda';

/* tslint:disable no-any */
export const sortByKeys = <T = any>(items: T[], key: string, lookup: string[]): T[] => {
	const itemKey = prop<any>(key);
	const orderKey = `ORDER_${Date.now()}`;

	const ordered = items.map((item: T) => ({
		...item,
		[orderKey]: lookup.findIndex((key: string) => key === itemKey(item as any)),
	}));

	const sorted = sortBy(prop(orderKey), ordered);

	return sorted.map(omit([orderKey])) as T[];
};
