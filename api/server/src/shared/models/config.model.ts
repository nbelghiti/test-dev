import { Table, Column, AllowNull, DataType, Model } from 'sequelize-typescript';

@Table
export default class Config extends Model<Config> {
	@AllowNull(false)
	@Column({ primaryKey: true, type: DataType.STRING })
	key: string;

	@AllowNull(false)
	@Column({ type: DataType.JSONB })
	data: object;

	@Column({ type: DataType.ENUM('migrations', 'elastic') })
	type: string;
}
