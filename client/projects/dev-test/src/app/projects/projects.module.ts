import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoalescingComponentFactoryResolver } from '~/core/coalescing-component-factory-resolver.service';

import { PROJECTS_ROUTES } from './projects.routing';

@NgModule({
	imports: [
		RouterModule.forChild(PROJECTS_ROUTES)
	],
})
export class ProjectsModule {
	constructor(
		coalescingResolver: CoalescingComponentFactoryResolver,
		localResolver: ComponentFactoryResolver,
	) {
		coalescingResolver.registerResolver(localResolver);
	}
}
