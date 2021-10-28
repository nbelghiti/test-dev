export interface IAppEnvironment {
	AUTH0_AUDIENCE: string;
	AUTH0_CALLBACK: string;
	AUTH0_CLIENT_ID: string;
	AUTH0_DOMAIN: string;
	AUTH0_LOGOUT_REDIRECT_URI?: string;
	HOST: string;
	production: boolean;
}
