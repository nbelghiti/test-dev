import { Action, createReducer, on } from '@ngrx/store';

import {
	getTeam,
	getTeamFailed,
	getTeamSuccess,
	updateTeam,
	updateTeamFailed,
	updateTeamSuccess,
} from './teams.actions';
import { adapter, initialState } from './teams.adapter';
import { ITeamsState } from './teams.types';

const reducer = createReducer(
	initialState,
	// get teams | /teams
	on(
		getTeam,
		updateTeam,
		(state) => ({ ...state, isLoading: true })),
	on(
		getTeamSuccess,
		updateTeamSuccess,
		(state, { team }) => adapter.upsertOne(team, {
			...state,
			isLoading: false,
			error: null,
		})
	),
	on(
		getTeamFailed,
		updateTeamFailed,
		(state, { error }) => ({ ...state, error, isLoading: false })),
);

export function teamsReducer (state: ITeamsState, action: Action) {
	return reducer(state, action);
}
