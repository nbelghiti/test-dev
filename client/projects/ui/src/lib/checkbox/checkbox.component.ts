import { Component, Input, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IconName, IconSize } from '../icon/icon.types';

@Component({
	selector: 'ui-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CheckboxComponent),
			multi: true,
		},
	],
})

export class CheckboxComponent implements OnDestroy, ControlValueAccessor {
	@Input() public indeterminate: boolean = false;
	@Input() public label: string;
	@Input() public name: string = 'checkbox-input';

	public IconName = IconName;
	public IconSize = IconSize;

	public isChecked: FormControl = new FormControl(false);

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor() {
		this.isChecked.valueChanges
			.pipe(takeUntil(this.destroyed$))
			.subscribe((isChecked: boolean) => this.onChange(isChecked));
	}

	public onChange: (_) => any = () => { };

	public onTouched: (_) => any = () => { };

	public writeValue(isChecked: boolean): void {
		if (this.isChecked.value !== isChecked) {
			this.isChecked.setValue(isChecked, { emitEvent: false });
		}
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(onTouched: () => void): void {
		this.onTouched = onTouched;
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
