import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';

import { AltButtonComponent } from './alt-button.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
	],
	declarations: [
		AltButtonComponent,
	],
	exports: [
		AltButtonComponent,
	],
})
export class AltButtonModule {}
