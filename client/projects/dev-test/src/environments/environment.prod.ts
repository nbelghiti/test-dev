import { env } from './environment-defaults';
import { IAppEnvironment } from './environment.types';

export const environment: IAppEnvironment = {
	production: true,
	AUTH0_AUDIENCE: env.AUTH0_AUDIENCE,
	AUTH0_CLIENT_ID: env.AUTH0_CLIENT_ID,
	AUTH0_DOMAIN: env.AUTH0_DOMAIN,
	AUTH0_CALLBACK: env.AUTH0_CALLBACK,
	HOST: env.HOST,
};
