import { Component, Input, ViewChild } from '@angular/core';

import { IDialogData } from '../../dialog/dialog.types';
import { IconName } from '../../icon/icon.types';

@Component({
	selector: 'ui-upload-dropzone',
	templateUrl: './upload-dropzone.component.html',
	styleUrls: [ './upload-dropzone.component.scss' ],
})
export class UploadDropzoneComponent {
	@Input() public data: IDialogData;
	@Input() public uploading: boolean = false;
	@Input() public uploaded: boolean = false;
	@Input() public files: Set<File> = new Set<File>();
	@ViewChild('file', { static: false }) public file;

	public IconName: typeof IconName = IconName;

	public onFilesAdded(): void {
		const uploadedFiles = this.file.nativeElement.files;

		if (this.data && this.data.multiple) {
			for (let i = 0; i < uploadedFiles.length; i++) {
				this.files.add(uploadedFiles[i]);
			}
		}

		this.files.clear();

		this.files.add(uploadedFiles[0]);
	}
}
