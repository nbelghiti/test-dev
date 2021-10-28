import { teamMock } from '@mocks/teams';
import { PermissionAction } from '../permissions.types';
import { buildPermissionMap } from './build-permission-map';

describe('[UNIT - PERMISSIONS] Helpers - Build permission map', () => {
	describe('Build permissions', () => {
		it('Should configure the member permissions', (done: jest.DoneCallback) => {
			const permissions = buildPermissionMap(teamMock[0].members);
			expect(permissions.project).toEqual(expect.arrayContaining([
				PermissionAction.viewProject,
				PermissionAction.manageTeam,
				PermissionAction.viewTeam,
			]));
			done();
		});
	});
});
