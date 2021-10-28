export interface ISchemaOptions {
	schema?: string;
	tableName?: string;
}

export type ISchemaQuery = string | ISchemaOptions;

export interface IQueryOptions {
	force?: boolean;
}
