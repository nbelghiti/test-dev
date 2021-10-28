import { resetHeaderInfo, setHeaderInfo } from './context.actions';
import { CONTEXT_INITIAL_STATE } from './context.const';
import { aHeaderInfoMock } from './context.mock';
import { contextReducer } from './context.reducer';

describe('core: context: reducer', () => {
	describe('header', () => {
		describe('setHeaderInfo', () => {
			const state = contextReducer(CONTEXT_INITIAL_STATE, setHeaderInfo({ info: aHeaderInfoMock}));

			expect(state.header).toEqual(aHeaderInfoMock);
		});

		describe('resetHeaderInfo', () => {
			const prevState = contextReducer(CONTEXT_INITIAL_STATE, setHeaderInfo({ info: aHeaderInfoMock}));

			expect(prevState.header).toEqual(aHeaderInfoMock);

			const newState = contextReducer(CONTEXT_INITIAL_STATE, resetHeaderInfo());

			expect(newState.header).toEqual(CONTEXT_INITIAL_STATE.header);
		});
	});

	describe('unknown action', () => {
		it('should return the initial state for an unknown action', () => {
			const state = contextReducer(CONTEXT_INITIAL_STATE, { type: 'unkown action' });

			expect(state).toBe(CONTEXT_INITIAL_STATE);
		});
	});
});
