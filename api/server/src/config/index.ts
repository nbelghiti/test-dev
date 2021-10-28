import { default as loggerPresets } from './presets/logger';
import { EnvHelper } from './helpers/env';
import { IConfig, ILoggerPresets, IEnvs } from './config.types';

const config: IConfig = {
	state: {
		env: process.env.NODE_ENV as IEnvs,
		docs: EnvHelper.envToBoolean(process.env.STATE_DOCS),
		production: EnvHelper.envToBoolean(process.env.STATE_PRODUCTION),
		test: EnvHelper.envToBoolean(process.env.STATE_TEST),
	},
	server: {
		host: process.env.HOST,
		port: EnvHelper.envToNumber(process.env.PORT),
		timezone: process.env.TZ,
		migrations: process.env.migrations,
	},
	db: {
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		logging: EnvHelper.envToBoolean(process.env.DB_LOGGING),
		migrations: process.env.DB_MIGRATION,
		password: process.env.DB_PASSWORD,
		port: EnvHelper.envToNumber(process.env.DB_PORT),
		schema: process.env.DB_SCHEMA,
		username: process.env.DB_USER,
	},
	auth: {
		jwksUri: process.env.AUTH_JWKS_URI,
		audience: process.env.AUTH_JWT_AUDIENCE,
		issuer: process.env.AUTH_JWT_ISSUER,
	},
	auth0: {
		domain: process.env.AUTH0_DOMAIN,
		clientId: process.env.AUTH0_CLIENT_ID,
		clientSecret: process.env.AUTH0_CLIENT_SECRET,
	},
	logger: loggerPresets[process.env['LOGGING_PRESET'] as ILoggerPresets],
};

export default config;
