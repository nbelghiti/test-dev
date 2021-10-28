import {
	ROUTER_SELECTOR,
	selectCurrentRouteParams,
	selectCurrentRouteQueryParams,
	selectCurrentRouteURL,
	selectPreviousRouteURL,
} from './router.selector';
import { IRouterState } from './router.types';

describe('core: router: selectors', () => {
	const store: IRouterState = {
		router: {
			current: {
				url: '/the/current/route',
				params: {
					someId: 'test',
				},
				query: {
					something: 'else',
				}
			},
			previous: {
				url: '/the/previous/route',
			},
			pending: null,
		},
	};

	describe('router feature selector', () => {
		it('should select the router state from the store', () => {
			const state = ROUTER_SELECTOR(store);

			expect(state).toBe(store.router);
		});
	});

	describe('current route selectors', () => {
		it('should select the current route url', () => {
			const url = selectCurrentRouteURL(store);

			expect(url).toEqual(store.router.current.url);
		});

		it('should select the current route params', () => {
			const params = selectCurrentRouteParams(store);

			expect(params).toEqual(store.router.current.params);
		});

		it('should select the current route query-params', () => {
			const q = selectCurrentRouteQueryParams(store);

			expect(q).toEqual(store.router.current.query);
		});
	});

	describe('previous route selectors', () => {
		it('should select the current route url', () => {
			const url = selectPreviousRouteURL(store);

			expect(url).toEqual(store.router.previous.url);
		});
	});
});
