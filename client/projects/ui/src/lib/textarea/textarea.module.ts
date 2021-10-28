import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IconModule } from '../icon/icon.module';

import { TextareaComponent } from './textarea.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		FormsModule
	],
	declarations: [
		TextareaComponent,
	],
	exports: [
		TextareaComponent,
	],
})
export class TextareaModule {}
