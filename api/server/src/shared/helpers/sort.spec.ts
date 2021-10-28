import { sortByKeys } from './sort';

describe('[UNIT - SHARED] Sort', () => {
	it('should sort an array of items by key based on provided order', () => {
		const arr = [{
			id: 'third',
			name: 'This is the third item',
		}, {
			id: 'first',
			name: 'This is the first item',
		}, {
			id: 'second',
			name: 'This is the second item',
		}];

		const sorted = sortByKeys(arr, 'id', ['first', 'second', 'third']);

		expect(sorted).toBeArrayOfSize(3);
		expect(sorted[0].id).toEqual('first');
		expect(sorted[1].id).toEqual('second');
		expect(sorted[2].id).toEqual('third');
	});
});
