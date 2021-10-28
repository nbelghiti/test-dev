import { BehaviorSubject } from 'rxjs';

export const currentRoute = '/current/route';
export const previousRoute = '/previous/route';

export const mockRouterFacade = {
	onParamsChanged: () => new BehaviorSubject<{
		branchId: string;
		projectId: string;
		templateId: string;
	}>({
		branchId: 'branch-id',
		projectId: 'project-id',
		templateId: 'template-id',
	}),
	getPreviousRouteUrl: () => new BehaviorSubject<string>(previousRoute),
	getRouteURL: () => new BehaviorSubject(currentRoute),
	onQueryParamsChanged: () => new BehaviorSubject<{ components: any }>({
		components: ['comp-1', 'comp-2'],
	}),
	getRouteQueryParams: () => new BehaviorSubject({
		q: '',
	}),
	setQueryParams: jest.fn(
		(params: { [key: string]: any }) => console.log('query params have been set', params)
	),
	navigate: jest.fn(),
};
