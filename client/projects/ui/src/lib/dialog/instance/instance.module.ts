import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../../button/button.module';
import { HeadingModule } from '../../heading/heading.module';
import { IconModule } from '../../icon/icon.module';
import { InputModule } from '../../input/input.module';
import { LoaderModule } from '../../loader/loader.module';
import { TextareaModule } from '../../textarea/textarea.module';
import { DialogModule } from '../dialog.module';

import { InstanceDialogComponent } from './instance-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		InputModule,
		LoaderModule,
		InputModule,
		RouterModule,
		TranslateModule,
		TextareaModule,
		ReactiveFormsModule,
	],
	declarations: [
		InstanceDialogComponent,
	],
	entryComponents: [
		InstanceDialogComponent,
	],
	exports: [
		InstanceDialogComponent,
	],
})
export class InstanceDialogModule {}
