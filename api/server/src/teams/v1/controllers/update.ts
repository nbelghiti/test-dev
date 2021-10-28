import { NotFoundError } from '@shared/helpers/error';
import { INext, IRequest, IResponse } from '@shared/shared.types';

import { update } from '../helpers/update';
import { ITeam } from '../teams.types';

export const updateTeam = async (req: IRequest, res: IResponse, next: INext): Promise<ITeam> => {
	const team = await update(req);

	if (!team) {
		throw new NotFoundError();
	}

	return team.toJSON() as ITeam;
};
