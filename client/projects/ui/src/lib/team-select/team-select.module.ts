import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EmptyStateModule } from '../empty-state/empty-state.module';
import { HeadingModule } from '../heading/heading.module';
import { LinkModule } from '../link/link.module';
import { UserModule } from '../user/user.module';

import { TeamSelectComponent } from './team-select.component';

@NgModule({
	imports: [
		CommonModule,
		UserModule,
		HeadingModule,
		LinkModule,
		EmptyStateModule,
		RouterModule,
		TranslateModule
	],
	declarations: [
		TeamSelectComponent,
	],
	exports: [
		TeamSelectComponent,
	],
})
export class TeamSelectModule {}
