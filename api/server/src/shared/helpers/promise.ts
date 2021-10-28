/* istanbul ignore file */

type PromiseWrapper<T = any> = (..._: any[]) => Promise<T>; // tslint:disable-line no-any
type PromisePayload<T = any> = Array<Promise<T> | PromiseWrapper>; // tslint:disable-line no-any

// tslint:disable-next-line no-any
const executePromise = <T = any>(promise: Promise<T> | PromiseWrapper<T>, results: T[], delay: number = 0): Promise<T> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const p = typeof promise === 'function' ? promise(results) : promise;

			p.then(resolve, reject);
		}, delay);
	});
};

export const promiseSync = async <T = any>(promises: PromisePayload<T>, delay: number = 0): Promise<T[]> => { // tslint:disable-line no-any
	const results: T[] = [];

	for (const promise of promises) {
		await executePromise<T>(promise, results, delay).then((result: T) => {
			results.push(result);
		});
	}

	return results;
};
