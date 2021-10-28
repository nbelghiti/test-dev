import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IFilterMenuItem } from './filter-menu.component.types';

@Component({
	selector: 'ui-filter-menu',
	templateUrl: './filter-menu.component.html',
	styleUrls: ['./filter-menu.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FilterMenuComponent),
			multi: true,
		},
	],
})

export class FilterMenuComponent implements ControlValueAccessor {
	@Input() public label: string = 'label';
	@Input() public items: IFilterMenuItem[];
	@Input() public initialSelected: string;

	public onChange: (_) => any = () => { };

	public onTouched = () => { };

	public writeValue(value: IFilterMenuItem): void {
		if (!value) {
			this.checkActiveItem({value: '- All', label: '- All', active: true});
			return;
		}

		this.checkActiveItem(value);
	}

	private checkActiveItem(value: IFilterMenuItem): void {
		this.items = this.items.map((item: IFilterMenuItem) => ({
			...item,
			active: value[this.label] === item[this.label],
		}));
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public select(value: IFilterMenuItem): void {
		this.onChange(value);
	}
}
