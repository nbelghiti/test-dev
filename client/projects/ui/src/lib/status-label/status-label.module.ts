import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/icon.module';

import { StatusLabelComponent } from './status-label.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
	],
	declarations: [
		StatusLabelComponent,
	],
	exports: [
		StatusLabelComponent,
	],
})
export class StatusLabelModule {}
