import {
	ApiDefinition,
	ApiOperationGet,
	ApiPath,
	paginated,
	Router,
	SwaggerModelType,
	SwaggerParameterType,
	SwaggerResponseType,
	SwaggerUtils,
} from '@studiohyperdrive/swagger-express-ts';
import { Application } from 'express';

import { AuthMiddleware } from '@core/middleware/auth';
import { DataMiddleware } from '@shared/middleware/data';
import { paginationParams } from '@shared/shared.models';

import { getAllProjects } from './controllers/get-all';
import { getProjectById } from './controllers/get-by-id';
import { validations } from './helpers/validations';
import { ProjectsV1Models } from './projects.models';

@ApiPath({
	name: 'Projects',
	description: 'Projects',
	path: '/projects',
	version: 1,
})
export class ProjectsV1Router extends Router {
	@ApiDefinition({
		description: 'Project',
		type: SwaggerModelType.OBJECT,
	})
	public static Project = ProjectsV1Models.Project;

	@ApiDefinition({
		description: 'ProjectListView',
		type: SwaggerModelType.OBJECT,
	})
	public static ProjectListView = ProjectsV1Models.ProjectListView;

	@ApiDefinition({
		description: 'Projects',
		type: SwaggerModelType.OBJECT,
	})
	public static Projects = paginated('ProjectListView', 'Projects');

	public load(app: Application): void {
		app.route([this.baseUrl, `${this.baseUrl}/*`]).all((req, res, next) => {
			return AuthMiddleware.verifyJWT()(req, res, next);
		});
	}

	@ApiOperationGet({
		description: 'Get projects',
		parameters: {
			...paginationParams,
		},
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.OBJECT,
				schema: 'Projects',
			},
			404: {
				description: 'Not Found',
				type: SwaggerResponseType.OBJECT,
				schema: 'Error',
			},
		},
	})
	public getAll(app: Application): void {
		app.route(this.baseUrl).get(
			DataMiddleware.copy,
			DataMiddleware.validate('query', validations.pagination),
			DataMiddleware.validate('query', validations.filter),
			SwaggerUtils.createController(getAllProjects)
		);
	}

	@ApiOperationGet({
		path: '/{id}',
		description: 'Get project',
		parameters: {
			path: {
				id: {
					description: 'id',
					required: true,
					type: SwaggerParameterType.STRING,
				},
			},
		},
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.OBJECT,
				schema: 'Project',
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
			SwaggerUtils.createController(getProjectById)
		);
	}
}
