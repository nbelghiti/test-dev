import { Injectable } from '@angular/core';
import { ReduxRouterParams } from '@studiohyperdrive/ng-redux-router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RouterFacade } from '~/core/router/facades/router.facade';

@Injectable({
	providedIn: 'root',
})
export class ProjectRouter {
	private projectId: string;

	constructor(
		private routerFacade: RouterFacade,
	) { }

	public init(): Observable<ReduxRouterParams> {
		return this.routerFacade.onParamsChanged<ReduxRouterParams>(['projectId'])
			.pipe(
				tap(({ projectId }: ReduxRouterParams) => {
					this.projectId = projectId;
				}),
			);
	}

	public baseUrl({
		projectId = this.projectId,
		path = [],
		isEdit = false
	}: {
		projectId?: string;
		path?: string[];
		isEdit?: boolean;
	} = {}): string[] {
		return isEdit ? [
			'/projects',
			projectId,
			'admin',
			...path,
		] : [
				'/projects',
				projectId,
				...path,
			];
	}

	public getBaseLink({
		projectId = this.projectId,
		isEdit = false
	}: {
		projectId?: string;
		isEdit?: boolean;
	} = {}): string[] {
		const link = isEdit ? [
			'/projects',
			projectId,
			'admin',
			'structure',
		] : [
				'/projects',
				projectId,
			];

		return link;
	}
}
