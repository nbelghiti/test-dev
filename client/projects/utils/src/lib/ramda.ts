import { compose, isNil, not, pickBy } from 'ramda';

const notNil = compose(
	not,
	isNil,
);

export const withoutNil = pickBy(notNil);
