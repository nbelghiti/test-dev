import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPermissionMap } from './permissions.types';

@Injectable()
export class PermissionsService {
	private baseUrl: string = 'api/v1/permissions';

	constructor(
		private http: HttpClient,
	) {}

	public getProjectPermissions(id: string): Observable<IPermissionMap> {
		return this.http.get<IPermissionMap>(`${this.baseUrl}/project-permissions/${id}`);
	}
}
