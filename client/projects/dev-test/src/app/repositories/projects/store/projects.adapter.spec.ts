import { adapter, initialState } from './projects.adapter';

describe('repository: projects: adapter', () => {
	it('should create a new entity adapter', () => {
		[
			'addOne',
			'addMany',
			'addAll',
			'removeOne',
			'removeMany',
			'removeAll',
			'updateOne',
			'updateMany',
			'upsertOne',
			'upsertMany',
			'map',
		].forEach((key: string) => expect(adapter).toHaveProperty(key));
	});

	it('should create an initial state with isLoading and error props', () => {
		[
			'entities',
			'ids',
			'isLoading',
			'error',
		].forEach((key: string) => expect(initialState).toHaveProperty(key));
	});
});
