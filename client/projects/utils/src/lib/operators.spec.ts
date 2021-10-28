import { Subject } from 'rxjs';
import { skip, tap } from 'rxjs/operators';

import { distinctUntilChangedPath, isNotNil } from './operators';

describe('Utils - Operators', () => {
	describe('isNotNil', () => {
		it('should filter any null or undefined values that are emitted', (done) => {
			const source$ = new Subject<number>();
			const beforeIsNil = jest.fn();
			const afterIsNil = jest.fn();

			source$
				.pipe(
					tap(beforeIsNil),
					isNotNil(),
					tap(afterIsNil),
				)
				.subscribe((value) => {
					expect(value).toEqual(10);
					expect(beforeIsNil).toHaveBeenCalledTimes(3);
					expect(afterIsNil).toHaveBeenCalledTimes(1);

					done();
				});

			source$.next(null);
			source$.next(undefined);
			source$.next(10);
		});
	});

	describe('distinctUntilChangedPath', () => {
		it('should only emit if the specified path has changed', (done) => {
			const source$ = new Subject<{ value: number; dummy: string; }>();
			const beforeDistinctUntilChangedPath = jest.fn();
			const afterDistinctUntilChangedPath = jest.fn();

			source$
				.pipe(
					tap(beforeDistinctUntilChangedPath),
					distinctUntilChangedPath(['value']),
					tap(afterDistinctUntilChangedPath),
					skip(1), // skip initial value
				)
				.subscribe((value) => {
					expect(value).toEqual({
						value: 10,
						dummy: 'bar',
					});
					expect(beforeDistinctUntilChangedPath).toHaveBeenCalledTimes(3);
					expect(afterDistinctUntilChangedPath).toHaveBeenCalledTimes(2);

					done();
				});

			source$.next({
				value: 5,
				dummy: 'foo',
			});

			source$.next({
				value: 5,
				dummy: 'bar',
			});

			source$.next({
				value: 10,
				dummy: 'bar',
			});
		});
	});
});
