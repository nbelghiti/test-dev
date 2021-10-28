import { ForbiddenError } from '@shared/helpers/error';
import Member from '@teams/v1/models/member.model';
import { MEMBER_ROLES_ENUM } from '@teams/v1/teams.types';
import Team from '@teams/v1/models/team.model';

import { IRequest, IResponse, INext } from '../shared.types';

export class PermissionMiddleware {
	public static async projectAdminByProjectParam(req: IRequest, res: IResponse, next: INext): Promise<void> {
		const isProjectAdmin = await PermissionMiddleware.validateProjectAdmin(req.data.params.id, req.user.sub);

		if (!isProjectAdmin) {
			return next(new ForbiddenError());
		}

		return next();
	}

	public static async projectAdminByProjectBody(req: IRequest, res: IResponse, next: INext): Promise<void> {
		const isProjectAdmin = await PermissionMiddleware.validateProjectAdmin(req.data.body.projectId, req.user.sub);

		if (!isProjectAdmin) {
			return next(new ForbiddenError());
		}

		return next();
	}

	private static async validateProjectAdmin(projectId: string, userId: string): Promise<boolean> {
		const team = await Team.findOne({
			where: {
				projectId,
			},
		});

		return Member.findOne({
			where: {
				teamId: team.id,
				type: MEMBER_ROLES_ENUM.projectAdmin,
				auth0Id: userId,
			},
		}).then((projectAdmin: Member) => !!projectAdmin);
	}
}
