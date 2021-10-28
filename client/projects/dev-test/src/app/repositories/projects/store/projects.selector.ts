import { createSelector } from '@ngrx/store';

import { IRepositoryState, REPOSITORY_SELECTOR } from '../../repositories.store';
import { IProject } from '../services/projects.types';

import { adapter } from './projects.adapter';

export const {
	selectIds: selectProjectIds,
	selectEntities: selectProjectEntities,
	selectAll: selectAllProjects,
	selectTotal: selectTotalProjects,
} = adapter.getSelectors();

export const selectProjectById = createSelector(
	selectProjectEntities,
	(entities: {[key: string]: IProject}, props: { id: string }) => {
		if (!entities[props.id]) {
			return null;
		}

		return entities[props.id];
	}
);

export const PROJECTS_SELECTOR = createSelector(
	REPOSITORY_SELECTOR,
	(state: IRepositoryState) => state.projects
);
