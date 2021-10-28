import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmptyStateComponent } from './empty-state.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		EmptyStateComponent,
	],
	exports: [
		EmptyStateComponent,
	],
})
export class EmptyStateModule {}
