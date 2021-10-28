import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoalescingComponentFactoryResolver } from '~/core/coalescing-component-factory-resolver.service';

import { ARTICLE_ROUTES } from './articles.routing';

@NgModule({
	imports: [
		RouterModule.forChild(ARTICLE_ROUTES)
	],
})
export class ArticlesModule {
	constructor(
		coalescingResolver: CoalescingComponentFactoryResolver,
		localResolver: ComponentFactoryResolver,
	) {
		coalescingResolver.registerResolver(localResolver);
	}
}
