import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/icon.module';

import { InfoItemComponent } from './info-item.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
	],
	declarations: [
		InfoItemComponent,
	],
	exports: [
		InfoItemComponent,
	],
})
export class InfoItemModule {}
