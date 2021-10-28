import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CoreUnitTypes, FieldConverter, UnitSystem, UnitTypes } from '@services/field-services';
import { propOr } from 'ramda';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ButtonType } from '../../button/button.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IconName } from '../../icon/icon.types';
import { ISelectOption } from '../../select/select.types';
import { IDialog, IDialogActions, IDialogData, IDialogResponse } from '../dialog.types';

import { UIField, UIFieldType } from './field-dialog.types';

@Component({
	selector: 'ui-field-dialog',
	templateUrl: './field-dialog.component.html',
})
export class FieldDialogComponent implements IDialog, OnDestroy, OnInit {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public fieldForm: FormGroup;

	public unitOptions: ISelectOption[] = [];
	public typeOptions: ISelectOption[] = [];
	public unitTypeOptions: ISelectOption[] = [];
	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public IconName = IconName;
	public ButtonType = ButtonType;
	public isPending: boolean = false;
	public confirmSave: boolean = false;
	public isEdit: boolean = false;
	public unitTypes = UnitTypes;
	public fieldTypes = UIFieldType;
	public response: IDialogResponse;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public closeDialog: () => void;

	constructor(
		private formBuilder: FormBuilder,
		private translate: TranslateService,
	) { }

	public ngOnInit(): void {
		this.initForm(this.data as UIField);
		this.unitTypeOptions = this.getOptions(this.unitTypes);
		this.typeOptions = this.getOptions(this.fieldTypes);
		this.isEdit = !!this.data.description;
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public completeCallback(response: IDialogResponse): void {
		this.response = response;
		this.isPending = false;
	}

	public initForm(field: UIField): void {
		this.fieldForm = this.formBuilder.group({
			id: [propOr(null, 'id', field)],
			type: [propOr(this.fieldTypes.manual, 'type', field), Validators.required],
			description: [
				propOr('', 'description', field),
				propOr(null, 'checks', this.data) ? [Validators.required, this.forbiddenNameValidator(this.data.checks)] : Validators.required
			],
			code: [propOr('', 'code', field), [Validators.required, Validators.pattern('^[A-Za-z_]+$')]],
			CAD_ID: [propOr('', 'CAD_ID', field), [Validators.required, Validators.pattern('^[A-Za-z_]+$')]],
			defaultUnit: [propOr(propOr(null, 'nominalUnit', field), 'defaultUnit', field), Validators.required],
			unitType: [propOr(null, 'unitType', field), Validators.required],
		});

		this.getUnitOptions(propOr(null, 'unitType', field));

		this.fieldForm.get('unitType').valueChanges
			.pipe(
				takeUntil(this.destroyed$),
			)
			.subscribe((unitType: string) => {
				this.getUnitOptions(unitType);
			});

		this.fieldForm.get('type').valueChanges
			.pipe(
				takeUntil(this.destroyed$),
			)
			.subscribe((type: string) => {
				if (type === this.fieldTypes.datalist) {
					this.fieldForm.get('defaultUnit').setValidators(null);
					this.fieldForm.get('unitType').setValidators(null);
					this.fieldForm.get('defaultUnit').setValue(null);
					this.fieldForm.get('unitType').setValue(null);
				} else {
					this.fieldForm.get('defaultUnit').setValidators([Validators.required]);
					this.fieldForm.get('unitType').setValidators([Validators.required]);
				}

				this.fieldForm.get('defaultUnit').updateValueAndValidity();
				this.fieldForm.get('unitType').updateValueAndValidity({
					emitEvent: false,
				});
			});
	}

	public getDescriptionErrors(): string | null {
		const description = this.fieldForm.get('description');

		if ((description.dirty || description.touched) && description.errors) {
			if (description.errors.required) {
				return this.translate.instant('FIELD_DIALOG__DESCRIPTION_ERROR');
			}

			if (description.errors.forbiddenName) {
				return this.translate.instant('FIELD_DIALOG__FORBIDDEN_DESCRIPTION_ERROR');
			}
		}

		return null;
	}

	public onCancel(): void {
		this.closeDialog();
	}

	public onSave(): void {
		this.markFormTouched(this.fieldForm);

		if (this.fieldForm.invalid) {
			return;
		}

		this.isPending = true;

		if (!this.confirmSave) {
			this.actions.save(this.fieldForm.value);
			this.confirmSave = false;
			return;
		}

		this.actions.confirm(this.fieldForm.value);
		this.confirmSave = true;
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

	private getUnitOptions(value: string): void {
		for (const type of CoreUnitTypes.keys()) {
			if (type === value) {
				let typeSystem: UnitSystem<string>;

				// TODO: extend field convert package to return all unit options based on unit type (eg. Length, Generic, ...)
				switch (type) {
					case 'Acceleration':
						typeSystem = FieldConverter.findUnitSystem('m/s2');
						break;
					case 'Angle':
						typeSystem = FieldConverter.findUnitSystem('deg');
						break;
					case 'ApparentPower':
						typeSystem = FieldConverter.findUnitSystem('VA');
						break;
					case 'Area':
						typeSystem = FieldConverter.findUnitSystem('mm2');
						break;
					case 'Charge':
						typeSystem = FieldConverter.findUnitSystem('c');
						break;
					case 'Current':
						typeSystem = FieldConverter.findUnitSystem('A');
						break;
					case 'Density':
						typeSystem = FieldConverter.findUnitSystem('kg/m3');
						break;
					case 'Energy':
						typeSystem = FieldConverter.findUnitSystem('J');
						break;
					case 'Force':
						typeSystem = FieldConverter.findUnitSystem('N');
						break;
					case 'Frequency':
						typeSystem = FieldConverter.findUnitSystem('Hz');
						break;
					case 'Generic':
						typeSystem = FieldConverter.findUnitSystem('euros');
						break;
					case 'Length':
						typeSystem = FieldConverter.findUnitSystem('mm');
						break;
					case 'Mass':
						typeSystem = FieldConverter.findUnitSystem('kg');
						break;
					case 'MassFlowRate':
						typeSystem = FieldConverter.findUnitSystem('t/h');
						break;
					case 'Pace':
						typeSystem = FieldConverter.findUnitSystem('s/m');
						break;
					case 'Power':
						typeSystem = FieldConverter.findUnitSystem('W');
						break;
					case 'Pressure':
						typeSystem = FieldConverter.findUnitSystem('Pa');
						break;
					case 'ReactiveEnergy':
						typeSystem = FieldConverter.findUnitSystem('VARh');
						break;
					case 'ReactivePower':
						typeSystem = FieldConverter.findUnitSystem('VAR');
						break;
					case 'Sound':
						typeSystem = FieldConverter.findUnitSystem('dB(A)');
						break;
					case 'Speed':
						typeSystem = FieldConverter.findUnitSystem('m/s');
						break;
					case 'Stiffness':
						typeSystem = FieldConverter.findUnitSystem('N/mm');
						break;
					case 'Temperature':
						typeSystem = FieldConverter.findUnitSystem('C');
						break;
					case 'Time':
						typeSystem = FieldConverter.findUnitSystem('s');
						break;
					case 'TorsionalStiffness':
						typeSystem = FieldConverter.findUnitSystem('Nm/deg');
						break;
					case 'Voltage':
						typeSystem = FieldConverter.findUnitSystem('V');
						break;
					case 'Volume':
						typeSystem = FieldConverter.findUnitSystem('mm3');
						break;
					case 'VolumeFlowRate':
						typeSystem = FieldConverter.findUnitSystem('mm3/s');
						break;
				}

				this.unitOptions = Object.keys(typeSystem.units).map((unit: string) => {
					const unitDefinition = typeSystem.findUnit(unit);

					return {
						value: unitDefinition.unit,
						label: unitDefinition.unit,
					};
				});
			}
		}
	}

	private getOptions(data: typeof UnitTypes | typeof UIFieldType): ISelectOption[] {
		return Object.values(data).map((value: string) => {
			return {
				value: value,
				label: value,
			};
		});
	}

	private forbiddenNameValidator(checks: string[]): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const forbidden = checks
				.map(check => check.toLowerCase())
				.includes(control.value && control.value.toLowerCase());

			return forbidden ? {'forbiddenName': true} : null;
		};
	}
}
