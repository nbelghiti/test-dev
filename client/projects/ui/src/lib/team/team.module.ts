import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { EmptyStateModule } from '../empty-state/empty-state.module';
import { UserTagModule } from '../user-tag/user-tag.module';

import { TeamComponent } from './team.component';

@NgModule({
	imports: [
		CommonModule,
		UserTagModule,
		EmptyStateModule,
		TranslateModule
	],
	declarations: [
		TeamComponent,
	],
	exports: [
		TeamComponent,
	],
})
export class TeamModule {}
