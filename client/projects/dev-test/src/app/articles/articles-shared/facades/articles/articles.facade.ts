import { Injectable } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { pathOr, prop, propOr, sortBy } from 'ramda';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { isNotNil } from 'adb-utils';

import {
	IArticle,
	IArticlesFilter
} from '~/repositories/articles/services/articles.types';
import {
	clearAllArticles,
	getArticle,
	getArticles,
	refreshArticle,
} from '~/repositories/articles/store/articles.actions';
import { ARTICLES_SELECTOR, selectAllArticles, selectArticleById } from '~/repositories/articles/store/articles.selector';
import { IArticlesState } from '~/repositories/articles/store/articles.types';
import { IError, IPaginationMeta } from '~/repositories/repository.types';
import { IMember } from '~/repositories/teams/services/teams.types';

import { IArticlesState as IState } from '../../../articles.types';

@Injectable()
export class ArticlesFacade {
	private selectArticles = createSelector(
		ARTICLES_SELECTOR,
		selectAllArticles
	);

	private selectArticlesMeta = createSelector(
		ARTICLES_SELECTOR,
		(state: IArticlesState) => state.meta
	);

	private selectArticlesLoading = createSelector(
		ARTICLES_SELECTOR,
		(state: IArticlesState) => state.isLoading
	);

	private selectArticleById = createSelector(
		ARTICLES_SELECTOR,
		selectArticleById
	);

	private selectStatus = createSelector(
		ARTICLES_SELECTOR,
		(state: IArticlesState) => ({
			error: state.error,
			loading: state.isLoading,
		})
	);

	constructor(
		private store: Store<IState>,
	) { }

	public getAllArticles = (filters?: IArticlesFilter): void => this.store.dispatch(getArticles({ filters }));

	public getArticle = (id: string): void => this.store.dispatch(getArticle({ id }));

	public refreshArticle = (id: string) => this.store.dispatch(refreshArticle({ id }));

	public clearAllArticles = () => this.store.dispatch(clearAllArticles());

	public selectAll = (): Observable<IArticle[]> => this.store.pipe(
		select(this.selectArticles)
	)

	public selectMeta = (): Observable<IPaginationMeta> => this.store.pipe(
		select(this.selectArticlesMeta)
	)

	public selectLoading = (): Observable<boolean> => this.store.pipe(
		select(this.selectArticlesLoading)
	)

	public selectOne = (id: string): Observable<IArticle> => this.store.pipe(
		select(this.selectArticleById, { id }),
		distinctUntilChanged(),
		isNotNil(),
		map((article: IArticle) => ({
			...article,
			packages: sortBy(prop('name'), propOr([], 'packages', article)).map((pckg) => ({
				...pckg,
				componentGroups: sortBy(prop('name'), propOr([], 'componentGroups', pckg)).map((group) => ({
					...group,
					components: sortBy(prop('name'), propOr([], 'components', group)),
				})),
			}))
		})),
	)

	public selectArticleStatus = (): Observable<{ loading: boolean, error: IError }> => this.store.pipe(
		select(this.selectStatus)
	)
}
