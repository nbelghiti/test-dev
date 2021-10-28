import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KeyValueComponent } from './key-value.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		KeyValueComponent,
	],
	exports: [
		KeyValueComponent,
	],
})
export class KeyValueModule {}
