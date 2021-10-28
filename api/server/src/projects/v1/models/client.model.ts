import { Table, Column, AllowNull, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import Project from './project.model';

@Table
export default class Client extends Model<Client> {
	@Column({ defaultValue: DataType.UUIDV4, primaryKey: true, type: DataType.UUID })
	id: string;

	@ForeignKey(() => Project)
	@Column({ type: DataType.UUID })
	projectId: string;

	@BelongsTo(() => Project, {
		onDelete: 'CASCADE',
	})
	project: Project;

	@AllowNull(false)
	@Column
	name: String;
}
