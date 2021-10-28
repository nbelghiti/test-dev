import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxModule } from '../checkbox/checkbox.module';
import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';

import { MultiSelectComponent } from './multi-select.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		FormsModule,
		FlyoutModule,
		ReactiveFormsModule,
		CheckboxModule,
	],
	declarations: [
		MultiSelectComponent,
	],
	exports: [
		MultiSelectComponent,
	],
})
export class MultiSelectModule {}
