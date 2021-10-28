import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectsSharedModule } from '../projects-shared/projects-shared.module';

import { Components } from './components';
import { Pages } from './pages';
import { PROJECT_DETAIL_ROUTRING } from './project-detail.routing';

@NgModule({
	imports: [
		ProjectsSharedModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forChild(PROJECT_DETAIL_ROUTRING),
	],
	declarations: [
		Components,
		Pages,
	],
})
export class ProjectDetailModule {}
