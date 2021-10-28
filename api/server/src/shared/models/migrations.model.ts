import { Table, Column, AllowNull, DataType, Model } from 'sequelize-typescript';

@Table({
	timestamps: false,
})
export default class Migrations extends Model<Migrations> {
	@AllowNull(false)
	@Column({ primaryKey: true, type: DataType.STRING })
	name: string;
}
