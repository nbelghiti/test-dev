import { Injectable } from '@angular/core';
import { ReduxRouterParams } from '@studiohyperdrive/ng-redux-router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RouterFacade } from '~/core/router/facades/router.facade';

@Injectable({
	providedIn: 'root',
})
export class ArticleRouter {
	private articleId: string;

	constructor(
		private routerFacade: RouterFacade,
	) { }

	public init(): Observable<ReduxRouterParams> {
		return this.routerFacade.onParamsChanged<ReduxRouterParams>(['articleId'])
			.pipe(
				tap(({ articleId }: ReduxRouterParams) => {
					this.articleId = articleId;
				}),
			);
	}

	public baseUrl({
		articleId = this.articleId,
		path = [],
		isEdit = false
	}: {
		articleId?: string;
		path?: string[];
		isEdit?: boolean;
	} = {}): string[] {
		return isEdit ? [
			'/articles',
			articleId,
			'admin',
			...path,
		] : [
				'/articles',
				articleId,
				...path,
			];
	}

	public getBaseLink({
		articleId = this.articleId,
		isEdit = false
	}: {
		articleId?: string;
		isEdit?: boolean;
	} = {}): string[] {
		const link = isEdit ? [
			'/articles',
			articleId,
			'admin',
			'structure',
		] : [
				'/articles',
				articleId,
			];

		return link;
	}
}
