export interface ITableDescription {
	[key: string]: {
		type: string;
		allowNull: boolean;
		defaultValue: unknown;
		comment: string;
		special: unknown;
		primaryKey: boolean;
	};
}
