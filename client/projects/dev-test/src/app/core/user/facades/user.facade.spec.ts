import { TestBed, getTestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { aPermissionsMock } from '../services/permissions/permissions.mock';
import { PermissionsService } from '../services/permissions/permissions.service';
import { getProjectPermissions } from '../store/permissions/permissions.actions';
import { checkAuthentication } from '../store/profile/profile.actions';
import { aUserProfile } from '../store/profile/profile.mock';
import { IUserState } from '../store/user.types';

import { UserFacade } from './user.facade';

describe('core: user: facade', () => {
	let injector: TestBed;
	let facade: UserFacade;
	let service: PermissionsService;
	let store: Store<IUserState>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserFacade,
				provideMockStore<{ user: IUserState }>({
					initialState: {
						user: {
							profile: aUserProfile,
							permissions: aPermissionsMock,
						},
					},
				})
			]
		});

		injector = getTestBed();
		facade = TestBed.get(UserFacade);
		service = injector.get(UserFacade);
		store = TestBed.get(Store);
	});

	describe('$user', () => {
		it('should hold a user$ observable', (done) => {
			const sub = facade.user$.subscribe((result) => {
				expect(result).toEqual(aUserProfile);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});

	describe('$permissions', () => {
		it('should hold a permissions$ observable', (done) => {
			const sub = facade.permissions$.subscribe((result) => {
				expect(result).toEqual(aPermissionsMock);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});

	describe('checkAuthentication', () => {
		it('should call the checkAuthentication action on the store', () => {
			const dispatchSpy = spyOn(store, 'dispatch');
			facade.checkAuthentication();

			expect(dispatchSpy).toHaveBeenCalledWith(checkAuthentication());
		});
	});

	describe('actions', () => {
		it('should get project permissions', () => {
			const id = 'test-id';
			const spy = jest.spyOn(store, 'dispatch');
			const action = getProjectPermissions({ id });

			service.getProjectPermissions(id);

			expect(spy).toHaveBeenCalledWith(action);
			expect(action.id).toBe(id);
		});
	});
});
