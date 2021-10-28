import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IconModule } from '../icon/icon.module';

import { TitleInputComponent } from './title-input.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		FormsModule,
	],
	declarations: [
		TitleInputComponent,
	],
	exports: [
		TitleInputComponent,
	],
})
export class TitleInputModule {}
