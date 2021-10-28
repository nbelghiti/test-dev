import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/icon.module';
import { UserModule } from '../user/user.module';

import { UserTagComponent } from './user-tag.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		UserModule,
	],
	declarations: [
		UserTagComponent,
	],
	exports: [
		UserTagComponent,
	],
})
export class UserTagModule {}
