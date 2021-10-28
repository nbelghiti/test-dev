import { Component, ComponentRef, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ButtonType } from '../button/button.types';
import { DialogService } from '../dialog/dialog.service';
import { IDialog } from '../dialog/dialog.types';
import { IconName } from '../icon/icon.types';

import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { IUploadResponse } from './upload.types';

@Component({
	selector: 'ui-upload',
	templateUrl: './upload.component.html',
})
export class UploadComponent {
	@Input() public label?: string;
	@Input() public type: ButtonType = ButtonType.primary;
	@Input() public multiple: boolean = false;
	@Input() public uploading$: Observable<boolean>;
	@Input() public response$: Observable<IUploadResponse>;
	@Output() public filesUploaded: EventEmitter<Set<File>> = new EventEmitter<Set<File>>();
	@Output() public dialogClosed: EventEmitter<void> = new EventEmitter<void>();
	@Output() public dialogOpened: EventEmitter<ComponentRef<IDialog>> = new EventEmitter<ComponentRef<IDialog>>();

	public ButtonType: typeof ButtonType = ButtonType;
	public IconName: typeof IconName = IconName;

	constructor(
		private dialogService: DialogService,
	) {}

	public openUploadDialog(): void {
		this.dialogOpened.emit(
			this.dialogService.openDialog({
				dialog: UploadDialogComponent,
				actions: {
					close: () => this.dialogClosed.emit(),
					upload: (files: Set<File>) => this.filesUploaded.emit(files),
				},
				data: {
					multiple: this.multiple,
					uploading$: this.uploading$,
					response$: this.response$,
				},
			})
		);
	}
}
