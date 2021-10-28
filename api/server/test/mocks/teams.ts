import { MEMBER_ROLES, MEMBER_ROLES_ENUM } from '@teams/v1/teams.types';
import { IRequest } from '../../src/shared/shared.types';

// tslint:disable-next-line no-any
export const generateMockRequest = (id: string, body: any = teamMock[0]): IRequest => ({
	data: {
		params: {
			id,
		},
		body,
	},
} as IRequest);

export const teamMembersMock = [{
	id: '45120400-26ca-4b99-ba85-29847f3f598c',
	name: 'John Connor',
	email: 'john.connor@shd.be',
	picture: 'http://link.tomypictu.re',
	type: MEMBER_ROLES[0],
	auth0Id: 'an-auth0-id',
	teamId: '82578c26-a881-42cf-9bb8-2d140b1a132c',
	packageId: '74890fd5-bffc-4abe-8994-375cbf5a63ad',
}];

export const teamMock = [{
	id: '82578c26-a881-42cf-9bb8-2d140b1a132c',
	projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
	members: teamMembersMock,
	structure: {
			team: {
				members: [{
					type: MEMBER_ROLES_ENUM.projectManager,
					limit: 1,
				}],
			},
	},
}];

export const teamMockEdit = [{
	id: '82578c26-a881-42cf-9bb8-2d140b1a132c',
	projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
	members: teamMembersMock,
	structure: {
			team: {
				members: [{
					type: MEMBER_ROLES_ENUM.projectManager,
					limit: 1,
				}],
			},
	},
}];

export const teamMockAdd = [{
	id: '82578c26-a881-42cf-9bb8-2d140b1a132c',
	projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
	members: [{
		id: 'ac47e1c5-e4f0-4239-b1d3-c3aea412784a',
		name: 'Sarah Connor',
		email: 'sara.connor@shd.be',
		picture: 'http://link.tomypictu.re',
		type: MEMBER_ROLES[0],
		auth0Id: 'another-auth0-id',
		teamId: '82578c26-a881-42cf-9bb8-2d140b1a132c',
		packageId: '74890fd5-bffc-4abe-8994-375cbf5a63ad',
	}],
	structure: {
			team: {
				members: [{
					type: MEMBER_ROLES_ENUM.projectManager,
					limit: 1,
				}],
			},
	},
}];

export const teamMockRemove = [{
	id: '82578c26-a881-42cf-9bb8-2d140b1a132c',
	projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
	members: [] as any, // tslint:disable-line no-any
	structure: {
			team: {
				members: [] as any, // tslint:disable-line no-any
			},
	},
}];
