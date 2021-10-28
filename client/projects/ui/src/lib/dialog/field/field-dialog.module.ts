import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../../button/button.module';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { HeadingModule } from '../../heading/heading.module';
import { IconModule } from '../../icon/icon.module';
import { InfoItemModule } from '../../info-item/info-item.module';
import { InputModule } from '../../input/input.module';
import { ListModule } from '../../list/list.module';
import { LoaderModule } from '../../loader/loader.module';
import { SelectModule } from '../../select/select.module';
import { DialogModule } from '../dialog.module';

import { FieldDialogComponent } from './field-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		ReactiveFormsModule,
		ButtonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		LoaderModule,
		InputModule,
		CheckboxModule,
		SelectModule,
		InfoItemModule,
		ListModule,
	],
	declarations: [
		FieldDialogComponent,
	],
	entryComponents: [
		FieldDialogComponent,
	],
	exports: [
		FieldDialogComponent,
	],
})
export class FieldDialogModule {}
