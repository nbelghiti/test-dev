import { createAction, props } from '@ngrx/store';

import { IError } from '../../repository.types';
import {
	IProject,
	IProjects,
	IProjectsFilter
} from '../services/projects.types';

import { ProjectsActions } from './projects.types';

// get a single project | /projects/{id}
export const getProject = createAction(
	ProjectsActions.getProject,
	props<{ id: string }>()
);
export const getProjectSucces = createAction(
	ProjectsActions.getProjectSucces,
	props<{ project: IProject }>()
);
export const getProjectFailed = createAction(
	ProjectsActions.getProjectFailed,
	props<{ error: IError }>()
);

// refresh a single project | /projects/{id}
export const refreshProject = createAction(
	ProjectsActions.refreshProject,
	props<{ id: string }>()
);
export const refreshProjectSucces = createAction(
	ProjectsActions.refreshProjectSucces,
	props<{ project: IProject }>()
);
export const refreshProjectFailed = createAction(
	ProjectsActions.refreshProjectFailed,
	props<{ error: IError }>()
);

// get a range of projects | /projects
export const getProjects = createAction(
	ProjectsActions.getProjects,
	props<{ filters?: IProjectsFilter }>()
);
export const getProjectsSucces = createAction(
	ProjectsActions.getProjectsSucces,
	props<{ projects: IProjects }>()
);
export const getProjectsFailed = createAction(
	ProjectsActions.getProjectsFailed,
	props<{ error: IError }>()
);

// clear projects from the store
export const clearAllProjects = createAction(
	ProjectsActions.clearAllProjects
);
