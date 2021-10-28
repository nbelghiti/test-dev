import { NodejsOptions } from '@studiohyperdrive/logger';

export type IEnvs = 'local' | 'test' | 'development' | 'staging' | 'production';
export type ILoggerConfig = NodejsOptions;
export type ILoggerPresets = 'default' | 'verbose' | 'silent';

export interface IStateConfig {
	env: IEnvs;
	docs: boolean;
	production: boolean;
	test: boolean;
}

export interface IServerConfig {
	host: string;
	port: number;
	timezone: string;
	migrations: string;
}

export interface IDatabaseConfig {
	database: string;
	host: string;
	logging: boolean;
	migrations: string;
	password: string;
	port: number;
	schema: string;
	username: string;
}

export interface IAuthConfig {
	jwksUri: string;
	audience: string;
	issuer: string;
}

export interface IAuth0Config {
	domain: string;
	clientId: string;
	clientSecret: string;
}

export interface IConfig {
	state: IStateConfig;
	server: IServerConfig;
	logger: ILoggerConfig;
	db: IDatabaseConfig;
	auth: IAuthConfig;
	auth0: IAuth0Config;
}
