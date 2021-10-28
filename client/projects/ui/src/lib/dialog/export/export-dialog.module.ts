import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../../button/button.module';
import { HeadingModule } from '../../heading/heading.module';
import { IconModule } from '../../icon/icon.module';
import { LoaderModule } from '../../loader/loader.module';
import { SelectModule } from '../../select/select.module';
import { DialogModule } from '../dialog.module';

import { ExportDialogComponent } from './export-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		ButtonModule,
		LoaderModule,
		ReactiveFormsModule,
		SelectModule,
		TranslateModule
	],
	declarations: [
		ExportDialogComponent,
	],
	entryComponents: [
		ExportDialogComponent,
	],
	exports: [
		ExportDialogComponent,
	],
})
export class ExportDialogModule {}
