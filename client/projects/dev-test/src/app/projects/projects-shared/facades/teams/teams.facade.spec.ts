import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { IRepositoryState } from '~/repositories/repositories.store';
import { TeamsService } from '~/repositories/teams/services/teams.service';
import { getTeam, updateTeam } from '~/repositories/teams/store/teams.actions';

import { aTeamMock } from '../../../../../test/teams.mock';
import { IProjectsState } from '../../../projects.types';

import { TeamsFacade } from './teams.facade';

describe('projects: facades: teams', () => {
	let injector: TestBed;
	let service: TeamsFacade;
	let store: MockStore<IProjectsState>;
	let mockTeamsService: Partial<TeamsService>;

	beforeEach(() => {
		mockTeamsService = {
			getMembers: jest.fn().mockReturnValue(of(true)),
			getTeam: jest.fn().mockReturnValue(of(true)),
			updateTeam: jest.fn().mockReturnValue(of(true)),
		};

		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				{
					provide: TeamsService,
					useValue: mockTeamsService,
				},
				TeamsFacade,
				provideMockStore(),
			],
		});

		injector = getTestBed();
		service = injector.get(TeamsFacade);
		store = injector.get(Store);
	});

	describe('actions', () => {
		it('should get a team', () => {
			const id = 'id-123';
			const spy = jest.spyOn(store, 'dispatch');
			const action = getTeam({ id });

			service.getTeam(id);

			expect(spy).toHaveBeenCalledWith(action);
		});

		it('should update the team', () => {
			const spy = jest.spyOn(store, 'dispatch');
			const action = updateTeam({
				id: aTeamMock.id,
				team: aTeamMock
			});

			service.updateTeam(aTeamMock.id, aTeamMock);

			expect(spy).toHaveBeenCalledWith(action);
		});
	});

	describe('selectors', () => {
		const uuid = '12704dd6-5dbd-4a85-8f5e-c01a63397155';
		const state: IProjectsState = {
			router: null,
			repository: {
				teams: {
					ids: [uuid],
					entities: {
						[uuid]: {
							id: uuid,
							something: 'else',
						} as any
					},
					isLoading: false,
					error: null,
					meta: null
				},
			} as unknown as IRepositoryState,
		};

		it('should select a team by Id', () => {
			const team = service['selectTeamById'](state, { id: uuid });

			expect(team).toEqual(state.repository.teams.entities[uuid]);
		});

		it('should select the loading state', () => {
			const isLoading = service['selectTeamsLoading'](state);

			expect(isLoading).toBe(false);
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
