import { Injectable } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { pathOr, prop, propOr, sortBy } from 'ramda';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { isNotNil } from 'adb-utils';

import {
	IProject,
	IProjectsFilter
} from '~/repositories/projects/services/projects.types';
import {
	clearAllProjects,
	getProject,
	getProjects,
	refreshProject,
} from '~/repositories/projects/store/projects.actions';
import { PROJECTS_SELECTOR, selectAllProjects, selectProjectById } from '~/repositories/projects/store/projects.selector';
import { IProjectsState } from '~/repositories/projects/store/projects.types';
import { IError, IPaginationMeta } from '~/repositories/repository.types';
import { IMember } from '~/repositories/teams/services/teams.types';

import { IProjectsState as IState } from '../../../projects.types';

@Injectable()
export class ProjectsFacade {
	private selectProjects = createSelector(
		PROJECTS_SELECTOR,
		selectAllProjects
	);

	private selectProjectsMeta = createSelector(
		PROJECTS_SELECTOR,
		(state: IProjectsState) => state.meta
	);

	private selectProjectsLoading = createSelector(
		PROJECTS_SELECTOR,
		(state: IProjectsState) => state.isLoading
	);

	private selectProjectById = createSelector(
		PROJECTS_SELECTOR,
		selectProjectById
	);

	private selectStatus = createSelector(
		PROJECTS_SELECTOR,
		(state: IProjectsState) => ({
			error: state.error,
			loading: state.isLoading,
		})
	);

	constructor(
		private store: Store<IState>,
	) { }

	public getAllProjects = (filters?: IProjectsFilter): void => this.store.dispatch(getProjects({ filters }));

	public getProject = (id: string): void => this.store.dispatch(getProject({ id }));

	public refreshProject = (id: string) => this.store.dispatch(refreshProject({ id }));

	public clearAllProjects = () => this.store.dispatch(clearAllProjects());

	public selectAll = (): Observable<IProject[]> => this.store.pipe(
		select(this.selectProjects)
	)

	public selectMeta = (): Observable<IPaginationMeta> => this.store.pipe(
		select(this.selectProjectsMeta)
	)

	public selectLoading = (): Observable<boolean> => this.store.pipe(
		select(this.selectProjectsLoading)
	)

	public selectOne = (id: string): Observable<IProject> => this.store.pipe(
		select(this.selectProjectById, { id }),
		distinctUntilChanged(),
		isNotNil(),
		map((project: IProject) => ({
			...project,
			packages: sortBy(prop('name'), propOr([], 'packages', project)).map((pckg) => ({
				...pckg,
				componentGroups: sortBy(prop('name'), propOr([], 'componentGroups', pckg)).map((group) => ({
					...group,
					components: sortBy(prop('name'), propOr([], 'components', group)),
				})),
			})),
			team: {
				...project.team,
				members: pathOr([], ['team', 'members'], project).map((member: IMember) => ({
					...member,
				})),
			},
		})),
	)

	public selectProjectStatus = (): Observable<{ loading: boolean, error: IError }> => this.store.pipe(
		select(this.selectStatus)
	)
}
