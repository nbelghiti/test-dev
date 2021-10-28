import { MEMBER_ROLES_ENUM } from '@teams/v1/teams.types';

import { IPermissionMap, PermissionAction, PermissionLevel } from './permissions.types';

export const permissions: IPermissionMap = {
	[PermissionLevel.project]: {
		[MEMBER_ROLES_ENUM.projectAdmin]: [
			PermissionAction.createProject,
			PermissionAction.deleteProject,
			PermissionAction.updateProject,
			PermissionAction.viewProject,
			PermissionAction.manageTeam,
			PermissionAction.viewTeam,
		],
		[MEMBER_ROLES_ENUM.projectManager]: [
			PermissionAction.updateProject,
			PermissionAction.viewProject,
			PermissionAction.manageTeam,
			PermissionAction.viewTeam,
		],
		[MEMBER_ROLES_ENUM.leadEngineer]: [
			PermissionAction.viewProject,
			PermissionAction.manageTeam,
			PermissionAction.viewTeam,
		],
		[MEMBER_ROLES_ENUM.engineer]: [
			PermissionAction.viewProject,
			PermissionAction.viewTeam,
		],
	},
	[PermissionLevel.root]: {
		[MEMBER_ROLES_ENUM.siteAdmin]: [
			PermissionAction.createUser,
			PermissionAction.deleteUser,
			PermissionAction.updateUser,
			PermissionAction.viewUser,
		],
	},
};
