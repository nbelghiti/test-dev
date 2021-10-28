import { IEntityState } from '../../repository.types';
import { ITeam } from '../services/teams.types';

export enum TeamsActions {
	// get teams | /teams
	getTeam = '[Teams] get',
	getTeamSuccess = '[Teams] get success',
	getTeamFailed = '[Teams] get failed',
	// update teams | /teams
	updateTeam = '[Teams] update',
	updateTeamSuccess = '[Teams] update success',
	updateTeamFailed = '[Teams] update failed',
}

export type ITeamsState = IEntityState<ITeam>;
