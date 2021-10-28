import { Component, Input, OnDestroy, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CardComponent } from '../card/card.component';

@Component({
	selector: 'ui-selectable-card',
	templateUrl: './selectable-card.component.html',
	styleUrls: ['../card/card.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectableCardComponent),
			multi: true,
		},
	],
})

export class SelectableCardComponent extends CardComponent implements ControlValueAccessor, OnDestroy {
	@Input() public name: string;
	@Input() public value: string;
	@ViewChild('actions', { static: false }) actions = null;

	public isChecked: FormControl = new FormControl(false);

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor() {
		super();

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
