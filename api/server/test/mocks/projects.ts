import { IProject } from '@projects/v1/projects.types';
import { MEMBER_ROLES } from '@teams/v1/teams.types';

export const projectsMockData: IProject[] = [
	{
		id: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
		name: 'Test project',
		PROJECT_ID: 'test-project',
		client: {
			name: 'Test client',
		},
		location: {
			name: 'France',
		},
		status: 'engineering',
		general: {
			ACCType: 'A-frame',
			ACCFormat: '20 - 40 modules',
			VaultNumber: '123',
		},
		team: {
			projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
			members: [{
				id: 'b73a48c2-d1e0-45ae-9eb2-1fe684bf3064',
				name: 'John Connor',
				email: 'john.connor@shd.be',
				picture: 'http://link.tomypictu.re',
				type: MEMBER_ROLES[0],
				auth0Id: 'an-auth0-id',
				packageId: '74890fd5-bffc-4abe-8994-375cbf5a63ad',
			}],
		},
	},
	{
		id: '9d961c90-1b45-4ec4-a2e5-8a8994d4581b',
		name: 'Test project 2',
		PROJECT_ID: 'test-project-2',
		client: {
			name: 'Test client 2',
		},
		location: {
			name: 'France',
		},
		status: 'engineering',
		general: {
			ACCType: 'A-frame',
			ACCFormat: '20 - 40 modules',
			VaultNumber: '123',
		},
		team: {
			projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
			members: [{
				name: 'John Connor',
				email: 'john.connor@shd.be',
				picture: 'http://link.tomypictu.re',
				type: MEMBER_ROLES[0],
				auth0Id: 'an-auth0-id',
				packageId: 'b0bde5f0-3c1e-4c3d-832b-cafbf92bd2e3',
			}],
		},
	},
	{
		id: '38ce3d3e-fec6-4fb8-b3f2-4833139bd80a',
		name: 'Test project 3',
		PROJECT_ID: 'test-project-3',
		client: {
			name: 'Test client 3',
		},
		location: {
			name: 'France',
		},
		status: 'engineering',
		general: {
			ACCType: 'A-frame',
			ACCFormat: '20 - 40 modules',
			VaultNumber: '123',
		},
		team: {
			projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
			members: [{
				name: 'John Connor',
				email: 'john.connor@shd.be',
				picture: 'http://link.tomypictu.re',
				type: MEMBER_ROLES[0],
				auth0Id: 'an-auth0-id',
				packageId: '33f82943-3585-4c32-8b0c-39b3ed9ceb31',
			}],
		},
	},
];

export const singleProjectMockData = {
	id: '0f961c90-1b45-4ec4-a2e5-8a8994d4581c',
	name: 'Mock Project',
	PROJECT_ID: 'mock-project',
	client: {
		name: 'Test client',
	},
	location: {
		name: 'France',
	},
	status: 'engineering',
	general: {
		ACCType: 'A-frame',
		ACCFormat: '20 - 40 modules',
		VaultNumber: '123',
	},
	team: {
		projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
		members: [{
			name: 'John Connor',
			email: 'john.connor@shd.be',
			picture: 'http://link.tomypictu.re',
			type: MEMBER_ROLES[0],
			auth0Id: 'an-auth0-id',
			packageId: 'ec0e9682-79d4-45e3-bd21-8e9bf9160955',
		}],
	},
};
