import {
	authenticationSuccess,
	checkAuthentication,
	getUserProfileSuccess,
} from './profile.actions';
import { aUserProfile } from './profile.mock';
import { UserProfileActions } from './profile.types';

describe('core: user: profile: actions', () => {
	it('should have a authenticationSuccess action', () => {
		const action = authenticationSuccess();

		expect(action.type).toBe(UserProfileActions.authenticationSuccess);
	});

	it('should have a checkAuthentication action', () => {
		const action = checkAuthentication();

		expect(action.type).toBe(UserProfileActions.checkAuthentication);
	});

	it('should have a getUserProfileSuccess action', () => {
		const action = getUserProfileSuccess({ user: aUserProfile });

		expect(action.type).toBe(UserProfileActions.getUserProfileSuccess);
		expect(action.user).toBe(aUserProfile);
	});
});
