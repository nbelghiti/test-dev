import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconModule } from '../icon/icon.module';

import { InputComponent } from './input.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		InputComponent,
	],
	exports: [
		InputComponent,
	],
})
export class InputModule {}
