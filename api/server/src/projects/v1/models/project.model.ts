import {
	AllowNull,
	Column,
	DataType,
	HasOne,
	Model,
	Table,
	DefaultScope,
	Scopes,
} from 'sequelize-typescript';

import Team from '@teams/v1/models/team.model';
import { enumKeys } from '@shared/helpers/enum-keys';

import { ProjectStatus } from '../projects.types';

import Location from './location.model';
import ProjectGeneral from './project-general.model';
import Client from './client.model';

@DefaultScope(() => ({
	where: {
		deleted: false,
	},
}))
@Scopes(() => ({
	all: {
		where: {},
	},
}))
@Table
export default class Project extends Model<Project> {
	@Column({ defaultValue: DataType.UUIDV4, primaryKey: true, type: DataType.UUID })
	id: string;

	@AllowNull(false)
	@Column
	name: string;

	@AllowNull(false)
	@Column({
		unique: true,
	})
	PROJECT_ID: string;

	@HasOne(() => ProjectGeneral, {
		onDelete: 'CASCADE',
	})
	general: ProjectGeneral;

	@HasOne(() => Client, {
		onDelete: 'CASCADE',
	})
	client: Client;

	@HasOne(() => Location, {
		onDelete: 'CASCADE',
	})
	location: Location;

	@AllowNull(false)
	@Column({ type: DataType.ENUM(...enumKeys(ProjectStatus)) })
	status: string;

	@HasOne(() => Team, {
		onDelete: 'CASCADE',
	})
	team: Team;

	@Column({
		defaultValue: false,
		type: DataType.BOOLEAN,
	})
	deleted: boolean;
}
