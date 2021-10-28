import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../button/button.module';
import { FilterModule } from '../filter/filter.module';
import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';

import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		ButtonModule,
		RouterModule,
		FlyoutModule,
		FilterModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		BreadcrumbItemComponent,
		BreadcrumbComponent,
	],
	exports: [
		BreadcrumbItemComponent,
		BreadcrumbComponent,
	],
})
export class BreadcrumbModule {}
