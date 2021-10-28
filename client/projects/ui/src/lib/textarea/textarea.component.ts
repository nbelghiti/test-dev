import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty } from 'ramda';

@Component({
	selector: 'ui-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextareaComponent),
			multi: true,
		},
	],
})

export class TextareaComponent implements ControlValueAccessor {
	@Input() public name: string;
	@Input() public placeholder: string = '';
	@Input() public label: string;
	@Input() public rows: number = 4;
	@Input() public disabled?: boolean = false;
	@Input() public error?: string = '';

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
