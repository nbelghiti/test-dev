import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeadingModule } from '../heading/heading.module';

import { InfoPanelComponent } from './info-panel.component';

@NgModule({
	imports: [
		CommonModule,
		HeadingModule,
	],
	declarations: [
		InfoPanelComponent,
	],
	exports: [
		InfoPanelComponent,
	],
})
export class InfoPanelModule {}
