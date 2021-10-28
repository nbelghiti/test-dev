import { CustomValidationError } from '../helpers/error';

export type ICustomValidationError = CustomValidationError;

export interface ICustomErrorDetail {
	err: string;
}

export interface ICustomError extends Error {
	details?: ICustomErrorDetail[];
	host: string;
	identifier: string;
	message: string;
	name: string;
	stack?: string;
	status: number;
	timestamp: string;
}
export type IBodyError = ICustomError;
export type IHeadersError = ICustomError;
export type IParamsError = ICustomError;
export type IQueryError = ICustomError;
export type IMigrationsRunningError = ICustomError;
export type IUnauthorizedError = ICustomError;
export type IForbiddenError = ICustomError;
export type INotFoundError = ICustomError;
export type IConflictError = ICustomError;
export type IInternalServerError = ICustomError;
export type IErrors =
	ICustomError |
	IBodyError |
	IHeadersError |
	IParamsError |
	IQueryError |
	IUnauthorizedError |
	IForbiddenError |
	INotFoundError |
	IConflictError |
	IInternalServerError;
