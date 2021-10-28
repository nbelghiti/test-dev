import { createSelector } from '@ngrx/store';
import { propOr } from 'ramda';

import { IRepositoryState, REPOSITORY_SELECTOR } from '../../repositories.store';
import { ITeam } from '../services/teams.types';

import { adapter } from './teams.adapter';

export const {
	selectIds: selectTeamIds,
	selectEntities: selectTeamEntities,
} = adapter.getSelectors();

export const selectTeamById = createSelector(
	selectTeamEntities,
	(entities: { [key: string]: ITeam }, { id }: { id: string }) => propOr(null, id, entities)
);

export const TEAMS_SELECTOR = createSelector(
	REPOSITORY_SELECTOR,
	(state: IRepositoryState) => state.teams,
);
