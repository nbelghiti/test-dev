import { Routes } from '@angular/router';

import { AuthGuard, CallbackComponent, LoginComponent } from 'adb-auth';

import { ErrorPage } from '~/error/pages/error.page';

export const CORE_ROUTES: Routes = [{
	path: 'callback',
	component: CallbackComponent,
}, {
	path: 'login',
	redirectTo: 'projects',
	pathMatch: 'full',
}, {
	path: '',
	redirectTo: 'projects',
	pathMatch: 'full',
}, {
	path: 'articles',
	loadChildren: () => import('~/articles/articles.module').then((mod) => mod.ArticlesModule),
}, {
	path: 'projects',
	loadChildren: () => import('~/projects/projects.module').then((mod) => mod.ProjectsModule),
}, {
	path: 'not-found',
	component: ErrorPage
}, {
	path: '**',
	redirectTo: 'not-found',
}];
