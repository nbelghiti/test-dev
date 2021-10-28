import { Action, createReducer, on } from '@ngrx/store';

import { resetHeaderInfo, setHeaderInfo } from './context.actions';
import { CONTEXT_INITIAL_STATE } from './context.const';
import { IContextState } from './context.types';

const reducer = createReducer(
	CONTEXT_INITIAL_STATE,
	on(setHeaderInfo, (state, { info }) => ({ ...state, header: info })),
	on(resetHeaderInfo, () => CONTEXT_INITIAL_STATE)
);

export function contextReducer (state: IContextState, action: Action) {
	return reducer(state, action);
}
