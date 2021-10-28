import { Action, createReducer, on } from '@ngrx/store';
import { omit, propOr } from 'ramda';

import {
	clearAllProjects,
	getProject,
	getProjectFailed,
	getProjectSucces,
	getProjects,
	getProjectsFailed,
	getProjectsSucces,
	refreshProject,
	refreshProjectFailed,
	refreshProjectSucces,
} from './projects.actions';
import { adapter, initialState } from './projects.adapter';
import { IProjectsState } from './projects.types';

const errorState = (state, { error }) => ({
	...state,
	isLoading: false,
	error,
});

const reducer = createReducer(
	initialState,
	on(
		getProject,
		refreshProject,
		getProjects,
		(state) => ({ ...state, isLoading: true })),
	on(
		getProjectSucces,
		(state, { project }) => adapter.upsertOne(project, {
			...state,
			isLoading: false,
			error: null,
		})),
	on(
		refreshProjectSucces,
		(state, { project }) => adapter.updateOne({
			id: project.id,
			changes: project,
		}, { ...state, isLoading: false })
	),
	on(getProjectsSucces, (state, { projects }) => {
		const items = propOr([], 'items', projects);
		const meta = omit(['items'], projects);

		return adapter.addMany(items, { ...state, meta, isLoading: false });
	}),
	on(
		getProjectFailed,
		refreshProjectFailed,
		getProjectsFailed,
		errorState,
	),
	on(clearAllProjects, () => initialState),
);

export function projectsReducer(state: IProjectsState, action: Action) {
	return reducer(state, action);
}
