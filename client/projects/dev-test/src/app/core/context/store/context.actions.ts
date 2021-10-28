import { createAction, props } from '@ngrx/store';

import { ContextActions, IHeaderInfo } from './context.types';

export const setHeaderInfo = createAction(
	ContextActions.setHeaderInfo,
	props<{ info: IHeaderInfo }>()
);

export const resetHeaderInfo = createAction(
	ContextActions.resetHeaderInfo
);
