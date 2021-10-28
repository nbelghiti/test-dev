import { createSelector } from '@ngrx/store';

import { IRepositoryState, REPOSITORY_SELECTOR } from '../../repositories.store';
import { IArticle } from '../services/articles.types';

import { adapter } from './articles.adapter';

export const {
	selectIds: selectArticleIds,
	selectEntities: selectArticleEntities,
	selectAll: selectAllArticles,
	selectTotal: selectTotalArticles,
} = adapter.getSelectors();

export const selectArticleById = createSelector(
	selectArticleEntities,
	(entities: {[key: string]: IArticle}, props: { id: string }) => {
		if (!entities[props.id]) {
			return null;
		}

		return entities[props.id];
	}
);

export const ARTICLES_SELECTOR = createSelector(
	REPOSITORY_SELECTOR,
	(state: IRepositoryState) => state.articles
);
