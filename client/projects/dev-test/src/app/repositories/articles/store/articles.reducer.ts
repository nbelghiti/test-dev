import { Action, createReducer, on } from '@ngrx/store';
import { omit, propOr } from 'ramda';

import {
	clearAllArticles,
	getArticle,
	getArticleFailed,
	getArticleSucces,
	getArticles,
	getArticlesFailed,
	getArticlesSucces,
	refreshArticle,
	refreshArticleFailed,
	refreshArticleSucces,
} from './articles.actions';
import { adapter, initialState } from './articles.adapter';
import { IArticlesState } from './articles.types';

const errorState = (state, { error }) => ({
	...state,
	isLoading: false,
	error,
});

const reducer = createReducer(
	initialState,
	on(
		getArticle,
		refreshArticle,
		getArticles,
		(state) => ({ ...state, isLoading: true })),
	on(
		getArticleSucces,
		(state, { article }) => adapter.upsertOne(article, {
			...state,
			isLoading: false,
			error: null,
		})),
	on(
		refreshArticleSucces,
		(state, { article }) => adapter.updateOne({
			id: article._id,
			changes: article,
		}, { ...state, isLoading: false })
	),
	on(getArticlesSucces, (state, { articles }) => {
		const items = propOr([], 'items', articles);
		const meta = omit(['items'], articles);

		return adapter.addMany(items, { ...state, meta, isLoading: false });
	}),
	on(
		getArticleFailed,
		refreshArticleFailed,
		getArticlesFailed,
		errorState,
	),
	on(clearAllArticles, () => initialState),
);

export function articlesReducer(state: IArticlesState, action: Action) {
	return reducer(state, action);
}
