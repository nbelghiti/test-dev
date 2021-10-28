import { createAction, props } from '@ngrx/store';

import { IError } from '~/repositories/repository.types';

import { IPermissionMap } from '../../services/permissions/permissions.types';

import { PermissionsActions } from './permissions.types';

// get project permissions
export const getProjectPermissions = createAction(
	PermissionsActions.getProjectPermissions,
	props<{ id: string }>()
);
export const getProjectPermissionsSuccess = createAction(
	PermissionsActions.getProjectPermissionsSuccess,
	props<{ permissions: IPermissionMap }>()
);
export const getProjectPermissionsFailed = createAction(
	PermissionsActions.getProjectPermissionsFailed,
	props<{ error: IError }>()
);
