import { IBreadcrumbItem } from 'adb-ui';

export interface IHeaderInfo {
	title: string;
	subtitle?: string;
	backLink?: string;
	home?: boolean;
	breadcrumb?: IBreadcrumbItem[];
	editLink?: string[];
}

export interface IContext {
	header: IHeaderInfo;
}

export type IContextState = IContext;

export enum ContextActions {
	setHeaderInfo = '[Context]: set header info',
	resetHeaderInfo = '[Context]: reset header info',
}
