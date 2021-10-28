import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';

import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		IconModule,
	],
	declarations: [
		TabsComponent,
		TabComponent,
	],
	exports: [
		TabsComponent,
		TabComponent,
	],
})
export class TabsModule {}
