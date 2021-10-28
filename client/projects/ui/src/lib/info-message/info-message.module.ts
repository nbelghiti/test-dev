import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';
import { LinkModule } from '../link/link.module';

import { InfoMessageComponent } from './info-message.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		IconModule,
		LinkModule,
	],
	declarations: [
		InfoMessageComponent,
	],
	exports: [
		InfoMessageComponent,
	],
})
export class InfoMessageModule {}
