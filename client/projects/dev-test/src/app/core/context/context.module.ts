import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ContextFacade } from './facades/context.facade';
import { contextReducer } from './store/context.reducer';

@NgModule({
	imports: [
		StoreModule.forFeature('context', contextReducer)
	],
	providers: [
		ContextFacade,
	],
})
export class ContextModule {}
