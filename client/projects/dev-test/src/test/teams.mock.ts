import { MemberRoles } from '~/core/user/services/permissions/permissions.types';
import { IMember, ITeam } from '~/repositories/teams/services/teams.types';

export const aMemberMock: IMember = {
	'id': 'dca85da3-840b-4970-89af-7aec5f972010',
	'name': 'Denis Valcke',
	'email': 'denis.valcke@studiohyperdrive.be',
	'picture': 'link.to.picture',
	'type': MemberRoles.leadEngineer,
	'packageId': '25ab1019-7fa7-4194-aacd-9887a620f4d6',
	'teamId': 'eabbcf56-ef58-4c68-a83d-11727be1320f',
	'auth0Id': 'auth0|id',
	'management': false,
};

export const aTeamMock: ITeam = {
	'id': 'eabbcf56-ef58-4c68-a83d-11727be1320f',
	'projectId': 'aa987412-9371-4d19-8871-4a831f9bbb01',
	'members': [
		aMemberMock,
		aMemberMock,
		aMemberMock
	],
	structure: {
		team: {
			members: [{
				type: 'projectManager',
				limit: 1,
				packageId: '0000-GENERAL',
			}, {
				type: MemberRoles.leadEngineer,
				limit: 1,
				packageId: '0000-GENERAL',
			}],
		},
	},
};
