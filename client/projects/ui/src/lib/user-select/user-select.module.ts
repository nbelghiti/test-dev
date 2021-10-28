import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../button/button.module';
import { EmptyStateModule } from '../empty-state/empty-state.module';
import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';
import { UserModule } from '../user/user.module';

import { UserSelectComponent } from './user-select.component';

@NgModule({
	imports: [
		CommonModule,
		UserModule,
		IconModule,
		ButtonModule,
		EmptyStateModule,
		FlyoutModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		UserSelectComponent,
	],
	exports: [
		UserSelectComponent,
	],
})
export class UserSelectModule {}
