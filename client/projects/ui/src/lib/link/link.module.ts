import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';

import { LinkComponent } from './link.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
	],
	declarations: [
		LinkComponent,
	],
	exports: [
		LinkComponent,
	],
})
export class LinkModule {}
