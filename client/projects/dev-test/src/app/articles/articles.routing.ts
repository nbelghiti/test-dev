import { Routes } from '@angular/router';

export const ARTICLE_ROUTES: Routes = [{
	path: '',
	loadChildren: () => import('./articles-overview/articles-overview.module').then(m => m.ArticlesOverviewModule),
}, {
	path: ':ArticleId',
	loadChildren: () => import('./article-detail/article-detail.module').then(m => m.ArticleDetailModule),

}];
