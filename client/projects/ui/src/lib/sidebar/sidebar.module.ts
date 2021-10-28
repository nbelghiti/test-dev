import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';
import { InfoAccordionModule } from '../info-accordion/info-accordion.module';
import { InfoButtonModule } from '../info-button/info-button.module';
import { InfoLinkModule } from '../info-link/info-link.module';
import { LinkModule } from '../link/link.module';
import { RowModule } from '../row/row.module';
import { TeamModule } from '../team/team.module';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		InfoAccordionModule,
		InfoLinkModule,
		InfoButtonModule,
		LinkModule,
		RouterModule,
		RowModule,
		TeamModule,
	],
	declarations: [
		SidebarComponent,
	],
	exports: [
		SidebarComponent,
	]
})
export class SidebarModule {}
