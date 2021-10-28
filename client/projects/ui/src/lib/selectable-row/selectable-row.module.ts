import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';

import { SelectableRowComponent } from './selectable-row.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		IconModule,
	],
	declarations: [
		SelectableRowComponent,
	],
	exports: [
		SelectableRowComponent,
	],
})
export class SelectableRowModule {}
