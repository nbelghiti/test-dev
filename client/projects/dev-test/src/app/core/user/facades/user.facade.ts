import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { getProjectPermissions } from '../store/permissions/permissions.actions';
import { IPermissionsState } from '../store/permissions/permissions.types';
import { checkAuthentication, logout } from '../store/profile/profile.actions';
import { IUserProfile, IUserProfileState } from '../store/profile/profile.types';
import { PERMISSIONS_SELECTOR, PROFILE_SELECTOR } from '../store/user.selectors';
import { IUserState } from '../store/user.types';

@Injectable()
export class UserFacade {
	constructor(
		private store: Store<{user: IUserState}>
	) {}

	public user$: Observable<IUserProfile> = this.store.pipe(
		select(PROFILE_SELECTOR),
		filter((state: IUserProfileState) => !!state)
	);

	public permissions$: Observable<IPermissionsState> = this.store.pipe(
		select(PERMISSIONS_SELECTOR),
		filter((state: IPermissionsState) => !!state)
	);

	public checkAuthentication(): void {
		this.store.dispatch(checkAuthentication());
	}

	public logout = () => this.store.dispatch(logout());

	public getProjectPermissions = (id: string) => this.store.dispatch(getProjectPermissions({ id }));

}
