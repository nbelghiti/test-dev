import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { IError } from '../../repository.types';
import { ProjectsService } from '../services/projects.service';
import { IProject, IProjects } from '../services/projects.types';

import {
	getProjectFailed,
	getProjectSucces,
	getProjectsFailed,
	getProjectsSucces,
	refreshProjectFailed,
	refreshProjectSucces,
} from './projects.actions';
import { ProjectsActions } from './projects.types';

@Injectable()
export class ProjectsEffects {
	constructor(
		private actions$: Actions,
		private projects: ProjectsService,
		private router: Router,
		private toastr: ToastrService,
		private translate: TranslateService,
	) { }

	public getProject$ =
		createEffect(() => this.actions$.pipe(
			ofType(ProjectsActions.getProject),
			switchMap(({ id }) => this.projects.getProject(id).pipe(
				map((project: IProject) => getProjectSucces({ project })),
				catchError((error: IError) => of(getProjectFailed({ error })))
			))
		));

	public getProjectFailed$ =
		createEffect(() => this.actions$.pipe(
			ofType(ProjectsActions.getProjectFailed),
			tap(() => this.router.navigate(['/not-found']))
		), { dispatch: false });

	public refreshProject$ =
		createEffect(() => this.actions$.pipe(
			ofType(ProjectsActions.refreshProject),
			switchMap(({ id }) => this.projects.getProject(id).pipe(
				map((project: IProject) => refreshProjectSucces({ project })),
				catchError((error: IError) => of(refreshProjectFailed({ error })))
			))
		));

	public getProjects$ =
		createEffect(() => this.actions$.pipe(
			ofType(ProjectsActions.getProjects),
			switchMap(({ filters }) => this.projects.getProjects(filters).pipe(
				map((projects: IProjects) => getProjectsSucces({ projects })),
				catchError((error: IError) => of(getProjectsFailed({ error })))
			))
		));
}

