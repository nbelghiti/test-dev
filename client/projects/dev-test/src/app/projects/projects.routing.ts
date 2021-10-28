import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [{
	path: '',
	loadChildren: () => import('./projects-overview/projects-overview.module').then(m => m.ProjectsOverviewModule),
}, {
	path: ':projectId',
	loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule),
}];
