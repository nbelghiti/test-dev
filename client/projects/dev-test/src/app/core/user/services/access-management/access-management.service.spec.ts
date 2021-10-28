import { TestBed, getTestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { UserFacade } from '../../facades/user.facade';
import { aUserProfile } from '../../store/profile/profile.mock';
import { IUserState } from '../../store/user.types';
import { aPermissionsMock } from '../permissions/permissions.mock';
import { PermissionActions } from '../permissions/permissions.types';

import { AccessManagementService } from './access-management.service';

describe('AccessManagementService', () => {
	let injector: TestBed;
	let facade: UserFacade;
	let service: AccessManagementService;
	let store: Store<IUserState>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AccessManagementService,
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
		service = injector.get(AccessManagementService);
		store = TestBed.get(Store);
	});

	describe('check project permission', () => {
		it('should return true when authorized on project level', (done) => {
			spyOn(facade, 'permissions$').and.returnValue(of(aPermissionsMock));

			const sub = service.checkPermission(PermissionActions.createBranch).subscribe((authorized: boolean) => {
				expect(authorized).toEqual(true);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});

	describe('check package permission', () => {
		it('should return true when authorized on package level', (done) => {
			spyOn(facade, 'permissions$').and.returnValue(of(aPermissionsMock));

			const sub = service.checkPermission(PermissionActions.createRevision, '440d138e-33e6-4454-bc9e-9a13e5a9d341')
				.subscribe((authorized: boolean) => {
					expect(authorized).toEqual(true);

					setTimeout(() => sub.unsubscribe());

					done();
				});
		});
	});
});
