import { createAction, props } from '@ngrx/store';

import { IError } from '../../repository.types';
import {
	IArticle,
	IArticles,
	IArticlesFilter
} from '../services/articles.types';

import { ArticlesActions } from './articles.types';

// get a single article | /articles/{id}
export const getArticle = createAction(
	ArticlesActions.getArticle,
	props<{ id: string }>()
);
export const getArticleSucces = createAction(
	ArticlesActions.getArticleSucces,
	props<{ article: IArticle }>()
);
export const getArticleFailed = createAction(
	ArticlesActions.getArticleFailed,
	props<{ error: IError }>()
);

// refresh a single article | /articles/{id}
export const refreshArticle = createAction(
	ArticlesActions.refreshArticle,
	props<{ id: string }>()
);
export const refreshArticleSucces = createAction(
	ArticlesActions.refreshArticleSucces,
	props<{ article: IArticle }>()
);
export const refreshArticleFailed = createAction(
	ArticlesActions.refreshArticleFailed,
	props<{ error: IError }>()
);

// get a range of articles | /articles
export const getArticles = createAction(
	ArticlesActions.getArticles,
	props<{ filters?: IArticlesFilter }>()
);
export const getArticlesSucces = createAction(
	ArticlesActions.getArticlesSucces,
	props<{ articles: IArticles }>()
);
export const getArticlesFailed = createAction(
	ArticlesActions.getArticlesFailed,
	props<{ error: IError }>()
);

// clear articles from the store
export const clearAllArticles = createAction(
	ArticlesActions.clearAllArticles
);
