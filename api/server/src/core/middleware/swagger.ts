import { Application } from 'express';
import { swaggerExpress } from '@studiohyperdrive/swagger-express-ts';

import config  from '@config';
import { version } from '@pkg';

export class SwaggerMiddleware {
	public static load(app: Application): void {
		app.use(swaggerExpress({
			docsPath: '/docs',
			basePath: '/',
			info: {
				version,
				title: `Consilio API - ${config.state.env}`,
			},
			host: config.server.host,
			uiOptions: {
				customfavIcon: 'localhost:3000/favicon.ico',
			},
		}));
	}
}
