import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';

import { FilterMenuItemComponent } from './filter-menu-item/filter-menu-item.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { FilterToggleComponent } from './filter-toggle/filter-toggle.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		IconModule,
		FlyoutModule,
	],
	declarations: [
		FilterComponent,
		FilterMenuComponent,
		FilterMenuItemComponent,
		FilterToggleComponent,
	],
	exports: [
		FilterComponent,
		FilterMenuComponent,
		FilterMenuItemComponent,
		FilterToggleComponent,
	],
})
export class FilterModule {}
