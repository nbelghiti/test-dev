import { IPagination } from '../shared.types';
import { PaginationHelper } from './pagination';

describe('[UNIT - SHARED] Pagination', () => {
	describe('Map', () => {
		it('Should map items to a paginated response', (done: jest.DoneCallback) => {
			const result: IPagination<any> = PaginationHelper.map([{}, {}, {}, {}, {}], 5, '/v1/items', { page: 1, size: 5 }); // tslint:disable-line no-any
			expect(result).toBeDefined();
			expect(result).toBeObject();
			expect(result).toContainAllKeys([
				'items',
				'total',
				'pages',
				'page',
				'size',
			]);
			expect(result.items).toBeArrayOfSize(5);
			expect(result.total).toEqual(5);
			expect(result.pages).toEqual(1);
			expect(result.page).toEqual(1);
			expect(result.size).toEqual(5);
			done();
		});

		it('Should contain a next link if there is a next page', (done: jest.DoneCallback) => {
			const result: IPagination<any> = PaginationHelper.map([{}, {}, {}, {}, {}], 25, '/v1/items', { page: 1, size: 5 }); // tslint:disable-line no-any
			expect(result).toBeDefined();
			expect(result).toBeObject();
			expect(result).toContainAllKeys([
				'items',
				'total',
				'pages',
				'page',
				'size',
			]);
			expect(result.items).toBeArrayOfSize(5);
			expect(result.total).toEqual(25);
			expect(result.pages).toEqual(5);
			expect(result.page).toEqual(1);
			expect(result.size).toEqual(5);
			done();
		});

		it('Should contain a previous link if there is a previous page', (done: jest.DoneCallback) => {
			const result: IPagination<any> = PaginationHelper.map([{}, {}, {}, {}, {}], 25, '/v1/items', { page: 5, size: 5 }); // tslint:disable-line no-any
			expect(result).toBeDefined();
			expect(result).toBeObject();
			expect(result).toContainAllKeys([
				'items',
				'total',
				'pages',
				'page',
				'size',
			]);
			expect(result.items).toBeArrayOfSize(5);
			expect(result.total).toEqual(25);
			expect(result.pages).toEqual(5);
			expect(result.page).toEqual(5);
			expect(result.size).toEqual(5);
			done();
		});
	});

	describe('ParseQuery', () => {
		it('Should parse the pagination params', () => {
			expect(PaginationHelper.parseQuery({ page: 10, size: 55 })).toEqual({
				limit: 55,
				offset: 495,
			});
		});
	});
});
