import { TestBed, getTestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { BehaviorSubject, of, throwError } from 'rxjs';

import { aErrorMock } from '~/repositories/repositories.mock';

import { aPermissionsMock } from '../../services/permissions/permissions.mock';
import { PermissionsService } from '../../services/permissions/permissions.service';

import { getProjectPermissions } from './permissions.actions';
import { PermissionsEffects } from './permissions.effects';
import { PermissionsActions } from './permissions.types';

describe('core: user: permissions: effects', () => {
	let injector: TestBed;
	let actions: BehaviorSubject<Action>;
	let effects: PermissionsEffects;
	let service: PermissionsService;
	let mockService: Partial<PermissionsService>;

	beforeEach(() => {
		mockService  = {
			getProjectPermissions: jest.fn().mockReturnValue(of(aPermissionsMock)),
		};

		TestBed.configureTestingModule({
			providers: [
				PermissionsEffects,
				{
					provide: PermissionsService,
					useValue: mockService,
				},
				provideMockActions(() => actions)
			],
		});

		injector = getTestBed();
		effects = injector.get(PermissionsEffects);
		service = injector.get(PermissionsService);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('getProjectPermissions$', () => {
		it('should store the fetched project permissions', async(done: jest.DoneCallback) => {
			const id = '98092090-be01-4079-b4a8-f60707b89f19';
			const spyGetProjectPermissions = spyOn(service, 'getProjectPermissions').and.returnValue(of(aPermissionsMock));

			actions = new BehaviorSubject(getProjectPermissions({ id }));

			const sub = effects.getProjectPermissions$.subscribe((data: Action) => {
				expect(data.type).toBe(PermissionsActions.getProjectPermissionsSuccess);
				expect((data as any).permissions).toEqual(aPermissionsMock);
				expect(spyGetProjectPermissions).toHaveBeenCalledWith(id);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});

		it('should store the error when the request fails', async(done: jest.DoneCallback) => {
			const id = '33f0af1f-749c-4c71-80bf-d02c4ec84283';
			const spyGetProjectPermissions = spyOn(service, 'getProjectPermissions').and.returnValue(throwError(aErrorMock));

			actions = new BehaviorSubject(getProjectPermissions({ id }));

			const sub = effects.getProjectPermissions$.subscribe((data: Action) => {
				expect(data.type).toBe(PermissionsActions.getProjectPermissionsFailed);
				expect((data as any).error.status).toEqual(404);
				expect(spyGetProjectPermissions).toHaveBeenCalledWith(id);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});
});
