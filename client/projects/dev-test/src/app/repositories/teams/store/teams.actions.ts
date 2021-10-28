import { createAction, props } from '@ngrx/store';

import { IError } from '../../repository.types';
import { ITeam } from '../services/teams.types';

import { TeamsActions } from './teams.types';

// get team | /team
export const getTeam = createAction(
	TeamsActions.getTeam,
	props<{ id: string }>()
);

export const getTeamSuccess = createAction(
	TeamsActions.getTeamSuccess,
	props<{ team: ITeam }>()
);

export const getTeamFailed = createAction(
	TeamsActions.getTeamFailed,
	props<{ error: IError }>()
);

// update team | /team
export const updateTeam = createAction(
	TeamsActions.updateTeam,
	props<{ id: string, team: ITeam }>()
);

export const updateTeamSuccess = createAction(
	TeamsActions.updateTeamSuccess,
	props<{ team: ITeam }>()
);

export const updateTeamFailed = createAction(
	TeamsActions.updateTeamFailed,
	props<{ error: IError }>()
);
