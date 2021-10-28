import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';

import { FileComponent } from './file.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
		ButtonModule,
		TranslateModule
	],
	declarations: [
		FileComponent,
	],
	exports: [
		FileComponent,
	],
})
export class FileModule {}
