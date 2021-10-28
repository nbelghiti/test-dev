import { NgModule } from '@angular/core';

import { UIModule } from 'adb-ui';

import { SharedModule } from '~/shared/shared.module';

import { ErrorPage } from './pages/error.page';

@NgModule({
	declarations: [
		ErrorPage,
	],
	imports: [
		SharedModule,
		UIModule,
	],
})
export class ErrorModule { }
