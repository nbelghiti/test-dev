import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';

import { SettingsIndicatorComponent } from './indicator/settings-indicator.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
	],
	declarations: [
		SettingsIndicatorComponent,
	],
	exports: [
		SettingsIndicatorComponent
	],
})
export class SettingsModule {}
