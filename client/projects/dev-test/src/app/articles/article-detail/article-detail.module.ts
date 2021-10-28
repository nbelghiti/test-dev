import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticlesSharedModule } from '../articles-shared/articles-shared.module';

import { ARTICLE_DETAIL_ROUTRING } from './article-detail.routing';
import { Components } from './components';
import { Pages } from './pages';

@NgModule({
	imports: [
		ArticlesSharedModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule.forChild(ARTICLE_DETAIL_ROUTRING),
	],
	declarations: [
		Components,
		Pages,
	],
})
export class ArticleDetailModule {}
