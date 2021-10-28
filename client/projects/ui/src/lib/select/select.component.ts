import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty } from 'ramda';

import { IconName, IconSize } from '../icon/icon.types';

import { ISelectOption } from './select.types';

@Component({
	selector: 'ui-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true
		}
	]
})

export class SelectComponent implements ControlValueAccessor {
	@Input() public name: string;
	@Input() public label: string;
	@Input() public options: ISelectOption[];
	@Input() public error?: string = '';

	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;

	public value: string;

	public onChange: (_) => any = () => { };

	public onTouched = () => { };

	public writeValue(value: string): void {
		this.value = value;

		if (isEmpty(value)) {
			this.value = null;
		}

		this.onChange(this.value);
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public setDisabledState(): void {
		throw new Error('Method not implemented.');
	}
}
