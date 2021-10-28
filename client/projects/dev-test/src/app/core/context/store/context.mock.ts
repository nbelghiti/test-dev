import { IHeaderInfo } from './context.types';

export const aHeaderInfoMock: IHeaderInfo = {
	title: 'test-title',
	subtitle: 'test-subtitle',
	backLink: '/test-back-route',
	breadcrumb: [{
		value: 'Previous Route',
		label: 'Previous Route',
		link: ['Link']
	}],
};
