import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

import { AuthService } from 'adb-auth';

import {
	authenticationSuccess,
	getUserProfileSuccess,
	logoutSuccess,
} from './profile.actions';
import { UserProfileActions } from './profile.types';


@Injectable()
export class UserProfileEffects {
	constructor(
		private actions$: Actions,
		private auth: AuthService
	) {}

	public init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserProfileActions.checkAuthentication),
			switchMap(() => this.auth.isAuthenticated$
				.pipe(
					filter((isAuthenticated: boolean) => !!isAuthenticated),
				)
			),
			map(() => authenticationSuccess())
		)
	);

	public authenticationSuccess$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserProfileActions.authenticationSuccess),
			switchMap(() => this.auth.getUser().pipe(
				take(1),
				map((user) => getUserProfileSuccess({ user }))
			))
		)
	);

	public logout$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserProfileActions.logout),
			tap(() => {
				this.auth.logout();
			}),
			map(() => logoutSuccess()),
		)
	);
}
