import { Action, createReducer, on } from '@ngrx/store';

import { getUserProfileSuccess, logoutSuccess } from './profile.actions';
import { PROFILE_INITIAL_STATE } from './profile.const';
import { IUserProfileState } from './profile.types';

const reducer = createReducer(
	PROFILE_INITIAL_STATE,
	on(getUserProfileSuccess, (state, action) => ({ ...state, ...action.user })),
	on(logoutSuccess, () => null),
);

export function userProfileReducer (state: IUserProfileState, action: Action) {
	return reducer(state, action);
}
