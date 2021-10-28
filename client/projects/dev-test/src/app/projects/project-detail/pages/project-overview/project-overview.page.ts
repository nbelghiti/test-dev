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

import { ContextFacade } from '~/core/context/facades/context.facade';
import { RouterFacade } from '~/core/router/facades/router.facade';
import { ProjectsFacade } from '~/projects/projects-shared/facades/projects/projects.facade';
import { TeamsFacade } from '~/projects/projects-shared/facades/teams/teams.facade';
import { IProject } from '~/repositories/projects/services/projects.types';
import { IMember, ITeam } from '~/repositories/teams/services/teams.types';

@Component({
	templateUrl: './project-overview.page.html',
})
export class ProjectOverviewPage implements OnDestroy {
	public project$: Subject<IProject> = new Subject<IProject>();

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
		public projectsFacade: ProjectsFacade,
		private teamsFacade: TeamsFacade,
		private routerFacade: RouterFacade,
	) {
		this.contextFacade.setHeaderInfo({
			title: 'Project',
			backLink: '/projects',
			home: true,
			breadcrumb: null,
		});

		this.project$.pipe(
				isNotNil(),
				takeUntil(this.destroyed$)
			)
			.subscribe((project: IProject) => {
				this.contextFacade.setHeaderInfo({
					title: project.name,
					backLink: '/projects',
					home: true,
					breadcrumb: null,
				});
			});

		this.routerFacade.onParamsChanged(['projectId'])
			.pipe(
				takeUntil(this.destroyed$),
				tap(({ projectId }: ReduxRouterParams) => {
					this.projectsFacade.getProject(projectId);
				}),
				switchMap(({ projectId }: ReduxRouterParams) =>
					this.projectsFacade.selectOne(projectId).pipe(
						isNotNil(),
						takeUntil(this.destroyed$),
					),
				),
			)
			.subscribe((project: IProject) => {
				this.project$.next(project);

				if (project.team) {
					this.teamsFacade.selectOne(project.team.id);

					this.team = {
						id: project.team.id,
						members: project.team.members.filter(({ management }: IMember) => management),
					};
					this.teamLoading = false;
				}
			});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
