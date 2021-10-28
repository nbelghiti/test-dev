import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IconModule } from '../icon/icon.module';

import { SelectComponent } from './select.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		FormsModule
	],
	declarations: [
		SelectComponent,
	],
	exports: [
		SelectComponent,
	],
})
export class SelectModule {}
