import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { getProjectPermissions } from '~/core/user/store/permissions/permissions.actions';

import { IError } from '../../repository.types';
import { TeamsService } from '../services/teams.service';
import { ITeam } from '../services/teams.types';

import {
	getTeamFailed,
	getTeamSuccess,
	updateTeamFailed,
	updateTeamSuccess,
} from './teams.actions';
import { TeamsActions } from './teams.types';

@Injectable()
export class TeamsEffects {
	constructor(
		private actions$: Actions,
		private teams: TeamsService,
		private toastr: ToastrService,
		private translate: TranslateService,
	) {}

	public getTeam$ =
		createEffect(() => this.actions$.pipe(
			ofType(TeamsActions.getTeam),
			switchMap(({ id }) => this.teams.getTeam(id).pipe(
				map((team: ITeam) => getTeamSuccess({ team })),
				catchError((error: IError) => of(getTeamFailed({ error })))
			))
		));

	public updateTeam$ =
		createEffect(() => this.actions$.pipe(
			ofType(TeamsActions.updateTeam),
			switchMap(({ id, team }: {id: string, team: ITeam}) => this.teams.updateTeam(id, team).pipe(
				switchMap((response: ITeam) => [
					updateTeamSuccess({ team: response }),
					getProjectPermissions({ id: response.projectId })
				]),
				catchError((error: IError) => of(updateTeamFailed({ error })))
			))
		));

	public updateTeamSuccess$ =
		createEffect(() => this.actions$.pipe(
			ofType(TeamsActions.updateTeamSuccess),
			tap(() => {
				this.translate.get('UPDATE_TEAM__SUCCESS').subscribe((message) => {
					this.toastr.success(message);
				});
			})
		), { dispatch: false });

	public updateTeamFailed$ =
		createEffect(() => this.actions$.pipe(
			ofType(TeamsActions.updateTeamFailed),
			tap(() => {
				this.translate.get('UPDATE_TEAM__ERROR').subscribe((message) => {
					this.toastr.error(message);
				});
			})
		), { dispatch: false });
}
