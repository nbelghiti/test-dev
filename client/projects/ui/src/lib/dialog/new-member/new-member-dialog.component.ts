import { Component, ComponentRef, EventEmitter, HostBinding, OnDestroy, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { ButtonType } from '../../button/button.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IDialog, IDialogActions, IDialogData } from '../dialog.types';

@Component({
	selector: 'ui-new-member-dialog',
	templateUrl: './new-member-dialog.component.html',
})
export class NewMemberDialogComponent implements IDialog, OnDestroy {
	@Output() public dialogOpened: EventEmitter<ComponentRef<IDialog>> = new EventEmitter<ComponentRef<IDialog>>();
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public newMemberForm: FormGroup;
	public readonly role: string = 'role';

	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public ButtonType = ButtonType;
	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public closeDialog: () => void;

	constructor(
		private formBuilder: FormBuilder,
	) {
		this.initForm();
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public get roleFormControl(): AbstractControl {
		return this.newMemberForm.get(this.role);
	}

	public initForm(): void {
		this.newMemberForm = this.formBuilder.group({
			[this.role]: ['', Validators.required],
		});
	}

	public onCancel(): void {
		this.closeDialog();
	}

	public onSubmit(): void {
		this.markFormTouched(this.newMemberForm);

		if (this.newMemberForm.invalid) {
			return;
		}

		this.actions.submit(this.roleFormControl.value);
		this.closeDialog();
	}

	private markFormTouched(formGroup: FormGroup) {
		formGroup.markAsTouched({ onlySelf: false });
	}
}
