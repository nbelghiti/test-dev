import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';

import { HeaderComponent } from './header.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		IconModule,
		ButtonModule,
		BreadcrumbModule,
		TranslateModule,
	],
	declarations: [
		HeaderComponent,
	],
	exports: [
		HeaderComponent,
	],
})
export class HeaderModule { }
