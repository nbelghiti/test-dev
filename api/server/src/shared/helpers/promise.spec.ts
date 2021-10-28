import { promiseSync } from './promise';
import { wait } from '@test/helpers/wait';

describe('[UNIT - SHARED] Promise', () => {
	describe('promiseSync', () => {
		it('Should handle all promises in sync and gather results', async (done) => {
			const first = Promise.resolve('one');
			const second = Promise.resolve('two');
			const third = Promise.resolve('three');

			const result = await promiseSync([first, second, third]);

			expect(result).toEqual(['one', 'two', 'three']);
			done();
		});

		it('Should handle promise wrappers in sync and gather results', async (done) => {
			// check results arguments in fns since Jest has issues with async loops and memoization ¯\_(ツ)_/¯

			const fns = {
				first: (results1: string[]) => {
					expect(results1).toEqual([]);

					return Promise.resolve('one');
				},
				second: (results2: string[]) => {
					expect(results2).toEqual(['one']);

					return Promise.resolve('two');
				},
				third: (results3: string[]) => {
					expect(results3).toEqual(['one', 'two']);

					return Promise.resolve('three');
				},
			};

			spyOn(fns, 'first').and.callThrough();
			spyOn(fns, 'second').and.callThrough();
			spyOn(fns, 'third').and.callThrough();

			const result = await promiseSync([fns.first, fns.second, fns.third]);

			expect(result).toEqual([
				'one',
				'two',
				'three',
			]);
			expect(fns.first).toHaveBeenCalledTimes(1);
			expect(fns.second).toHaveBeenCalledTimes(1);
			expect(fns.third).toHaveBeenCalledTimes(1);
			done();
		});

		it('should wait the provided delay between executions', async (done) => {
			const first = jest.fn().mockResolvedValue('one');
			const second = jest.fn().mockResolvedValue('two');
			const third = jest.fn().mockResolvedValue('three');

			promiseSync([first, second, third], 500);

			await wait(300);

			expect(first).not.toHaveBeenCalled();
			expect(second).not.toHaveBeenCalled();
			expect(third).not.toHaveBeenCalled();

			await wait(300);

			expect(first).toHaveBeenCalled();
			expect(second).not.toHaveBeenCalled();
			expect(third).not.toHaveBeenCalled();

			await wait(500);

			expect(first).toHaveBeenCalled();
			expect(second).toHaveBeenCalled();
			expect(third).not.toHaveBeenCalled();

			await wait(500);

			expect(first).toHaveBeenCalled();
			expect(second).toHaveBeenCalled();
			expect(third).toHaveBeenCalled();

			done();
		});
	});
});
