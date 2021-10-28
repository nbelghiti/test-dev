import { Database } from '@core/helpers/db';
import { dropData, insertData } from '@test/helpers/db';
import Project from '@projects/v1/models/project.model';
import Team from '@teams/v1/models/team.model';
import { projectsMockData } from '@mocks/projects';
import { teamMock } from '@mocks/teams';
import { projectPermissionsMockData } from '@mocks/permissions';
import Member from '@teams/v1/models/member.model';

import ProjectPermission from '../models/project-permission.model';
import { PermissionAction, IProjectPermission } from '../permissions.types';

import { setProjectPermissions } from './set-project-permissions';

describe('[UNIT - PERMISSIONS] Helpers - Set project permissions', () => {
	beforeAll(async (done: jest.DoneCallback) => {
		await Database.sync();
		await dropData([ProjectPermission, Project, Team, Member]);
		await insertData(
			projectsMockData,
			Project
		);
		await insertData(
			teamMock,
			Team,
			{
				include: [Member],
			}
		);
		done();
	});

	describe('Set project permissions', () => {
		it('Should set project permissions based on team and member roles', async (done: jest.DoneCallback) => {
			await setProjectPermissions(projectPermissionsMockData[0].projectId);

			const permission = await ProjectPermission.findOne({
				where: {
					userId: teamMock[0].members[0].auth0Id,
				},
			});

			expect(permission).toBeDefined();
			expect((permission.toJSON() as IProjectPermission).permissionMap).toBeDefined();
			expect((permission.toJSON() as IProjectPermission).permissionMap.project)
				.toEqual(expect.arrayContaining([PermissionAction.viewProject, PermissionAction.manageTeam, PermissionAction.viewTeam]));
			done();
		});

		it('Should update project permissions on existing member', async (done: jest.DoneCallback) => {
			await dropData([ProjectPermission]);
			await ProjectPermission.create({
				projectId: projectPermissionsMockData[0].projectId,
				userId: teamMock[0].members[0].auth0Id,
				permissionMap: {},
			});

			await setProjectPermissions(projectPermissionsMockData[0].projectId);

			const permission = await ProjectPermission.findOne({
				where: {
					userId: teamMock[0].members[0].auth0Id,
				},
			});

			expect(permission).toBeDefined();
			expect((permission.toJSON() as IProjectPermission).permissionMap).toBeDefined();
			expect((permission.toJSON() as IProjectPermission).permissionMap.project)
				.toEqual(expect.arrayContaining([PermissionAction.viewProject, PermissionAction.manageTeam, PermissionAction.viewTeam]));
			done();
		});
	});
});
