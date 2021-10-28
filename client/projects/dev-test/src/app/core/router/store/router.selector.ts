import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReduxRouterState } from '@studiohyperdrive/ng-redux-router';
import { pathOr } from 'ramda';

import { IRouterState } from './router.types';

export const ROUTER_SELECTOR = createFeatureSelector<
	IRouterState,
	any
>('router');

export const selectCurrentRouteParams = createSelector(
	ROUTER_SELECTOR,
	(state: ReduxRouterState) => pathOr({}, ['current', 'params'], state)
);

export const selectCurrentRouteQueryParams = createSelector(
	ROUTER_SELECTOR,
	(state: ReduxRouterState) => pathOr({}, ['current', 'query'], state)
);

export const selectCurrentRouteURL = createSelector(
	ROUTER_SELECTOR,
	(state: ReduxRouterState) => pathOr(null, ['current', 'url'], state)
);

export const selectPreviousRouteURL = createSelector(
	ROUTER_SELECTOR,
	(state: ReduxRouterState) => pathOr(null, ['previous', 'url'], state)
);
