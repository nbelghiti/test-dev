export enum PermissionLevel {
	root = 'root',
	project = 'project',
}

export enum PermissionAction {
	createProject = 'createProject',
	deleteProject = 'deleteProject',
	updateProject = 'updateProject',
	viewProject = 'viewProject',
	manageTeam = 'manageTeam',
	viewTeam = 'viewTeam',
	createUser = 'createUser',
	deleteUser = 'deleteUser',
	updateUser = 'updateUser',
	viewUser = 'viewUser',
}

export type IPermissionMap = Record<keyof typeof PermissionLevel, Record<string, PermissionAction[]>>;

export type IUserProjectPermissions = Record<keyof typeof PermissionLevel, PermissionAction[]>;

export interface IProjectPermission {
	userId: string;
	projectId: string;
	permissionMap: IUserProjectPermissions;
}
