import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { AuthService } from 'adb-auth';

import { authenticationSuccess, checkAuthentication, getUserProfileSuccess } from './profile.actions';
import { PROFILE_INITIAL_STATE } from './profile.const';
import { UserProfileEffects } from './profile.effects';
import { aUserProfile } from './profile.mock';

describe('core: user: profile: effects', () => {
	let actions$: Observable<Action>;
	let effects: UserProfileEffects;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserProfileEffects,
				provideMockActions(() => actions$),
				provideMockStore({ initialState: PROFILE_INITIAL_STATE }),
				{
					provide: AuthService,
					useValue: {
						getUser: () => of(aUserProfile),
						isAuthenticated$: of(true),
					}
				}
			]
		});

		effects = TestBed.get(UserProfileEffects);
	});

	describe('init$', () => {
		it('should add the authenticationSuccess action to the actions$ stream when the user is authenticated', () => {
			testScheduler.run(({ hot, expectObservable }) => {

				// push action to the actions$ stream
				actions$ = hot('-a', { a: checkAuthentication() });

				expectObservable(effects.init$).toBe('-b', {
					b: authenticationSuccess()
				});
			});
		});
	});

	describe('authenticationSuccess$', () => {
		it('should add the getUserProfileSuccess action to the actions$ stream', () => {

			testScheduler.run(({ hot, expectObservable }) => {
				// push action to the actions$ stream
				actions$ = hot('-a', { a: authenticationSuccess() });

				expectObservable(effects.authenticationSuccess$).toBe('-b', {
					b: getUserProfileSuccess({ user: aUserProfile })
				});
			});
		});
	});
});
