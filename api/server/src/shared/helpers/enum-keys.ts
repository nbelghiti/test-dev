import { toString as _toString } from 'ramda';
import { logger } from './logger';

// tslint:disable-next-line no-any
const toString = (value: unknown) => typeof value === 'string' ? value : _toString(value);

export const enumKeys = (values: unknown): string[] => {
	try {
		return Object.keys(values).filter((key: number | string) => !(parseInt(toString(key), 10) >= 0));
	} catch (e) {
		logger.error('Could not read enum keys!');
		logger.error(e);

		return [];
	}
};
