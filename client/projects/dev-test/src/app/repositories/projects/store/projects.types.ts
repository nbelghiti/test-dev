import { IEntityState } from '../../repository.types';
import { IProject } from '../services/projects.types';

export enum ProjectsActions {
	// get a single project | /projects/{id}
	getProject = '[Projects]: get one',
	getProjectSucces = '[Projects]: get one: succes',
	getProjectFailed = '[Projects]: get one: failed',
	// refresh a single project | /projects/{id}
	refreshProject = '[Projects]: refresh one',
	refreshProjectSucces = '[Projects]: refresh one: succes',
	refreshProjectFailed = '[Projects]: refresh one: failed',
	// get a range of projects | /projects
	getProjects = '[Projects]: get',
	getProjectsSucces = '[Projects]: get succes',
	getProjectsFailed = '[Projects]: get failed',
	// clear projects from the store
	clearAllProjects = '[Projects]: clear all',
}

export type IProjectsState = IEntityState<IProject>;
