import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';

import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
	],
	declarations: [
		ButtonComponent,
		IconButtonComponent,
	],
	exports: [
		ButtonComponent,
		IconButtonComponent,
	],
})
export class ButtonModule {}
