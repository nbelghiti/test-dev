import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { IError } from '~/repositories/repository.types';

import { PermissionsService } from '../../services/permissions/permissions.service';
import { IPermissionMap } from '../../services/permissions/permissions.types';

import {
	getProjectPermissionsFailed,
	getProjectPermissionsSuccess,
} from './permissions.actions';
import { PermissionsActions } from './permissions.types';

@Injectable()
export class PermissionsEffects {
	constructor(
		private actions$: Actions,
		private permissions: PermissionsService,
	) {}

	public getProjectPermissions$ =
	createEffect(() => this.actions$.pipe(
		ofType(PermissionsActions.getProjectPermissions),
		switchMap(({ id }) => this.permissions.getProjectPermissions(id).pipe(
			map((permissions: IPermissionMap) => getProjectPermissionsSuccess({ permissions })),
			catchError((error: IError) => of(getProjectPermissionsFailed({ error })))
		))
	));
}

