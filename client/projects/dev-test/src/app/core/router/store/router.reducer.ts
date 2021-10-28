import { Action } from '@ngrx/store';
import { ReduxRouterState, routerReducer as ngReduxReducer } from '@studiohyperdrive/ng-redux-router';

export function routerReducer (state: ReduxRouterState, action: Action) {
	return ngReduxReducer(state, action);
}
