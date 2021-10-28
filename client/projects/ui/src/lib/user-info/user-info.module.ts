import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlyoutModule } from '../flyout/flyout.module';
import { HeadingModule } from '../heading/heading.module';
import { IconModule } from '../icon/icon.module';

import { UserInfoComponent } from './user-info.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		FlyoutModule,
		RouterModule,
		HeadingModule,
	],
	declarations: [
		UserInfoComponent,
	],
	exports: [
		UserInfoComponent,
	],
})
export class UserInfoModule {}
