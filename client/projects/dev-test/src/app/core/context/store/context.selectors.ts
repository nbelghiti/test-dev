import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IContextState, IHeaderInfo } from './context.types';

export const CONTEXT_SELECTOR = createFeatureSelector<IContextState>('context');
export const HEADER_SELECTOR = createSelector(
	CONTEXT_SELECTOR,
	(state: IContextState): IHeaderInfo => state.header
);
