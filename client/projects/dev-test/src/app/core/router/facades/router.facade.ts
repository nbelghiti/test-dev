import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store, createAction, props, select } from '@ngrx/store';
import { ReduxRouter, ReduxRouterAction, ReduxRouterParams, ReduxRouterRoute } from '@studiohyperdrive/ng-redux-router';
import { compose, equals, isEmpty, not, pick } from 'ramda';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import {
	selectCurrentRouteParams,
	selectCurrentRouteQueryParams,
	selectCurrentRouteURL,
	selectPreviousRouteURL
} from '../store/router.selector';
import { IRouterState } from '../store/router.types';

@Injectable()
export class RouterFacade implements OnDestroy {
	constructor(
		private store: Store<IRouterState>,
		private reduxRouter: ReduxRouter,
		private router: Router,
		private route: ActivatedRoute
	) {}

	public init(): void {
		this.reduxRouter.initialize((action: ReduxRouterAction) => {
			const routeAction = createAction(action.type, props<{ route: ReduxRouterRoute }>());

			this.store.dispatch(routeAction({route: action.route}));
		});
	}

	public navigate(path: string[], queryParams?: Params): void {
		this.router.navigate(path, {
			relativeTo: this.route,
			queryParams,
		});
	}

	public setQueryParams(queryParams: Params): void {
		this.router.navigate([], {
			relativeTo: this.route,
			queryParams,
			replaceUrl: true
		});
	}

	public ngOnDestroy(): void {
		this.reduxRouter.destroy();
	}

	public getRouteParams<T = Record<string, unknown>>(): Observable<T> {
		return this.store.pipe(
			select(selectCurrentRouteParams)
		) as Observable<T>;
	}

	public getRouteURL(): Observable<string> {
		return this.store.pipe(
			select(selectCurrentRouteURL)
		);
	}

	public getPreviousRouteUrl(): Observable<string> {
		return this.store.pipe(
			select(selectPreviousRouteURL)
		);
	}

	public onParamsChanged<T = Record<string, unknown>>(
		params: string[],
		{
			allowEmpty = false,
		}: {
			allowEmpty?: boolean;
		} = {}
	): Observable<T> {
		return this.getRouteParams()
			.pipe(
				map<ReduxRouterParams, T>(pick(params)),
				filter(compose(not, isEmpty)),
				distinctUntilChanged(equals),
				filter((results: T) => {
					if (allowEmpty) {
						return true;
					}

					const values = params.reduce((a, c) => a.concat(results[c]), []);

					return values.every((value: string) => !!value);
				}),
			);
	}

	public getRouteQueryParams<T = Record<string, unknown>>(): Observable<T> {
		return this.store.pipe(
			select(selectCurrentRouteQueryParams)
		) as Observable<T>;
	}

	public onQueryParamsChanged<T = Record<string, unknown>>(
		params: string[],
		{
			allowEmpty = false,
		}: {
			allowEmpty?: boolean;
		} = {}
	): Observable<T> {
		return this.getRouteQueryParams()
			.pipe(
				map<ReduxRouterParams, T>(pick(params)),
				filter(compose(not, isEmpty)),
				distinctUntilChanged(equals),
				filter((results: T) => {
					if (allowEmpty) {
						return true;
					}

					const values = params.reduce((a, c) => a.concat(results[c]), []);

					return values.every((value: string) => !!value);
				}),
			);
	}
}
