import { ITeam } from '@teams/v1/teams.types';

export interface IGeneralProject {
	ACCType: string;
	ACCFormat: string;
	VaultNumber: string;
}

export interface IClient {
	name: string;
}

export interface ILocation {
	name: string;
}

export interface IProject {
	id?: string;
	name: string;
	PROJECT_ID: string;
	location: ILocation;
	status: string;
	team: ITeam;
	general: IGeneralProject;
	client: IClient;
	deleted?: boolean;
}

export enum ProjectStatus {
	bidding = 'bidding',
	engineering = 'engineering',
	construction = 'construction',
	pac = 'pac',
	fac = 'fac',
	archived = 'archived',
}
