import { Table, Column, ForeignKey, Model, BelongsTo, DataType } from 'sequelize-typescript';

import Project from './project.model';

@Table
export default class Location extends Model<Location> {
	@Column({ defaultValue: DataType.UUIDV4, primaryKey: true, type: DataType.UUID })
	id: string;

	@ForeignKey(() => Project)
	@Column({ type: DataType.UUID })
	projectId: string;

	@BelongsTo(() => Project, {
		onDelete: 'CASCADE',
	})
	project: Project;

	@Column
	name: string;
}
