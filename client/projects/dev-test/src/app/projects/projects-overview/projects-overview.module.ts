import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectsSharedModule } from '../projects-shared/projects-shared.module';

import { Components } from './components';
import { Pages } from './pages';
import { PROJECTS_OVERVIEW_ROUTES } from './projects-overview.routing';

@NgModule({
	imports: [
		ProjectsSharedModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forChild(PROJECTS_OVERVIEW_ROUTES),
	],
	declarations: [
		Components,
		Pages,
	],
})
export class ProjectsOverviewModule {}
