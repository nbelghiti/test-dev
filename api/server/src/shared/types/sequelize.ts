import { Model } from 'sequelize-typescript';
import { BuildOptions } from 'sequelize';

export type ModelStatic<T = unknown> = typeof Model & {
	new(values?: object, options?: BuildOptions): Model<T>;
};
