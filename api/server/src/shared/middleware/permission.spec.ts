import supertest from 'supertest';
import { mockReq, mockRes } from 'sinon-express-mock';

import { App } from '@app';
import { dropData, insertData } from '@test/helpers/db';
import Project from '@projects/v1/models/project.model';
import { projectsMockData } from '@mocks/projects';
import ProjectGeneral from '@projects/v1/models/project-general.model';
import Client from '@projects/v1/models/client.model';
import Team from '@teams/v1/models/team.model';
import Member from '@teams/v1/models/member.model';
import Location from '@projects/v1/models/location.model';
import { IRequest, IResponse } from '../shared.types';
import { PermissionMiddleware } from './permission';
import { ForbiddenError } from '@shared/helpers/error';
import ProjectPermission from '@permissions/v1/models/project-permission.model';
import { projectPermissionsMockData } from '@mocks/permissions';
import { teamMock } from '@mocks/teams';

const api = supertest(new App().app);

describe('[UNIT - SHARED] PermissionMiddleware', () => {
	beforeAll(async (done: jest.DoneCallback) => {
		await dropData([
			Project,
			ProjectGeneral,
			Client,
			Location,
			Team,
			Member,
		]);
		await insertData(
			projectsMockData,
			Project,
			{
				include: [
					ProjectGeneral,
					Client,
					Location,
				],
			}
		);
		await insertData(
			projectPermissionsMockData,
			ProjectPermission,
			{}
		);
		await insertData(
			teamMock,
			Team,
			{}
		);
		done();
	});

	describe('projectAdminByProjectParam' , () => {
		it('Should progress if the user is a project admin', async (done: jest.DoneCallback) => {
			const req: IRequest = mockReq({
				data: {
					params: {
						id: projectsMockData[0].id,
					},
				} as any, // tslint:disable-line no-any
				user: {
					sub: 'an-auth0-id',
				},
			});
			const res: IResponse = mockRes();

			PermissionMiddleware.projectAdminByProjectParam(req, res, () => {
				expect(req.data).toBeDefined();
				expect(req.data).toBeObject();
				done();
			});
		});

		it('Should throw an error if the user is not a projec admin', async (done: jest.DoneCallback) => {
			const permission = await ProjectPermission.findOne();
			permission.setDataValue('permissionMap', {
				project: [],
			});
			const permissionSpy = jest.spyOn(ProjectPermission, 'findOne').mockImplementation(() => Promise.resolve(permission) as any); // tslint:disable-line no-any

			const req: IRequest = mockReq({
				data: {
					params: {
						id: projectsMockData[0].id,
					},
				} as any, // tslint:disable-line no-any
				user: {
					sub: 'doesnotexist',
				},
			});
			const res: IResponse = mockRes();

			PermissionMiddleware.projectAdminByProjectParam(req, res, (err: string) => {
				expect(err).toBeInstanceOf(ForbiddenError);
				permissionSpy.mockRestore();
				done();
			});
		});
	});
});
