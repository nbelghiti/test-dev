export interface IFilterMenuItem {
	value: string;
	label?: string;
	active?: boolean;
	link?: any;
	queryParams?: { [key: string]: string };
}
