import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { ButtonType } from '../../button/button.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IDialog, IDialogActions, IDialogData, IDialogResponse } from '../dialog.types';

@Component({
	selector: 'ui-datalists-dialog',
	templateUrl: './datalists-dialog.component.html',
})
export class DatalistsDialogComponent implements IDialog, OnDestroy, OnInit {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public datalistsForm: FormGroup;

	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public ButtonType = ButtonType;
	public isPending: boolean = false;
	public error: string = null;
	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public closeDialog: () => void;

	constructor(
		private formBuilder: FormBuilder,
	) { }

	public ngOnInit(): void {
		this.datalistsForm = this.formBuilder.group({
			lists: [null, Validators.required],
		});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public onCancel(): void {
		this.closeDialog();
	}

	public onConfirm(): void {
		this.actions.confirm(Object.keys(this.datalistsForm.get('lists').value).filter((key: string) => {
			return this.datalistsForm.get('lists').value[key];
		}));
		this.isPending = true;
	}

	public completeCallback(response: IDialogResponse): void {
		this.isPending = false;
		this.error = response.message;
	}
}
