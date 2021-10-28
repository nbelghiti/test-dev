import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { IconModule } from '../icon/icon.module';
import { ListModule } from '../list/list.module';
import { StatusLabelModule } from '../status-label/status-label.module';

import { ProjectInfoComponent } from './project-info.component';

@NgModule({
	imports: [
		CommonModule,
		ListModule,
		IconModule,
		TranslateModule,
		StatusLabelModule,
	],
	declarations: [
		ProjectInfoComponent,
	],
	exports: [
		ProjectInfoComponent,
	],
})
export class ProjectInfoModule {}
