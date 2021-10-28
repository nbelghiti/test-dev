import { groupBy, prop } from 'ramda';
import { Op } from 'sequelize';

import Team from '@teams/v1/models/team.model';
import Member from '@teams/v1/models/member.model';
import { IMember } from '@teams/v1/teams.types';

import ProjectPermission from '../models/project-permission.model';

import { buildPermissionMap } from './build-permission-map';

export const setProjectPermissions = async (projectId: string): Promise<void> => {
	const team = await Team.findOne({
		where: {
			projectId,
		},
		include: [Member],
	});

	const groupMembers = groupBy(prop('auth0Id'), team.members);

	for (const member in groupMembers) {
		await ProjectPermission.findOne({
			where: {
				projectId,
				userId: member,
			},
		})
			.then((permission: ProjectPermission) => {
				const members = groupMembers[member].map(m => m.toJSON() as IMember);

				if (permission) {
					return permission.update({
						permissionMap: buildPermissionMap(members),
					});
				}

				return ProjectPermission.create({
					projectId,
					userId: member,
					permissionMap: buildPermissionMap(members),
				});
			});
	}

	// Remove permission from previous authorized members
	await ProjectPermission.destroy({
		where: {
			projectId,
			userId: {
				[Op.notIn]: Object.keys(groupMembers),
			},
		},
	});
};
