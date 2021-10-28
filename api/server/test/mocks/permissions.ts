import { IProjectPermission, PermissionAction } from '@permissions/v1/permissions.types';

export const projectPermissionsMockData: IProjectPermission[] = [{
	userId: 'b73a48c2-d1e0-45ae-9eb2-1fe684bf3064',
	projectId: '9d961c90-1b45-4ec4-a2e5-8a8994d4581f',
	permissionMap: {
		project: [PermissionAction.createProject],
		root: [PermissionAction.createUser],
	},
}];
