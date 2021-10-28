import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeadingModule } from '../heading/heading.module';
import { IconModule } from '../icon/icon.module';

import { InfoButtonComponent } from './info-button.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		HeadingModule,
	],
	declarations: [
		InfoButtonComponent,
	],
	exports: [
		InfoButtonComponent,
	],
})
export class InfoButtonModule {}
