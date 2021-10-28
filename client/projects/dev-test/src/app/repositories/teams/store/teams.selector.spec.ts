import { aTeamMock } from 'adb-test/teams.mock';

import { IRepositoryState } from '../../repositories.store';

import {
	TEAMS_SELECTOR,
	selectTeamEntities,
	selectTeamIds,
} from './teams.selector';

describe('repository: teams: selector', () => {
	const teamId: string = '12704dd6-5dbd-4a85-8f5e-c01a63397155';
	const state: IRepositoryState = {
		teams: {
			ids: [teamId],
			entities: {
				[teamId]: {
					...aTeamMock,
				}
			},
			isLoading: false,
			error: null,
			meta: null
		},
	} as unknown as IRepositoryState;

	describe('custom selectors', () => {
		describe('TEAMS_SELECTOR', () => {
			const teamsState = TEAMS_SELECTOR({ repository: state });

			expect(teamsState).toEqual(state.teams);
		});
	});

	describe('adapter selectors', () => {
		const teams = state.teams;

		it('should expose the selectIds selectors created by the adapter', () => {
			const ids = selectTeamIds(teams);

			expect(ids[0]).toBe(teams.ids[0]);
		});

		it('should expose the selectTeamEntities selectors created by the adapter', () => {
			const entities = selectTeamEntities(teams);

			expect(entities[teams.ids[0]]).toEqual(teams.entities[teams.ids[0]]);
		});
	});
});
