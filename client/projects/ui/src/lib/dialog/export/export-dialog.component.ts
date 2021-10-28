import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { propOr } from 'ramda';

import { ButtonType } from '../../button/button.types';
import { IDialog, IDialogActions, IDialogData } from '../../dialog/dialog.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IconName } from '../../icon/icon.types';
import { ISelectOption } from '../../select/select.types';

import { UIExportType } from './export-dialog.types';

@Component({
	selector: 'ui-export-dialog',
	templateUrl: './export-dialog.component.html',
})
export class ExportDialogComponent implements IDialog, OnInit {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public exportForm: FormGroup;
	public typeOptions: ISelectOption[] = [];
	public templateOptions: ISelectOption[] = [];
	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public ButtonType = ButtonType;
	public IconName = IconName;
	public UIExportType = UIExportType;

	public closeDialog: () => void;

	constructor(
		private formBuilder: FormBuilder,
	) { }

	public ngOnInit(): void {
		this.typeOptions = propOr(null, 'typeOptions', this.data);
		this.templateOptions = propOr(null, 'templateOptions', this.data);

		this.exportForm = this.formBuilder.group({
			type: [null, Validators.required],
			template: [null],
		});

		this.exportForm.get('type').valueChanges
			.subscribe((type: UIExportType) => {
				if (type === UIExportType.template) {
					this.exportForm.get('template').setValidators([Validators.required]);
					this.exportForm.get('template').updateValueAndValidity();
					return;
				}

				this.exportForm.get('template').setValidators(null);
				this.exportForm.get('template').updateValueAndValidity();
			});
	}


	public onCancel(): void {
		this.closeDialog();
	}

	public onConfirm(): void {
		this.markFormTouched(this.exportForm);

		if (this.exportForm.invalid) {
			return;
		}

		if (this.exportForm.get('type').value === UIExportType.file) {
			this.actions.confirmExportFile(this.exportForm);
			this.closeDialog();
			return;
		}

		if (this.exportForm.get('type').value === UIExportType.template) {
			this.actions.confirmExportTemplate(this.exportForm.get('template').value);
			this.closeDialog();
			return;
		}
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
