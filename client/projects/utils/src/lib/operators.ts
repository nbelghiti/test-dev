import { compose, equals, isNil, not, pathOr } from 'ramda';
import { OperatorFunction } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

// TODO: fix types
export const isNotNil = <T = any>(): OperatorFunction<T, T> => filter(compose(not, isNil))  as any;

export const distinctUntilChangedPath = <T = any>(path: string[]): OperatorFunction<T, T> => distinctUntilChanged((a: T, b: T): boolean => {
	const valA = pathOr(null, path, a);
	const valB = pathOr(null, path, b);

	return equals(valA, valB);
});
