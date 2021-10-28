import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ButtonType } from '../../button/button.types';
import { DialogService } from '../dialog.service';
import { IDialogResponse } from '../dialog.types';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@Component({
	selector: 'ui-confirm',
	templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
	@Input() public title: string = 'Are you sure?';
	@Input() public response: IDialogResponse;
	@Input() public cancelLabel: string = 'Cancel';
	@Input() public confirmLabel: string = 'Confirm';
	@Input() public disabled: boolean = false;
	@Input() public iconButton: boolean = false;

	@Output() public confirm: EventEmitter<void> = new EventEmitter<void>();

	public ButtonType = ButtonType;

	constructor(
		private dialogService: DialogService,
	) {}

	public openConfirmDialog(): void {
		if (!this.disabled) {
			this.dialogService.openDialog({
				dialog: ConfirmDialogComponent,
				actions: {
					confirm: () => this.confirm.emit(),
				},
				data: {
					title: this.title,
					cancelLabel: this.cancelLabel,
					confirmLabel: this.confirmLabel,
					response: this.response,
				},
			});
		}
	}
}
