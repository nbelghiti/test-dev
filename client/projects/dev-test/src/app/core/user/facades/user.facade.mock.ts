import { BehaviorSubject } from 'rxjs';

import { PermissionLevels } from '../services/permissions/permissions.types';
import { aUserProfile } from '../store/profile/profile.mock';

export const mockUserFacade = {
	user$: new BehaviorSubject(aUserProfile),
	permissions$: new BehaviorSubject({
		[PermissionLevels.project]: [],
		[PermissionLevels.package]: {
			['package-id']: [],
		}
	}),
	getProjectPermissions: jest.fn().mockImplementation(() => console.log('getting project permissions')),
};
