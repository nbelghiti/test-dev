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
import { initialState } from './teams.adapter';
import { teamsReducer } from './teams.reducer';

describe('repository: teams: reducer', () => {
	describe('getTeam', () => {
		it('should handle the getTeam action', () => {
			const id = 'test-id';
			const state = teamsReducer(initialState, getTeam({ id }));

			expect(state.isLoading).toBe(true);
		});

		it('should handle the getTeamsSuccess action', () => {
			const state = teamsReducer(initialState, getTeamSuccess({ team: aTeamMock }));

			expect(state.isLoading).toBe(false);
			expect(state.entities[aTeamMock.id]).toEqual(aTeamMock);
		});

		it('should handle the getTeamsFailed action', () => {
			const state = teamsReducer(initialState, getTeamFailed({ error: aErrorMock }));

			expect(state.isLoading).toBe(false);
			expect(state.error).toEqual(aErrorMock);
		});
	});

	describe('updateTeam', () => {
		it('should handle the updateTeam action', () => {
			const id = 'test-id';
			const state = teamsReducer(initialState, updateTeam({ id, team: aTeamMock }));

			expect(state.isLoading).toBe(true);
		});

		it('should handle the updateTeamsSuccess action', () => {
			const state = teamsReducer(initialState, updateTeamSuccess({ team: aTeamMock }));

			expect(state.isLoading).toBe(false);
			expect(state.entities[aTeamMock.id]).toEqual(aTeamMock);
		});

		it('should handle the updateTeamsFailed action', () => {
			const state = teamsReducer(initialState, updateTeamFailed({ error: aErrorMock }));

			expect(state.isLoading).toBe(false);
			expect(state.error).toEqual(aErrorMock);
		});
	});
});
