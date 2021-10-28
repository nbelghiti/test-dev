import { Component, HostBinding } from '@angular/core';

import { ButtonType } from '../../button/button.types';
import { IDialog, IDialogActions, IDialogData } from '../../dialog/dialog.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IconName } from '../../icon/icon.types';

@Component({
	selector: 'ui-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent implements IDialog {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public ButtonType = ButtonType;
	public IconName = IconName;

	public closeDialog: () => void;

	public onCancel(): void {
		this.closeDialog();
	}

	public onConfirm(): void {
		this.actions.confirm();
		this.closeDialog();
	}
}
