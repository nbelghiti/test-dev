import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { IError } from '../../repository.types';
import { ArticlesService } from '../services/articles.service';
import { IArticle, IArticles } from '../services/articles.types';

import {
	getArticleFailed,
	getArticleSucces,
	getArticlesFailed,
	getArticlesSucces,
	refreshArticleFailed,
	refreshArticleSucces,
} from './articles.actions';
import { ArticlesActions } from './articles.types';

@Injectable()
export class ArticlesEffects {
	constructor(
		private actions$: Actions,
		private articles: ArticlesService,
		private router: Router
	) { }

	public getArticle$ =
		createEffect(() => this.actions$.pipe(
			ofType(ArticlesActions.getArticle),
			switchMap(({ id }) => this.articles.getArticle(id).pipe(
				map((article: IArticle) => getArticleSucces({ article })),
				catchError((error: IError) => of(getArticleFailed({ error })))
			))
		));

	public getArticleFailed$ =
		createEffect(() => this.actions$.pipe(
			ofType(ArticlesActions.getArticleFailed),
			tap(() => this.router.navigate(['/not-found']))
		), { dispatch: false });

	public refreshArticle$ =
		createEffect(() => this.actions$.pipe(
			ofType(ArticlesActions.refreshArticle),
			switchMap(({ id }) => this.articles.getArticle(id).pipe(
				map((article: IArticle) => refreshArticleSucces({ article })),
				catchError((error: IError) => of(refreshArticleFailed({ error })))
			))
		));

	public getArticles$ =
		createEffect(() => this.actions$.pipe(
			ofType(ArticlesActions.getArticles),
			switchMap(({ filters }) => this.articles.getArticles(filters).pipe(
				map((articles: IArticles) => getArticlesSucces({ articles })),
				catchError((error: IError) => of(getArticlesFailed({ error })))
			))
		));
}

