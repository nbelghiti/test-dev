import { aPermissionsMock } from '../services/permissions/permissions.mock';

import { aUserProfile } from './profile/profile.mock';
import { PERMISSIONS_SELECTOR, PROFILE_SELECTOR } from './user.selectors';

describe('core: user: selectors', () => {
	const store = {
		user: {
			profile: aUserProfile,
			permissions: aPermissionsMock,
		},
	};

	describe('user feature selector', () => {
		it('should select the user profile state from the store', () => {
			const userProfileSelector = PROFILE_SELECTOR(store);

			expect(userProfileSelector).toBe(store.user.profile);
		});

		it('should select the user permissions state from the store', () => {
			const userPermissionsSelector = PERMISSIONS_SELECTOR(store);

			expect(userPermissionsSelector).toBe(store.user.permissions);
		});
	});
});
