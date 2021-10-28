import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RowComponent } from './row.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		RowComponent,
	],
	exports: [
		RowComponent,
	],
})
export class RowModule {}
