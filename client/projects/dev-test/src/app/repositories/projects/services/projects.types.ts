import { IPagination } from '../../repository.types';
import { ITeam } from '../../teams/services/teams.types';

export enum ProjectStatus {
	engineering = 'engineering',
	construction = 'construction'
}

export interface IProjectGeneralInfo {
	ACCType: string;
	ACCFormat: string;
	VaultNumber?: string;
	projectViewImagePath?: string;
	thumbnailImagePath?: string;
}

export interface IProjectClient {
	name: string;
}

export interface IProjectLocation {
	name: string;
}

export interface IProject {
	id: string;
	name: string;
	PROJECT_ID: string;
	status: ProjectStatus;
	createdAt: string;
	updatedAt: string;
	general: IProjectGeneralInfo;
	client: IProjectClient;
	location: IProjectLocation;
	team?: ITeam;
}

export interface IProjectsFilter {
	name?: string;
	description?: string;
	accType?: string;
	accFormat?: string;
	status?: string;
	lastUpdated?: string;
	location?: string;
	sort?: string;
}

export type IProjects = IPagination<IProject>;
