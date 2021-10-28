import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UIModule } from 'adb-ui';

import { UserModule } from '~/core/user/user.module';
import { SharedModule } from '~/shared/shared.module';

import { Facades } from './facades';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		TranslateModule,
		UIModule,
		UserModule,
	],
	providers: [
		Facades,
	],
	exports: [
		CommonModule,
		SharedModule,
		TranslateModule,
		UIModule,
		UserModule,
	],
})
export class ProjectsSharedModule {}
