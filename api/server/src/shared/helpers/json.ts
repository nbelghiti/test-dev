/* istanbul ignore file */

import { toString } from 'ramda';

import { logger } from './logger';

export const parseJSON = <T = unknown>(value: unknown): T => {
	try {
		const jsonInput = typeof value === 'string' ? value : toString(value);

		return JSON.parse(jsonInput);
	} catch (e) {
		logger.error('Parsing JSON failed:');
		logger.error(e);

		return null;
	}
};

export const stringifyJSON = (value: unknown): string | number => {
	if (typeof value === 'number') {
		return value;
	}

	return JSON.stringify(value);
};
