import {
	ApiDefinition,
	ApiOperationGet,
	ApiOperationPut,
	ApiPath,
	Router,
	SwaggerModelType,
	SwaggerParameterType,
	SwaggerResponseType,
	SwaggerUtils,
} from '@studiohyperdrive/swagger-express-ts';
import { Application } from 'express';

import { AuthMiddleware } from '@core/middleware/auth';
import { DataMiddleware } from '@shared/middleware/data';

import { getTeamById } from './controllers/get-by-id';
import { getMembers } from './controllers/get-members';
import { updateTeam } from './controllers/update';
import { validations } from './helpers/validations';
import { TeamsV1Models } from './teams.models';

@ApiPath({
	name: 'Teams',
	description: 'Teams',
	path: '/teams',
	version: 1,
})
export class TeamsV1Router extends Router {
	@ApiDefinition({
		description: 'Team',
		type: SwaggerModelType.OBJECT,
	})
	public static Team = TeamsV1Models.Team;

	public load(app: Application): void {
		app.route([this.baseUrl, `${this.baseUrl}/*`]).all((req, res, next) => {
			return AuthMiddleware.verifyJWT()(req, res, next);
		});
	}

	@ApiOperationGet({
		path: '/{id}',
		description : 'Get team',
		parameters: {
			path: {
				id: {
					description: 'Team ID',
					required: true,
					type: SwaggerParameterType.STRING,
				},
			},
		},
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.OBJECT,
				schema: 'Team',
			},
			404: {
				description: 'Not Found',
				type: SwaggerResponseType.OBJECT,
				schema: 'Error',
			},
		},
	})
	public getById(app: Application): void {
		app.route(`${this.baseUrl}/:id`).get(
			DataMiddleware.copy,
			DataMiddleware.validate('params', validations.byId),
			SwaggerUtils.createController(getTeamById)
		);
	}

	@ApiOperationPut({
		path: '/{id}',
		description : 'Update team',
		parameters: {
			path: {
				id: {
					description: 'id',
					required: true,
					type: SwaggerParameterType.STRING,
				},
			},
			body: TeamsV1Models.Team as any, // tslint:disable-line no-any
		},
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.OBJECT,
				schema: 'Team',
			},
			400: {
				description: 'Bad Request',
				type: SwaggerResponseType.OBJECT,
				schema: 'Error',
			},
			404: {
				description: 'Not Found',
				type: SwaggerResponseType.OBJECT,
				schema: 'Error',
			},
			409: {
				description: 'Conflict',
				type: SwaggerResponseType.OBJECT,
				schema: 'Error',
			},
		},
	})
	public updateTeam(app: Application): void {
		app.route(`${this.baseUrl}/:id`).put(
			DataMiddleware.copy,
			DataMiddleware.validate('params', validations.byId),
			DataMiddleware.validate('body', validations.update),
			SwaggerUtils.createController(updateTeam)
		);
	}

	public getMembers(app: Application): void {
		app.route(`${this.baseUrl}/members`).get(
			DataMiddleware.copy,
			DataMiddleware.validate('query', validations.queryUsers),
			SwaggerUtils.createController(getMembers)
		);
	}
}
