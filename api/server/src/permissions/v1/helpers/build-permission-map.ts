import { uniq } from 'ramda';

import { IMember } from '@teams/v1/teams.types';
import { permissions } from '../permissions.conf';
import { IPermissionMap, IUserProjectPermissions, PermissionLevel } from '../permissions.types';

export const buildPermissionMap = (members: IMember[]): IUserProjectPermissions => {
	return members.reduce((acc: IUserProjectPermissions, member: IMember) => {
		return {
			[PermissionLevel.project]: uniq([
				...acc[PermissionLevel.project],
				...permissions[PermissionLevel.project][member.type],
			]),
			[PermissionLevel.root]: {
				...acc[PermissionLevel.root],
				...permissions[PermissionLevel.root][member.type],
			},
		};
	}, {
		[PermissionLevel.project]: [],
		[PermissionLevel.root]: [],
	});
};
