import { IPermissionMap, PermissionActions } from './permissions.types';

export const aPermissionsMock: IPermissionMap = {
	project: [PermissionActions.createBranch],
	package: {
		'440d138e-33e6-4454-bc9e-9a13e5a9d341': [PermissionActions.createRevision]
	}
};
