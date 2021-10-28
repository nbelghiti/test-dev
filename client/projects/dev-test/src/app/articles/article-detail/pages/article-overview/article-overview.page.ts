import { Component, OnDestroy } from '@angular/core';
import { ReduxRouterParams } from '@studiohyperdrive/ng-redux-router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import {
	ButtonType,
	HeadingLevel,
	IconName,
	IconSize,
	IconType,
} from 'adb-ui';
import { isNotNil } from 'adb-utils';

import { ArticlesFacade } from '~/articles/articles-shared/facades/articles/articles.facade';
import { TeamsFacade } from '~/articles/articles-shared/facades/teams/teams.facade';
import { ContextFacade } from '~/core/context/facades/context.facade';
import { RouterFacade } from '~/core/router/facades/router.facade';
import { IArticle } from '~/repositories/articles/services/articles.types';
import { IMember, ITeam } from '~/repositories/teams/services/teams.types';

@Component({
	templateUrl: './article-overview.page.html',
})
export class ArticleOverviewPage implements OnDestroy {
	public article$: Subject<IArticle> = new Subject<IArticle>();
	public myArticle =	{
		_id: '5fb25b797b7d474d2c83874f',
		author: {
			picture: 'http://placehold.it/32x32',
			name: {
				first: "Mccoy",
				last: "Bender"
			}
		},
		title: "Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.",
		summary: "Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.",
		intro: "Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.",
		banner: "http://placehold.it/1920x1080",
		body: "Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.",
		assets: [
			{
				src: "http://placehold.it/720x480",
				alt: "Placeholder image 2",
				type: "image"
			},
			{
				src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf",
				alt: "Placeholder file 2",
				type: "file"
			},
			{
				src: "http://placehold.it/900x1200",
				alt: "Placeholder image 3",
				type: "image"
			}
		],
		created: "Monday, August 12, 2019 10:46 PM",
		tags: [
			'hr',
			'updates'
		],
		internal: false
	};
	public team: Partial<ITeam>;
	public teamLoading: boolean = true;

	public ButtonType: typeof ButtonType = ButtonType;
	public HeadingLevel: typeof HeadingLevel = HeadingLevel;
	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;
	public IconType: typeof IconType = IconType;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		public contextFacade: ContextFacade,
		public articlesFacade: ArticlesFacade,
		private teamsFacade: TeamsFacade,
		private routerFacade: RouterFacade,
	) {
		this.contextFacade.setHeaderInfo({
			title: 'Article',
			backLink: '/articles',
			home: true,
			breadcrumb: null,
		});

		this.article$.pipe(
				isNotNil(),
				takeUntil(this.destroyed$)
			)
			.subscribe((article: IArticle) => {
				this.contextFacade.setHeaderInfo({
					title: article.title,
					backLink: '/articles',
					home: true,
					breadcrumb: null,
				});
			});

		this.routerFacade.onParamsChanged(['articleId'])
			.pipe(
				takeUntil(this.destroyed$),
				tap(({ articleId }: ReduxRouterParams) => {
					this.articlesFacade.getArticle(articleId);
				}),
				switchMap(({ articleId }: ReduxRouterParams) =>
					this.articlesFacade.selectOne(articleId).pipe(
						isNotNil(),
						takeUntil(this.destroyed$),
					),
				),
			)
			.subscribe((article: IArticle) => {
				this.article$.next(article);
			});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
