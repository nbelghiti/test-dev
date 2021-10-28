import { ErrorHandler, NgModule } from '@angular/core';

import { CoalescingComponentFactoryResolver } from './coalescing-component-factory-resolver.service';
import { ContextModule } from './context/context.module';
import { GlobalErrorHandler } from './global-error-handler.service';
import { RouterModule } from './router/router.module';
import { UserModule } from './user/user.module';

@NgModule({
	imports: [
		ContextModule,
		RouterModule,
		UserModule,
	],
	providers: [
		CoalescingComponentFactoryResolver,
		{
			provide: ErrorHandler,
			useClass: GlobalErrorHandler,
		},
	],
})
export class CoreModule {
	constructor(coalescingResolver: CoalescingComponentFactoryResolver) {
		coalescingResolver.init();
	}
}
