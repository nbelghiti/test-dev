import { Auth0 } from '@shared/helpers/auth0';
import { IAuth0User } from '@shared/helpers/auth0.types';
import { UserSyncError } from '@shared/helpers/error';
import { INext, IRequest, IResponse } from '@shared/shared.types';

export const getMembers = async (req: IRequest, res: IResponse, next: INext): Promise<IAuth0User[]> => {
	try {
		return await Auth0.getUsers(req.data.query);
	} catch (err) {
		throw new UserSyncError(err);
	}
};
