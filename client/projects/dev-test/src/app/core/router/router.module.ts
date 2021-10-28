import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReduxRouterModule } from '@studiohyperdrive/ng-redux-router';

import { ErrorModule } from '~/error/error.module';

import { CORE_ROUTES } from './core.routes';
import { Facades } from './facades';
import { routerReducer } from './store/router.reducer';

@NgModule({
	imports: [
		NgRouterModule.forChild(CORE_ROUTES),
		StoreModule.forFeature('router', routerReducer),
		ReduxRouterModule,
		ErrorModule,
	],
	exports: [
		NgRouterModule
	],
	providers: [
		Facades,
	],
})
export class RouterModule {}
