import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '../button/button.module';
import { DialogModule } from '../dialog/dialog.module';
import { HeadingModule } from '../heading/heading.module';
import { IconModule } from '../icon/icon.module';
import { InfoItemModule } from '../info-item/info-item.module';
import { LinkModule } from '../link/link.module';
import { ListModule } from '../list/list.module';
import { LoaderModule } from '../loader/loader.module';

import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { UploadDropzoneComponent } from './upload-dropzone/upload-dropzone.component';
import { UploadComponent } from './upload.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		DialogModule,
		HeadingModule,
		IconModule,
		ListModule,
		InfoItemModule,
		LoaderModule,
		LinkModule,
		RouterModule,
		TranslateModule
	],
	declarations: [
		UploadComponent,
		UploadDropzoneComponent,
		UploadDialogComponent,
	],
	entryComponents: [
		UploadDialogComponent,
	],
	exports: [
		UploadComponent,
		UploadDropzoneComponent,
		UploadDialogComponent,
	],
})
export class UploadModule {}
