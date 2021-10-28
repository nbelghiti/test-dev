import config from '@config';
import { Sequelize } from 'sequelize-typescript';

import { Migrate } from '@migrations/utils/migrate';
import Config from '@shared/models/config.model';

export class Database {
	public static sequelize: Sequelize = new Sequelize({
		database: config.db.database,
		username: config.db.username,
		password: config.db.password,
		host: config.db.host,
		port: config.db.port,
		dialect: 'postgres',

		models: [`${process.cwd()}/src/**/*.model.{ts,js}`],

		pool: {
			max: 5,
			min: 0,
			idle: 10000,
		},

		define: {
			freezeTableName: true,
			schema: config.db.schema,
		},

		logging: false,
	});

	public static get query() {
		return Database.sequelize.query.bind(Database.sequelize);
	}

	public static get sync() {
		return Database.sequelize.sync.bind(Database.sequelize);
	}

	public static init(): Promise<Sequelize> {
		return Database.connect()
			.then(Database.createSchema)
			.then(() => Database.sequelize.sync({ logging: !!config.db.logging }));
	}

	public static connect(): Promise<void> {
		return new Promise((resolve) => {
			Database.sequelize
				.authenticate()
				.then(resolve as any); // tslint:disable-line no-any
		});
	}

	public static disconnect(): Promise<void> {
		return Database.sequelize.close();
	}

	public static createSchema(): Promise<void> {
		return Database.query(`CREATE SCHEMA IF NOT EXISTS ${config.db.schema}`) as unknown as Promise<void>;
	}

	public static async migrations(): Promise<void> {
		await Database.connect();
		await Database.createSchema();

		await Migrate.sync([
			Config,
		]);

		return Migrate.run(Database.sequelize, config.db.migrations);
	}
}
