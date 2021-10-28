/* istanbul ignore file */

export const parseNumber = (value: string): number | string => {
	const numeric = Number(value);

	return isNaN(numeric) ? value : numeric;
};
