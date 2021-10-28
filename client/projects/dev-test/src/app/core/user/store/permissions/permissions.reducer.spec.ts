import { aPermissionsMock } from '../../services/permissions/permissions.mock';

import { getProjectPermissionsSuccess } from './permissions.actions';
import { PERMISSIONS_INITIAL_STATE } from './permissions.const';
import { permissionsReducer } from './permissions.reducer';

describe('core: user: permissions: reducer', () => {
	describe('getProjectPermissionsSuccess', () => {
		it('should add the permissioms to the store', () => {
			const state = permissionsReducer(PERMISSIONS_INITIAL_STATE, getProjectPermissionsSuccess({ permissions: aPermissionsMock }));

			expect(state).toEqual(aPermissionsMock);
		});
	});

	describe('unknown action', () => {
		it('should return the initial state for an unknown action', () => {
			const state = permissionsReducer(PERMISSIONS_INITIAL_STATE, { type: 'unkown action' });

			expect(state).toBe(PERMISSIONS_INITIAL_STATE);
		});
	});
});


