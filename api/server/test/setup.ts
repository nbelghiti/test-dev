import './index';
import { Database } from '@core/helpers/db';
import config from '@config';
import Migrations from '@shared/models/migrations.model';
import { logger } from '@shared/helpers/logger';

// tslint:disable-next-line:no-any
const validate = (resolve: any, reject: any): void => {
	Migrations
		.findOne({
			where: {
				name: `${config.db.migrations}.ts`,
			},
		})
		.then((migration) => {
			if (migration === null) {
				setTimeout(() => validate(resolve, reject), 200);
			}

			resolve();
		});
};

Database.sequelize
	.authenticate()
	.then(() => Database.sequelize.dropSchema(config.db.schema, {}))
	.then(() => Database.sequelize.createSchema(config.db.schema, {}))
	.then(() => Database.sequelize.sync())
	.then(() => Database.init())
	.then(() => new Promise((resolve, reject) => validate(resolve, reject)))
	.then(() => process.exit(0))
	.catch((err: Error) => {
		logger.error(err);

		process.exit(1);
	});
