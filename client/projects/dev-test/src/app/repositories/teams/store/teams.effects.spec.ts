import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, throwError } from 'rxjs';

import { aTeamMock } from 'adb-test/teams.mock';

import { aErrorMock } from '../../repositories.mock';
import { TeamsService } from '../services/teams.service';

import { getTeam, updateTeam } from './teams.actions';
import { TeamsEffects } from './teams.effects';
import { TeamsActions } from './teams.types';

describe('repository: projects: effects', () => {
	let injector: TestBed;
	let actions: BehaviorSubject<Action>;
	let effects: TeamsEffects;
	let service: TeamsService;
	let mockToastr: Partial<ToastrService>;
	let mockTranslate: Partial<TranslateService>;

	beforeEach(() => {
		mockToastr = {
			error: jest.fn(),
			success: jest.fn(),
		};

		mockTranslate = {
			get: jest.fn().mockReturnValue(of('translation')),
		};

		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				TeamsEffects,
				{
					provide: TeamsService,
					useValue: {
						getTeam: () => of(aTeamMock),
						updateTeam: () => of(aTeamMock)
					}
				},
				provideMockActions(() => actions),
				{
					provide: ToastrService,
					useValue: mockToastr,
				},
				{
					provide: TranslateService,
					useValue: mockTranslate,
				},
			],
		});

		injector = getTestBed();
		effects = injector.get(TeamsEffects);
		service = injector.get(TeamsService);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('getTeam$', () => {
		it('should store the fetched project', async(done: jest.DoneCallback) => {
			const id = aTeamMock.id;
			const spyGetTeam = spyOn(service, 'getTeam').and.returnValue(of(aTeamMock));

			actions = new BehaviorSubject(getTeam({ id }));

			const sub = effects.getTeam$.subscribe((data: Action) => {
				expect(data.type).toBe(TeamsActions.getTeamSuccess);
				expect((data as any).team).toEqual(aTeamMock);
				expect(spyGetTeam).toHaveBeenCalledWith(id);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});

		it('should store the error when the request fails', async(done: jest.DoneCallback) => {
			const id = aTeamMock.id;
			const spyGetTeam = spyOn(service, 'getTeam').and.returnValue(throwError(aErrorMock));

			actions = new BehaviorSubject(getTeam({ id }));

			const sub = effects.getTeam$.subscribe((data: Action) => {
				expect(data.type).toBe(TeamsActions.getTeamFailed);
				expect((data as any).error.status).toEqual(404);
				expect(spyGetTeam).toHaveBeenCalledWith(id);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});

	describe('updateTeam$', () => {
		it('should store the fetched project', async(done: jest.DoneCallback) => {
			const id = aTeamMock.id;
			const spyUpdateTeam = spyOn(service, 'updateTeam').and.returnValue(of(aTeamMock));

			actions = new BehaviorSubject(updateTeam({ id, team: aTeamMock }));

			const sub = effects.updateTeam$.subscribe((data: Action) => {
				expect(data.type).toBe(TeamsActions.updateTeamSuccess);
				expect((data as any).team).toEqual(aTeamMock);
				expect(spyUpdateTeam).toHaveBeenCalledWith(id, aTeamMock);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});

		it('should store the error when the request fails', async(done: jest.DoneCallback) => {
			const id = aTeamMock.id;
			const spyUpdateTeam = spyOn(service, 'updateTeam').and.returnValue(throwError(aErrorMock));

			actions = new BehaviorSubject(updateTeam({ id, team: aTeamMock }));

			const sub = effects.updateTeam$.subscribe((data: Action) => {
				expect(data.type).toBe(TeamsActions.updateTeamFailed);
				expect((data as any).error.status).toEqual(404);
				expect(spyUpdateTeam).toHaveBeenCalledWith(id, aTeamMock);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});
});
