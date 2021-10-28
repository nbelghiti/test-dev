import { DefaultScope, Scopes, Table, Model, Column, DataType, ForeignKey, BelongsTo, AllowNull, Default } from 'sequelize-typescript';

import { MEMBER_ROLES } from '../teams.types';
import Team from './team.model';

@DefaultScope(() => ({
	attributes: { exclude: ['createdAt', 'updatedAt'] },
}))
@Scopes(() => ({
	withTimestamps: {
		attributes: [],
	},
}))
@Table
export default class Member extends Model<Member> {
	@Column({ defaultValue: DataType.UUIDV4, primaryKey: true, type: DataType.UUID })
	id: string;

	@AllowNull(false)
	@Column
	name: string;

	@AllowNull(false)
	@Column
	email: string;

	@AllowNull(false)
	@Column
	picture: string;

	@Column({ type: DataType.ENUM(...MEMBER_ROLES) })
	type: string;

	@ForeignKey(() => Team)
	@Column({ type: DataType.UUID })
	teamId: string;

	@BelongsTo(() => Team, {
		onDelete: 'CASCADE',
	})
	team: Team;

	@AllowNull(false)
	@Column
	auth0Id: string;

	@Default(false)
	@Column
	management: boolean;
}
