import { Application } from 'express';
import { stub, SinonStub } from 'sinon';

import { CoreModule } from '@core';
import { CoreRoutes } from '@core/routes';
import { IRequest, IResponse, INext } from '@shared/shared.types';
import { GlobalMiddleware } from '@core/middleware/global';
import { AuthMiddleware } from '@core/middleware/auth';

export const authMock = jest.spyOn(AuthMiddleware, 'verifyJWT').mockImplementation(() => {
	const func = (req: IRequest, res: IResponse, next: INext) => {
		next();
	};

	func.unless = jest.fn().mockImplementation(() => (req: IRequest, res: IResponse, next: INext) => {
		next();
	});

	return func;
});

export const authMockRestore = () => authMock.mockRestore();

export class Auth {
	public static async authenticate(): Promise<Application> {
		stub(CoreModule, 'load').callsFake((app: Application) => {
			GlobalMiddleware.load(app);

			app.use((req: IRequest, res: IResponse, next: INext) => {
				req.user = {
					sub: 'b73a48c2-d1e0-45ae-9eb2-1fe684bf3064',
				};

				return next();
			});

			CoreRoutes.load(app);
		});

		const { App } = await import('@app');

		return Promise.resolve(new App().app);
	}

	public static async authenticateAsUser(): Promise<Application> {
		return await this.authenticate();
	}
	public static async restore(): Promise<void> {
		(CoreModule.load as SinonStub).restore(); // tslint:disable-line no-any

		return Promise.resolve();
	}
}
