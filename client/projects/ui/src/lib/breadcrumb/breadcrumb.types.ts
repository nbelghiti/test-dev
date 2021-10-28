import { IFilterMenuItem } from '../filter/filter-menu/filter-menu.component.types';

export interface IBreadcrumbItem {
	value: string;
	label?: string;
	link?: string[];
	queryParams?: { [key: string]: string };
	items?: IFilterMenuItem[];
}
