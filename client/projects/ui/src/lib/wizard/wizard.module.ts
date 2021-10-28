import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { ButtonModule } from '../button/button.module';
import { StepsModule } from '../steps/steps.module';

import { WizardLayoutComponent } from './wizard-layout/wizard-layout.component';

@NgModule({
	imports: [
		CommonModule,
		StepsModule,
		BreadcrumbModule,
		ButtonModule,
		RouterModule
	],
	declarations: [
		WizardLayoutComponent,
	],
	exports: [
		WizardLayoutComponent,
	]
})
export class WizardModule {}
