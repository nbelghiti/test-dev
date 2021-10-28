import { Model } from 'sequelize-typescript';

import { Database } from '@core/helpers/db';
import Team from '@teams/v1/models/team.model';
import Member from '@teams/v1/models/member.model';
import Project from '@projects/v1/models/project.model';
import { dropData, insertData } from '@test/helpers/db';
import { teamMock, teamMockEdit, teamMockAdd, generateMockRequest } from '@mocks/teams';
import { projectsMockData } from '@mocks/projects';

import { update } from './update';

describe.skip('[UNIT - Teams] Helpers - Update team by id', () => {
	beforeAll(async (done: jest.DoneCallback) => {
		await Database.sync();
		await dropData([Team, Member, Project]);
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

	it('should update existing members', (done: jest.DoneCallback) => {
		update(generateMockRequest(teamMock[0].id, teamMockEdit[0]))
			.then((team: Model<Team> | void) => {
				expect((team as Team).members.length).toBe(1);

				expect((team as Team).members[0].type).toEqual(teamMockEdit[0].members[0].type);

				done();
			});
	});

	it('should remove and add members', (done: jest.DoneCallback) => {
		update(generateMockRequest(teamMock[0].id, teamMockAdd[0]))
			.then((team: Model<Team> | void) => {
				expect((team as Team).members.length).toBe(1);

				expect((team as Team).members[0].name).toBe(teamMockAdd[0].members[0].name);
				expect((team as Team).members[0].email).toBe(teamMockAdd[0].members[0].email);
				expect((team as Team).members[0].type).toBe(teamMockAdd[0].members[0].type);

				done();
			});
	});
});
