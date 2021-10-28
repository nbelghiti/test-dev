import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IPermissionsState } from './permissions/permissions.types';
import { IUserProfile } from './profile/profile.types';
import { IUserState } from './user.types';

export const USER_SELECTOR = createFeatureSelector<IUserState>('user');

export const PROFILE_SELECTOR = createSelector(
	USER_SELECTOR,
	(state: IUserState): IUserProfile => state.profile
);

export const PERMISSIONS_SELECTOR = createSelector(
	USER_SELECTOR,
	(state: IUserState): IPermissionsState => state.permissions
);
