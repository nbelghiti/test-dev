import { IPermissionMap } from '../../services/permissions/permissions.types';

export type IPermissionsState = IPermissionMap;

export enum PermissionsActions {
	getProjectPermissions = '[Permissions]: get project permissions',
	getProjectPermissionsSuccess = '[Permissions]: get project permissions success',
	getProjectPermissionsFailed = '[Permissions]: get project permissions failed',
}
