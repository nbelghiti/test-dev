import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreUnitTypes, FieldConverter, UnitSystem, UnitTypes } from '@services/field-services';
import { propOr } from 'ramda';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ButtonType } from '../../button/button.types';
import { HeadingLevel } from '../../heading/heading.types';
import { IconName } from '../../icon/icon.types';
import { ISelectOption } from '../../select/select.types';
import { IDialog, IDialogActions, IDialogData, IDialogResponse } from '../dialog.types';

@Component({
	selector: 'ui-datalist-item-value-dialog',
	templateUrl: './datalist-item-value.component.html',
})
export class DatalistItemValueComponent implements IDialog, OnDestroy, OnInit {
	@HostBinding('class.c-dialog') public dialogClassName = true;

	public itemValueForm: FormGroup;

	public unitOptions: ISelectOption[] = [];
	public unitTypeOptions: ISelectOption[] = [];
	public actions: IDialogActions;
	public data: IDialogData;
	public HeadingLevel = HeadingLevel;
	public IconName = IconName;
	public ButtonType = ButtonType;
	public error: string = null;
	public isPending: boolean = false;
	public unitTypes = UnitTypes;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public closeDialog: () => void;

	constructor(
		private formBuilder: FormBuilder,
	) { }

	public ngOnInit(): void {
		this.itemValueForm = this.formBuilder.group({
			key: [propOr(null, 'key', this.data), Validators.required],
			value: [propOr(null, 'value', this.data), Validators.required],
			defaultUnit: [propOr(null, 'defaultUnit', this.data)],
			unitType: [propOr(null, 'unitType', this.data)],
		});

		if (this.itemValueForm.get('unitType').value) {
			this.getUnitOptions(this.itemValueForm.get('unitType').value);
		}

		this.itemValueForm.get('unitType').valueChanges
			.pipe(
				takeUntil(this.destroyed$),
			)
			.subscribe((unitType: string) => {
				this.getUnitOptions(unitType);
			});

		this.unitTypeOptions = Object.values(this.unitTypes).map((value: string) => {
			return {
				value: value,
				label: value,
			};
		});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public completeCallback(response: IDialogResponse): void {
		this.isPending = false;
		this.error = response.message;
	}

	public onCancel(): void {
		this.closeDialog();
	}

	public onSubmit(): void {
		this.markFormTouched(this.itemValueForm);

		if (this.itemValueForm.invalid) {
			this.itemValueForm.updateValueAndValidity();
			return;
		}

		this.actions.submit(this.itemValueForm.value);
		this.isPending = true;
	}

	private markFormTouched(formGroup: FormGroup): void {
		Object.keys(formGroup.controls).forEach((key: string) => {
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
}
