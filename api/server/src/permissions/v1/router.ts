import { ApiDefinition, ApiOperationGet, ApiPath, Router, SwaggerModelType, SwaggerResponseType, SwaggerUtils } from '@studiohyperdrive/swagger-express-ts';
import { Application } from 'express';

import { AuthMiddleware } from '@core/middleware/auth';
import { DataMiddleware } from '@shared/middleware/data';

import { getUserProjectPermissions } from './controllers/get-user-project-permissions';
import { validations } from './helpers/validations';
import { PermissionsV1Models } from './permissions.models';

@ApiPath({
	name: 'Permissions',
	description: 'Permissions',
	path: '/permissions',
	version: 1,
})
export class PermissionsV1Router extends Router {
	@ApiDefinition({
		description: 'Permissions',
		type: SwaggerModelType.OBJECT,
	})
	public static Permissions = PermissionsV1Models.Permissions;

	public load(app: Application): void {
		app.route([this.baseUrl, `${this.baseUrl}/*`]).all((req, res, next) => {
			return AuthMiddleware.verifyJWT()(req, res, next);
		});
	}

	@ApiOperationGet({
		path: '/project-permissions/{projectId}',
		description : 'List permissions',
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.ARRAY,
				schema: 'Permissions',
			},
		},
	})
	public getUserProjectPermissions(app: Application): void {
		app.route(`${this.baseUrl}/project-permissions/:projectId`).get(
			DataMiddleware.copy,
			DataMiddleware.validate('params', validations.projectId),
			SwaggerUtils.createController(getUserProjectPermissions)
		);
	}
}
