import { Action, combineReducers } from '@ngrx/store';

import { permissionsReducer } from './permissions/permissions.reducer';
import { userProfileReducer } from './profile/profile.reducer';
import { USER_INITIAL_STATE } from './user.const';
import { IUserState } from './user.types';

export const userReducers = combineReducers({
	profile: userProfileReducer,
	permissions: permissionsReducer,
}, USER_INITIAL_STATE);

export function userReducer(state: IUserState, action: Action) {
	return userReducers(state, action);
}
