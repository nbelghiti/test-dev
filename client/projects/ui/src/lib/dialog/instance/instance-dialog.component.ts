import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { propOr } from 'ramda';
import { Subject } from 'rxjs';

import { ButtonType } from '../../button/button.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IDialog, IDialogActions, IDialogData, IDialogResponse } from '../dialog.types';

import { UIInstanceData } from './instance.types';

@Component({
	selector: 'ui-instance-dialog',
	templateUrl: './instance-dialog.component.html',
})
export class InstanceDialogComponent implements IDialog, OnDestroy, OnInit {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public instanceForm: FormGroup;

	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public ButtonType = ButtonType;
	public isPending: boolean = false;
	public hasDescription: boolean = true;
	public error: string = null;
	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public closeDialog: () => void;

	constructor(
		private formBuilder: FormBuilder,
		private translate: TranslateService,
	) { }

	public ngOnInit(): void {
		this.initForm(this.data as UIInstanceData);
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public initForm(data: UIInstanceData): void {
		if (this.hasDescription) {
			this.instanceForm = this.formBuilder.group({
				id: [propOr(null, 'id', data)],
				name: [
					propOr(null, 'name', data),
					propOr(null, 'checks', data) ? [Validators.required, this.forbiddenNameValidator(data.checks)] : Validators.required
				],
				description: [propOr(null, 'description', data), Validators.required],
			});
		} else {
			this.instanceForm = this.formBuilder.group({
				id: [propOr(null, 'id', data)],
				name: [
					propOr(null, 'name', data),
					propOr(null, 'checks', data) ? [Validators.required, this.forbiddenNameValidator(data.checks)] : Validators.required
				],
			});
		}
	}

	private forbiddenNameValidator(checks: string[]): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const forbidden = checks
				.map(check => check.toLowerCase())
				.includes(control.value && control.value.toLowerCase());

			return forbidden ? {'forbiddenName': true} : null;
		};
	}

	public getNameErrors(): string | null {
		const name = this.instanceForm.get('name');

		if ((name.dirty || name.touched) && name.errors) {
			if (name.errors.required) {
				return this.translate.instant('GENERAL__NAME_ERROR');
			}

			if (name.errors.forbiddenName) {
				return this.translate.instant('GENERAL__FORBIDDEN_NAME_ERROR');
			}
		}

		return null;
	}

	public onCancel(): void {
		this.closeDialog();
	}

	public onSubmit(): void {
		this.markFormTouched(this.instanceForm);

		if (this.instanceForm.invalid) {
			this.instanceForm.updateValueAndValidity();
			return;
		}

		this.actions.submit(this.instanceForm.value);
		this.isPending = true;
	}

	public completeCallback(response: IDialogResponse): void {
		this.isPending = false;
		this.error = response.message;
	}

	private markFormTouched(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(key => {
			const control = formGroup.get(key);

			control.markAsTouched();

			if (control instanceof FormGroup) {
				this.markFormTouched(control);
			}
		});
	}
}
