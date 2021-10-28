import { AddressInfo } from 'net';
import { default as express, Application } from 'express';
import { Server } from 'http';

import config from '@config';
import { IConfig } from '@config/config.types';
import { presets as corePresets } from '@core/helpers/presets';
import { ErrorMiddleware } from '@core/middleware/error';
import { GlobalMiddleware } from '@core/middleware/global';
import { SwaggerMiddleware } from '@core/middleware/swagger';
import { logger } from '@shared/helpers/logger';
import { Validator } from '@shared/helpers/validation';

import { CoreModule } from '@core';
import { PermissionsModule } from '@permissions';
import { ProjectsModule } from '@projects';
import { ArticlesModule } from '@articles';
import { TeamsModule } from '@teams';

import { Database } from '@core/helpers/db';
import { promiseSync } from '@shared/helpers/promise';

export class App {
	public app: Application = express();
	public config: IConfig = CONFIG;
	public server: Server;

	constructor({ start = false, ...options }: {
		start?: boolean;
		initDb?: boolean;
		runMigrations?: boolean;
	} = {}) {
		process.env = Validator.validate(process.env, corePresets.env, 'Invalid environment variables');

		this.loadMiddleware();
		this.loadModules();
		this.loadErrorHandling();

		if (start) {
			this.start(options);
		}
	}

	public async start({
		initDb = false,
		runMigrations = false,
	}: {
		initDb?: boolean;
		runMigrations?: boolean;
	} = {}): Promise<void> {
		await promiseSync([
			...(runMigrations ? [Database.migrations] : []),
			...(initDb ? [Database.init] : []),
		]);

		this.server = this.app.listen(this.config.server.port, (err?: Error) => {
			if (err) {
				logger.error(err);
				return process.exit(1);
			}

			logger.info(`Server running on ${this.config.state.env} environment at port ${(this.server.address() as AddressInfo).port}`);
		});
	}

	public async stop(signal: NodeJS.Signals): Promise<void> {
		logger.info(`Server stopped due to ${signal} signal, graceful shutdown`);

		await Database.disconnect();

		if (this.server) {
			this.server.close((err?: Error) => {
				if (err) {
					logger.error(err);
					return process.exit(1);
				}

				process.exit();
			});
		} else {
			process.exit(1);
		}
	}

	private loadMiddleware(): void {
		GlobalMiddleware.load(this.app);

		if (this.config.state.docs) {
			SwaggerMiddleware.load(this.app);
		}
	}

	private loadModules(): void {
		CoreModule.load(this.app);
		//PermissionsModule.load(this.app);
		ProjectsModule.load(this.app);
		ArticlesModule.load(this.app);
		TeamsModule.load(this.app);
	}

	private loadErrorHandling(): void {
		CoreModule.loadFallback(this.app);
		this.app.use(ErrorMiddleware.handleError);
	}
}
export const CONFIG: IConfig = config;
