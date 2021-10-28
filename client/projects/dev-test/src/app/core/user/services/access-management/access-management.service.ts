import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UserFacade } from '~/core/user/facades/user.facade';

import { IPermissionMap, PermissionActions } from '../permissions/permissions.types';

@Injectable()
export class AccessManagementService {
	constructor(
		private userFacade: UserFacade,
	) {}

	public checkPermission(action: PermissionActions, packageId: string = null): Observable<boolean> {
		return this.userFacade.permissions$
			.pipe(
				filter((permissions: IPermissionMap) => !!permissions.project),
				map((permissions: IPermissionMap) => {
					if (packageId) {
						return permissions.package[packageId]
							? permissions.package[packageId].includes(action) || permissions.project.includes(action)
							: permissions.project.includes(action);
					}

					return permissions.project.includes(action);
				})
			);
	}
}
