import { Component, HostBinding, OnDestroy } from '@angular/core';
import { isNil } from 'ramda';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { ButtonType } from '../../button/button.types';
import { IDialog, IDialogActions, IDialogData } from '../../dialog/dialog.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IconName } from '../../icon/icon.types';
import { IUploadResponse } from '../upload.types';

@Component({
	selector: 'ui-upload-dialog',
	templateUrl: './upload-dialog.component.html',
})
export class UploadDialogComponent implements IDialog, OnDestroy {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public IconName: typeof IconName = IconName;
	public uploaded: boolean = false;
	public response: IUploadResponse;
	public actions: IDialogActions;
	public data: IDialogData;
	public files: Set<File> = new Set<File>();
	public HeadingLevel = HeadingLevel;
	public ButtonType = ButtonType;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public closeDialog(): void {
		if (this.actions.close) {
			this.actions.close();
		}
	}

	public onCancel(): void {
		this.closeDialog();
	}

	public onUpload(): void {
		if (!this.files.size) {
			return;
		}

		const files = Array.from(this.files);

		this.data.uploading$
			.pipe(
				takeUntil(this.destroyed$),
				filter((uploading: boolean) => !uploading)
			)
			.subscribe(() => this.uploaded = true);

		this.data.response$
			.pipe(
				takeUntil(this.destroyed$),
				filter((response: IUploadResponse) => !isNil(response))
			)
			.subscribe((response: IUploadResponse) => this.response = response);

		this.actions.upload(
			this.data.multiple ? files : files[0]
		);
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
