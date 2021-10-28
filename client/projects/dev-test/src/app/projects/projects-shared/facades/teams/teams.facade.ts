import { Injectable } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { propOr } from 'ramda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { isNotNil } from 'adb-utils';

import { TeamsService } from '~/repositories/teams/services/teams.service';
import { ITeam, IUser, IMember } from '~/repositories/teams/services/teams.types';
import { getTeam, updateTeam } from '~/repositories/teams/store/teams.actions';
import { TEAMS_SELECTOR, selectTeamById } from '~/repositories/teams/store/teams.selector';
import { ITeamsState } from '~/repositories/teams/store/teams.types';

import { IProjectsState as IState } from '../../../projects.types';

@Injectable()
export class TeamsFacade {
	private selectTeamById = createSelector(
		TEAMS_SELECTOR,
		selectTeamById
	);

	private selectTeamsLoading = createSelector(
		TEAMS_SELECTOR,
		(state: ITeamsState) => state.isLoading
	);

	constructor(
		private store: Store<IState>,
		private teamsService: TeamsService
	) { }

	public getMembers = (name?: string): Observable<IUser[]> => this.teamsService.getMembers(name);

	// Selectors
	public selectLoading = (): Observable<boolean> => this.store.pipe(
		select(this.selectTeamsLoading)
	)

	public selectOne = (id: string): Observable<ITeam> => this.store.pipe(
		select(this.selectTeamById, { id }),
		isNotNil(),
		map((team: ITeam) => ({
			...team,
			members: propOr([], 'members', team).map((member: IMember) => ({
				...member,
			})),
		}))
	)

	// Actions
	public getTeam = (id: string): void => this.store.dispatch(getTeam({ id }));

	public updateTeam = (id: string, team: ITeam): void => {
		this.store.dispatch(updateTeam({ id, team }));
	}
}
