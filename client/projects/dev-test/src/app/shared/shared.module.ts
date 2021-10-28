import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { UIModule } from 'adb-ui';

import { Guards } from './guards/index';
import { Pipes } from './pipes/index';
import { Services } from './services/index';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		UIModule,
		TranslateModule,
	],
	declarations: [
		Pipes,
	],
	providers: [
		Pipes,
		Services,
		Guards,
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		UIModule,
		Pipes,
		TranslateModule,
	],
})
export class SharedModule { }
