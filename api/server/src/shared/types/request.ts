// Requests
import {
	Request,
	Response,
	NextFunction,
} from 'express';

export interface IRequest extends Request {
	data?: {
		/* tslint:disable no-any */
		body: any;
		headers: any;
		params: any;
		query: any;
		file: any;
		/* tslint:enable no-any */
		pagination?: IPaginationQuery;
	};
	user?: any; // tslint:disable-line no-any
}
export type IResponse = Response;
export type INext = NextFunction;

// Pagination
export interface IPagination<T = any> { // tslint:disable-line no-any
	items: T[];
	total: number;
	pages: number;
	page: number;
	size: number;
}

export interface IPaginationQuery {
	limit: number;
	offset: number;
}

export interface IQuery {
	page: number;
	size: number;
	[key: string]: any; // tslint:disable-line no-any
}
