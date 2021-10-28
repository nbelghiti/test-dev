import { Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { equals, propOr } from 'ramda';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FlyoutState } from '../flyout/flyout.types';
import { IconName, IconSize } from '../icon/icon.types';

import { IMultiSelectOption } from './multi-select.types';

@Component({
	selector: 'ui-multi-select',
	templateUrl: './multi-select.component.html',
	styleUrls: ['./multi-select.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => MultiSelectComponent),
			multi: true
		}
	]
})

export class MultiSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
	@Input() public name: string;
	@Input() public label: string;
	@Input() public options: IMultiSelectOption[] = [];
	@Input() public error?: string = '';

	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;
	public FlyoutState = FlyoutState;

	public selectForm: FormGroup;
	public selectedLabels: string = '';

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private formBuilder: FormBuilder,
	) {}

	public ngOnInit(): void {
		if (this.options && this.options.length) {
			this.selectForm = this.formBuilder.group(
				this.options.reduce((acc, item: IMultiSelectOption) => ({
					...acc,
					[item.value]: false,
				}), {})
			);

			this.selectForm.valueChanges
				.pipe(takeUntil(this.destroyed$))
				.subscribe((values) => {
					this.selectedLabels = this.options.reduce((acc: string, option: IMultiSelectOption) => {
						if (values[option.value]) {
							return acc === '' ? `${option.label}` : `${acc}, ${option.label}`;
						}

						return acc;
					}, '');

					this.onChange(values);
				});
		}
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public onChange: (_) => any = () => { };

	public onTouched = () => { };

	public writeValue(selectedItems: { [key: string]: boolean }): void {
		if (equals(selectedItems, propOr(null, 'value', this.selectForm)) && this.selectForm) {
			this.selectForm.patchValue(selectedItems);
		}
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public asIsOrder(): number {
		return 0;
	}
}
