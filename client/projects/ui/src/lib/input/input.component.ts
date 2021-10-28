import { Component, Input, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'ui-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
	],
})

export class InputComponent implements ControlValueAccessor, OnDestroy {
	@Input() public name: string;
	@Input() public placeholder: string = '';
	@Input() public label: string;
	@Input() public type?: string = 'text';
	@Input() public error?: string = '';
	@Input() public icon?: string = '';

	public value: FormControl = new FormControl(null);

	public onChange: (value: string) => void;
	public onTouched: () => void;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor() {
		this.value.valueChanges
			.pipe(
				takeUntil(this.destroyed$),
			)
			.subscribe((value: string) => {
				this.onChange(value);
			});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public writeValue(value: string): void {
		this.value.setValue(value, { emitEvent: false });
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		if (isDisabled) {
			this.value.disable();
		} else {
			this.value.enable();
		}
	}
}
