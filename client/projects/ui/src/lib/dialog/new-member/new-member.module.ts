import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../../button/button.module';
import { HeadingModule } from '../../heading/heading.module';
import { IconModule } from '../../icon/icon.module';
import { LoaderModule } from '../../loader/loader.module';
import { SelectModule } from '../../select/select.module';
import { DialogModule } from '../dialog.module';

import { NewMemberDialogComponent } from './new-member-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		SelectModule,
		LoaderModule,
		RouterModule,
		TranslateModule,
		ReactiveFormsModule,
	],
	declarations: [
		NewMemberDialogComponent,
	],
	entryComponents: [
		NewMemberDialogComponent,
	],
	exports: [
		NewMemberDialogComponent,
	],
})
export class NewMemberModule {}
