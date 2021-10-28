import {
	Component,
	Input,
	OnDestroy,
	forwardRef
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-selectable-row',
	templateUrl: './selectable-row.component.html',
	styleUrls: ['./selectable-row.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectableRowComponent),
			multi: true,
		},
	],
})

export class SelectableRowComponent implements ControlValueAccessor, OnDestroy {
	@Input() public iconBefore?: string;
	@Input() public name: string;
	@Input() public value: string;

	public isChecked: FormControl = new FormControl(false);
	public IconName: typeof IconName = IconName;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor() {
		this.isChecked.valueChanges
			.pipe(takeUntil(this.destroyed$))
			.subscribe((isChecked: boolean) => this.onChange(isChecked));
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public onChange: (_) => any = () => { };

	public onTouched = () => { };

	public writeValue(isChecked: boolean): void {
		if (isChecked !== this.isChecked.value) {
			this.isChecked.patchValue(isChecked);
		}
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
