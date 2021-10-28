export interface ISearchQuery {
	query?: string;
	in?: string;
	project?: string;
	package?: string;
	group?: string;
	component?: string;
}

export enum SearchResultType {
	project = 'project',
	package = 'package',
	group = 'group',
	component = 'component',
	field = 'field',
}

export interface ISearchResultItem {
	id: string;
	type: SearchResultType;
	description: string;
	project?: {
		id: string;
		name: string;
	};
	package?: {
		id: string;
		name: string;
	};
	componentGroup?: {
		id: string;
		name: string;
	};
	component?: {
		id: string;
		name: string;
	};
	field?: {
		id: string;
		name: string;
	};
	path: string;
	link: string[];
}
