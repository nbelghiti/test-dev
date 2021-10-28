import { Action, createReducer, on } from '@ngrx/store';

import { getProjectPermissions, getProjectPermissionsFailed, getProjectPermissionsSuccess } from './permissions.actions';
import { PERMISSIONS_INITIAL_STATE } from './permissions.const';
import { IPermissionsState } from './permissions.types';

const reducer = createReducer(
	PERMISSIONS_INITIAL_STATE,
	on(
		getProjectPermissions,
		(state) => ({ ...state })),
	on(
		getProjectPermissionsSuccess,
		(state, { permissions }) => ({ ...state, ...permissions })),
	on(
		getProjectPermissionsFailed,
		(state, { error }) => ({ ...state, error })),
);

export function permissionsReducer (state: IPermissionsState, action: Action) {
	return reducer(state, action);
}
