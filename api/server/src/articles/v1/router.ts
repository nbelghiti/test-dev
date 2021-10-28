import {
	ApiDefinition,
	ApiOperationGet,
	ApiPath,
	paginated,
	Router,
	SwaggerModelType,
	SwaggerResponseType,
	SwaggerUtils,
} from '@studiohyperdrive/swagger-express-ts';
import { Application } from 'express';

import { AuthMiddleware } from '@core/middleware/auth';
import { DataMiddleware } from '@shared/middleware/data';
import { paginationParams } from '@shared/shared.models';

import { getAllArticles } from './controllers/get-all';
import { validations } from './helpers/validations';
import { ArticlesV1Models } from './articles.models';

@ApiPath({
	name: 'Articles',
	description: 'Articles',
	path: '/articles',
	version: 1,
})
export class ArticlesV1Router extends Router {
	@ApiDefinition({
		description: 'Article',
		type: SwaggerModelType.OBJECT,
	})
	public static Article = ArticlesV1Models.Article;

	@ApiDefinition({
		description: 'ArticleListView',
		type: SwaggerModelType.OBJECT,
	})
	public static ArticleListView = ArticlesV1Models.ArticleListView;

	@ApiDefinition({
		description: 'Articles',
		type: SwaggerModelType.OBJECT,
	})
	public static Articles = paginated('ArticleListView', 'Articles');

	public load(app: Application): void {
		app.route([this.baseUrl, `${this.baseUrl}/*`]).all((req, res, next) => {
			return AuthMiddleware.verifyJWT()(req, res, next);
		});
	}

	@ApiOperationGet({
		description: 'Get articles',
		parameters: {
			...paginationParams,
		},
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.OBJECT,
				schema: 'Articles',
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
			SwaggerUtils.createController(getAllArticles)
		);
	}
}
