export interface IProjectFilterOption {
	label: string;
	value: string;
}

export interface IProjectFilters {
	status: IProjectFilterOption;
	location: IProjectFilterOption;
}
