/* istanbul ignore file */

export const leadingZero = (value: number): string => {
	if (value > 9) {
		return value.toString();
	}

	return `0${value}`;
};
