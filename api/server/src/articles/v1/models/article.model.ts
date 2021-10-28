import {
	AllowNull,
	Column,
	DataType,
	Model,
	Table,
	Scopes,
} from 'sequelize-typescript';

@Scopes(() => ({
	all: {
		where: {},
	},
}))
@Table
export default class Article extends Model<Article> {
	@Column({ primaryKey: true})
	id: string;

	@AllowNull(false)
	@Column
	title: string;

	@AllowNull(false)
	@Column({type: DataType.STRING(4096)})
	summary: string;

	@AllowNull(false)
	@Column
	banner: string;

	@AllowNull(false)
	@Column({type: DataType.STRING(4096)})
	intro: string;

	@AllowNull(false)
	@Column({type: DataType.STRING(4096)})
	body: string;

	@AllowNull(false)
	@Column
	created: string;

	@Column
	internal: boolean;
}
