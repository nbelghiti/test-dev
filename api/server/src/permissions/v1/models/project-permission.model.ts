import { DefaultScope, Scopes, Table, Model, Column, DataType, AllowNull } from 'sequelize-typescript';

@DefaultScope(() => ({
	attributes: { exclude: ['createdAt', 'updatedAt'] },
}))
@Scopes(() => ({
	withTimestamps: {
		attributes: [],
	},
}))
@Table
export default class ProjectPermission extends Model<ProjectPermission> {
	@Column({ defaultValue: DataType.UUIDV4, primaryKey: true, type: DataType.UUID })
	id: string;

	@AllowNull(false)
	@Column({ type: DataType.STRING })
	userId: string;

	@AllowNull(false)
	@Column({ type: DataType.UUID })
	projectId: string;

	@AllowNull(false)
	@Column({
		type: DataType.JSONB,
	})
	permissionMap: object;
}
