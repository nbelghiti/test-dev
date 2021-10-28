import { DefaultScope, Scopes, Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany, AllowNull } from 'sequelize-typescript';

import Project from '@projects/v1/models/project.model';

import Member from './member.model';

@DefaultScope(() => ({
	attributes: { exclude: ['createdAt', 'updatedAt'] },
}))
@Scopes(() => ({
	withTimestamps: {
		attributes: [],
	},
}))
@Table
export default class Team extends Model<Team> {
	@Column({ defaultValue: DataType.UUIDV4, primaryKey: true, type: DataType.UUID })
	id: string;

	@ForeignKey(() => Project)
	@Column({ type: DataType.UUID })
	projectId: string;

	@BelongsTo(() => Project, {
		onDelete: 'CASCADE',
	})
	project: Project;

	@HasMany(() => Member, {
		onDelete: 'CASCADE',
	})
	members: Member[];
}
