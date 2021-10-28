import { Database } from '@core/helpers/db';
import Project from '@projects/v1/models/project.model';
import { teamMock } from '@mocks/teams';
import Team from '@teams/v1/models/team.model';
import Member from '@teams/v1/models/member.model';
import { dropData, insertData } from '@test/helpers/db';
import { projectsMockData } from '@mocks/projects';

import { findTeam } from './find-team';

describe('[UNIT - Teams] Helpers - Get team by id', () => {
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

	it('should get a team by id', (done: jest.DoneCallback) => {
		findTeam(teamMock[0].id)
			.then((team: Team) => {
				expect(team.members[0].name).toBe(teamMock[0].members[0].name);
				expect(team.members[0].email).toBe(teamMock[0].members[0].email);
				expect(team.members[0].type).toBe(teamMock[0].members[0].type);

				done(0);
			});
	});
});
