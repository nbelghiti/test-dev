import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../../button/button.module';
import { HeadingModule } from '../../heading/heading.module';
import { IconModule } from '../../icon/icon.module';
import { InfoItemModule } from '../../info-item/info-item.module';
import { ListModule } from '../../list/list.module';
import { LoaderModule } from '../../loader/loader.module';
import { DialogModule } from '../dialog.module';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmComponent } from './confirm.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		LoaderModule,
		InfoItemModule,
		ListModule,
	],
	declarations: [
		ConfirmComponent,
		ConfirmDialogComponent,
	],
	entryComponents: [
		ConfirmDialogComponent,
	],
	exports: [
		ConfirmComponent,
		ConfirmDialogComponent,
	],
})
export class ConfirmModule {}
