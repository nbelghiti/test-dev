import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FileModule } from '../file/file.module';
import { IconModule } from '../icon/icon.module';
import { InfoItemModule } from '../info-item/info-item.module';
import { StatusLabelModule } from '../status-label/status-label.module';

import { ListItemDirective } from './list-item.directive';
import { ListComponent } from './list.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		InfoItemModule,
		FileModule,
		StatusLabelModule,
		RouterModule,
		TranslateModule
	],
	declarations: [
		ListComponent,
		ListItemDirective,
	],
	exports: [
		ListComponent,
		ListItemDirective,
	],
})
export class ListModule {}
