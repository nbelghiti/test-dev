import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeadingModule } from '../heading/heading.module';
import { IconModule } from '../icon/icon.module';

import { InfoAccordionComponent } from './info-accordion.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		HeadingModule,
	],
	declarations: [
		InfoAccordionComponent,
	],
	exports: [
		InfoAccordionComponent,
	],
})
export class InfoAccordionModule {}
