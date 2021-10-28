import { NotFoundError } from '@shared/helpers/error';
import { INext, IRequest, IResponse } from '@shared/shared.types';

import { findTeam } from '../helpers/find-team';
import { ITeam } from '../teams.types';

export const getTeamById = async (req: IRequest, res: IResponse, next: INext): Promise<ITeam> => {
	const team = await findTeam(req.data.params.id);

	if (!team) {
		throw new NotFoundError();
	}

	return team.toJSON() as ITeam;
};
