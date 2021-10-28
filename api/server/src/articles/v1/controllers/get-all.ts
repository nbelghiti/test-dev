import { PaginationHelper } from '@shared/helpers/pagination';
import { IPagination, IRequest, IResponse, INext } from '@shared/shared.types';
import Article from '../models/article.model';

import { IArticle } from '../articles.types';

export const getAllArticles = async (req: IRequest, res: IResponse, next: INext): Promise<IPagination<IArticle>> => {
	const pageInfo = PaginationHelper.parseQuery(req.data.query);
	const articles = await Article
		.findAll({
			...pageInfo,
			where: {},
			...(req.data.query.sort === 'created' && {
				order: [
					['created', 'DESC'],
				],
			}),
			...(req.data.query.sort === 'title' && {
				order: [
					['title', 'ASC'],
				],
			}),
		});
	const total = await Article.count({
		where: {},
	});

	return PaginationHelper.map(articles, total, '/v1/articles', req.data.query);
};
