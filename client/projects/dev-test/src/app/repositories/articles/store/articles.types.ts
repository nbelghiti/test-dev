import { IEntityState } from '../../repository.types';
import { IArticle } from '../services/articles.types';

export enum ArticlesActions {
	// get a single article | /articles/{id}
	getArticle = '[Articles]: get one',
	getArticleSucces = '[Articles]: get one: succes',
	getArticleFailed = '[Articles]: get one: failed',
	// refresh a single article | /articles/{id}
	refreshArticle = '[Articles]: refresh one',
	refreshArticleSucces = '[Articles]: refresh one: succes',
	refreshArticleFailed = '[Articles]: refresh one: failed',
	// get a range of articles | /articles
	getArticles = '[Articles]: get',
	getArticlesSucces = '[Articles]: get succes',
	getArticlesFailed = '[Articles]: get failed',
	// clear articles from the store
	clearAllArticles = '[Articles]: clear all',
}

export type IArticlesState = IEntityState<IArticle>;
