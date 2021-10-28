import { getUserProfileSuccess } from './profile.actions';
import { PROFILE_INITIAL_STATE } from './profile.const';
import { aUserProfile } from './profile.mock';
import { userProfileReducer } from './profile.reducer';

describe('core: user: profile: reducer', () => {
	describe('getUserProfileSuccess', () => {
		it('should add the user to the store', () => {
			const state = userProfileReducer(PROFILE_INITIAL_STATE, getUserProfileSuccess({ user: aUserProfile }));

			expect(state).toEqual(aUserProfile);
		});
	});

	describe('unknown action', () => {
		it('should return the initial state for an unknown action', () => {
			const state = userProfileReducer(PROFILE_INITIAL_STATE, { type: 'unkown action' });

			expect(state).toBe(PROFILE_INITIAL_STATE);
		});
	});
});


