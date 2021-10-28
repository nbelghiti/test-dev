import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../../button/button.module';
import { HeadingModule } from '../../heading/heading.module';
import { IconModule } from '../../icon/icon.module';
import { LoaderModule } from '../../loader/loader.module';
import { MultiSelectModule } from '../../multi-select/multi-select.module';
import { DialogModule } from '../dialog.module';

import { DatalistsDialogComponent } from './datalists-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		LoaderModule,
		RouterModule,
		ReactiveFormsModule,
		MultiSelectModule,
		TranslateModule,
	],
	declarations: [
		DatalistsDialogComponent,
	],
	entryComponents: [
		DatalistsDialogComponent,
	],
	exports: [
		DatalistsDialogComponent,
	],
})
export class DatalistsDialogModule {}
