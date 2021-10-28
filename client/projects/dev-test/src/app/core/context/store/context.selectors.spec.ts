import { aHeaderInfoMock } from './context.mock';
import { CONTEXT_SELECTOR, HEADER_SELECTOR } from './context.selectors';
import { IContextState } from './context.types';

describe('core: context: selectors', () => {
	const store = {
		context: {
			header: aHeaderInfoMock,
		} as IContextState,
	};

	describe('context feature selector', () => {
		it('should select the context state from the store', () => {
			const state = CONTEXT_SELECTOR(store);

			expect(state).toBe(store.context);
		});
	});

	describe('header info selector', () => {
		it('should select the header-info state from the store', () => {
			const state = HEADER_SELECTOR(store);

			expect(state).toBe(store.context.header);
		});
	});
});
