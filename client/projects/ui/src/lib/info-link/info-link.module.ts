import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeadingModule } from '../heading/heading.module';
import { IconModule } from '../icon/icon.module';

import { InfoLinkComponent } from './info-link.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		IconModule,
		HeadingModule,
	],
	declarations: [
		InfoLinkComponent,
	],
	exports: [
		InfoLinkComponent,
	],
})
export class InfoLinkModule {}
