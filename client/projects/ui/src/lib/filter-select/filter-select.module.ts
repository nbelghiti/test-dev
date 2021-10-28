import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';
import { ListModule } from '../list/list.module';
import { UserModule } from '../user/user.module';

import { FilterSelectComponent } from './filter-select.component';

@NgModule({
	imports: [
		CommonModule,
		UserModule,
		IconModule,
		FlyoutModule,
		ReactiveFormsModule,
		ListModule,
	],
	declarations: [
		FilterSelectComponent,
	],
	exports: [
		FilterSelectComponent,
	],
})
export class FilterSelectModule {}
