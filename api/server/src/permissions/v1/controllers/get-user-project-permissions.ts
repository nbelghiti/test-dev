import { pathOr } from 'ramda';

import { INext, IRequest, IResponse } from '@shared/shared.types';

import ProjectPermission from '../models/project-permission.model';
import { IProjectPermission, PermissionAction } from '../permissions.types';

export const getUserProjectPermissions = async (req: IRequest, res: IResponse, next: INext): Promise<PermissionAction[]> => {
	const projectPermissions = await ProjectPermission.findOne({
		where: {
			userId: req.user.sub,
			projectId: req.data.params.projectId,
		},
	});

	return pathOr([], ['permissionMap', 'project'], (projectPermissions.toJSON() as IProjectPermission));
};
