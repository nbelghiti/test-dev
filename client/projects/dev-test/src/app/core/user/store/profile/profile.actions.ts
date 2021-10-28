import { createAction, props } from '@ngrx/store';

import { IUserProfile, UserProfileActions } from './profile.types';

export const getUserProfileSuccess = createAction(
	UserProfileActions.getUserProfileSuccess,
	props<{ user: IUserProfile }>()
);

export const authenticationSuccess = createAction(
	UserProfileActions.authenticationSuccess,
);

export const checkAuthentication = createAction(
	UserProfileActions.checkAuthentication,
);

export const logout = createAction(
	UserProfileActions.logout,
);

export const logoutSuccess = createAction(
	UserProfileActions.logoutSuccess,
);
