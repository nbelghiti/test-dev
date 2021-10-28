import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticlesSharedModule } from '../articles-shared/articles-shared.module';

import { ARTICLES_OVERVIEW_ROUTES } from './articles-overview.routing';
import { Components } from './components';
import { Pages } from './pages';

@NgModule({
	imports: [
		ArticlesSharedModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forChild(ARTICLES_OVERVIEW_ROUTES),
	],
	declarations: [
		Components,
		Pages,
	],
})
export class ArticlesOverviewModule {}
