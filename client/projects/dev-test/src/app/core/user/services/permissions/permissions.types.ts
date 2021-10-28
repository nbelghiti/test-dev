export enum PermissionLevels {
	project = 'project',
	package = 'package',
}

export enum PermissionActions {
	createBranch = 'createBranch',
	editBranch = 'editBranch',
	createMR = 'createMR',
	mergeMR = 'mergeMR',
	createRevision = 'createRevision',
	importData = 'importData',
	manageTeam = 'manageTeam',
	updateProject = 'updateProject',
}

export enum MemberRoles {
	leadEngineer = 'leadEngineer',
	engineer = 'engineer',
	projectManager = 'projectManager',
	projectAssistant = 'projectAssistant',
	projectAdmin = 'projectAdmin',
}

export interface IPermissionMap {
	[PermissionLevels.project]: PermissionActions[];
	[PermissionLevels.package]: {
		[packageId: string]: PermissionActions[],
	};
}
