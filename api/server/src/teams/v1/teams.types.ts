import { enumKeys } from '@shared/helpers/enum-keys';

export enum MEMBER_ROLES_ENUM {
	leadEngineer = 'leadEngineer',
	engineer = 'engineer',
	projectManager = 'projectManager',
	projectAssistant = 'projectAssistant',
	projectAdmin = 'projectAdmin',
	siteAdmin = 'siteAdmin',
}

export const MEMBER_ROLES = enumKeys(MEMBER_ROLES_ENUM);

export interface ITeamMember {
	type: MEMBER_ROLES_ENUM;
	packageId: string;
	limit: number;
}

export interface ITeamMembers {
	members: ITeamMember[];
}

export interface IMember {
	id?: string;
	name: string;
	email: string;
	picture: string;
	type: string;
	auth0Id: string;
	packageId: string;
}

export interface ITeam {
	id?: string;
	projectId: string;
	members: IMember[];
}
