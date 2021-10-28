import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty } from 'ramda';

import { TitleInputLevel } from './title-input.types';

@Component({
	selector: 'ui-title-input',
	templateUrl: './title-input.component.html',
	styleUrls: ['./title-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TitleInputComponent),
			multi: true,
		},
	],
})

export class TitleInputComponent implements ControlValueAccessor {
	@Input() public placeholder: string;
	@Input() public error: string;
	@Input() public level: TitleInputLevel = TitleInputLevel.default;
	@Input() public disabled = false;
	@Input() public autofocus: boolean = false;

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

	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
}
