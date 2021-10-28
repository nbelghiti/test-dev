import { aErrorMock } from '~/repositories/repositories.mock';

import { aPermissionsMock } from '../../services/permissions/permissions.mock';

import { getProjectPermissions, getProjectPermissionsFailed, getProjectPermissionsSuccess } from './permissions.actions';
import { PermissionsActions } from './permissions.types';

describe('core: user: permissions: actions', () => {
	describe('getProjectPermissions', () => {
		it('should have a getProjectPermissions action', () => {
			const id = 'test-id';
			const action = getProjectPermissions({ id });

			expect(action.type).toBe(PermissionsActions.getProjectPermissions);
			expect(action.id).toBe(id);
		});

		it('should have a getProjectPermissionsSucces action', () => {
			const permissions = aPermissionsMock;
			const action = getProjectPermissionsSuccess({ permissions });

			expect(action.type).toBe(PermissionsActions.getProjectPermissionsSuccess);
			expect(action.permissions).toEqual(permissions);
		});

		it('should have a getProjectPermissionsFailed action', () => {
			const action = getProjectPermissionsFailed({ error: aErrorMock });

			expect(action.type).toBe(PermissionsActions.getProjectPermissionsFailed);
			expect(action.error).toEqual(aErrorMock);
		});
	});
});
