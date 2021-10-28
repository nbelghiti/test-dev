import { pathOr, differenceWith, isNil, isEmpty, equals } from 'ramda';

import { promiseSync } from '@shared/helpers/promise';
import { NotFoundError } from '@shared/helpers/error';
import { IRequest } from '@shared/shared.types';

import { findTeam } from './find-team';
import Member from '../models/member.model';
import Team from '../models/team.model';
import { IMember } from '../teams.types';
import { setProjectPermissions } from '@permissions/v1/helpers/set-project-permissions';

export const update = async (req: IRequest): Promise<Team> => {
	// Find the team
	const team = await findTeam(req.data.params.id);

	// If the team is not found, throw an Not Found error
	if (isNil(team)) {
		throw new NotFoundError();
	}

	// Compare the existing members to the new ones and add/delete/update of needed
	const providedMembers = pathOr([], ['members'], req.data.body);
	const removedMembers: string[] = [];

	await promiseSync(
		team.members.map((member: Member) => () => {
			const newMember = providedMembers.find((nm: Member) => nm.id === member.id);

			if (newMember) {
				return member.update(newMember);
			}

			removedMembers.push(member.get('id'));

			return member.destroy();
		})
	);

	const newMembers = differenceWith(
		(nm: IMember, om: Member) => nm.type === om.type && nm.packageId === om.packageId && nm.auth0Id === om.auth0Id,
		providedMembers,
		team.members
	);

	if (!isEmpty(newMembers)) {
		await Member.bulkCreate(newMembers);
	}

	// Set project permissions
	await setProjectPermissions(team.projectId);

	// Return the new team
	return findTeam(req.data.params.id);
};
