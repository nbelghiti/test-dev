import { aTeamMock } from 'adb-test/teams.mock';

import { aErrorMock } from '../../repositories.mock';

import {
	getTeam,
	getTeamFailed,
	getTeamSuccess,
	updateTeam,
	updateTeamFailed,
	updateTeamSuccess,
} from './teams.actions';
import { TeamsActions } from './teams.types';

describe('repository: revisions: actions', () => {
	describe('getTeam', () => {
		it('should have a getTeam action', () => {
			const id = 'test-id';
			const action = getTeam({ id });

			expect(action.type).toBe(TeamsActions.getTeam);
			expect(action.id).toBe(id);
		});

		it('should have a getTeamSuccess action', () => {
			const action = getTeamSuccess({ team: aTeamMock });

			expect(action.type).toBe(TeamsActions.getTeamSuccess);
			expect(action.team).toEqual(aTeamMock);
		});

		it('should have a getTeamFailed action', () => {
			const action = getTeamFailed({ error: aErrorMock });

			expect(action.type).toBe(TeamsActions.getTeamFailed);
			expect(action.error).toEqual(aErrorMock);
		});
	});
});

describe('repository: revisions: actions', () => {
	describe('createTeam', () => {
		it('should have a createTeam action', () => {
			const id = 'test-id';
			const action = updateTeam({ id, team: aTeamMock });

			expect(action.type).toBe(TeamsActions.updateTeam);
			expect(action.id).toBe(id);
			expect(action.team).toBe(aTeamMock);
		});

		it('should have a updateTeamSuccess action', () => {
			const action = updateTeamSuccess({ team: aTeamMock });

			expect(action.type).toBe(TeamsActions.updateTeamSuccess);
			expect(action.team).toEqual(aTeamMock);
		});

		it('should have a updateTeamFailed action', () => {
			const action = updateTeamFailed({ error: aErrorMock });

			expect(action.type).toBe(TeamsActions.updateTeamFailed);
			expect(action.error).toEqual(aErrorMock);
		});
	});
});
