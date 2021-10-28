import { MemberRoles } from '~/core/user/services/permissions/permissions.types';

export interface IUser {
	email: string;
	name: string;
	picture: string;
	user_id: string;
}

export interface IUserQuery {
	name?: string;
	email?: string;
}

export interface IMember {
	id?: string;
	name: string;
	email: string;
	picture: string;
	type: MemberRoles;
	packageId: string;
	teamId: string;
	auth0Id: string;
	management: boolean;
}

export interface IMemberConfig {
	type: string;
	limit: number;
	packageId: string;
}

export interface ITeam {
	id: string;
	projectId: string;
	members: IMember[];
	structure: {
		team: {
			members: IMemberConfig[];
		};
	};
}
