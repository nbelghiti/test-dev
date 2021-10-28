import { EntityState } from '@ngrx/entity';

export interface IError {
	details?: Array<{
		err: string;
	}>;
	host: string;
	identifier: string;
	message: string;
	name: string;
	stack?: string;
	status: number;
	timestamp: string;
	error?: IError;
}

export interface ISuccess {
	success: boolean[];
	version: string[];
}

export interface IEntityState<T> extends EntityState<T> {
	isLoading: boolean;
	error: IError;
	meta: IPaginationMeta;
}

export interface IItemMeta {
	updatedAt: string;
	createdAt: string;
}

export interface IPaginationMeta {
	total: number;
	pages: number;
	page: number;
	size: number;
}

export interface IPagination<T = any> extends IPaginationMeta { // tslint:disable-line no-any
	items: T[];
}
