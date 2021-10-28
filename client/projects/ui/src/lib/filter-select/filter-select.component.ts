import {
	AfterViewInit,
	Component,
	ContentChildren,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	QueryList,
	SimpleChanges,
	forwardRef
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { IconName, IconSize } from '../icon/icon.types';
import { ListItemDirective } from '../list/list-item.directive';

@Component({
	selector: 'ui-filter-select',
	templateUrl: './filter-select.component.html',
	styleUrls: ['./filter-select.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FilterSelectComponent),
			multi: true,
		},
	],
})

export class FilterSelectComponent implements AfterViewInit, OnChanges {
	@ContentChildren(ListItemDirective) items: QueryList<ListItemDirective>;
	@Input() public name: string;
	@Input() public placeholder: string = 'null';
	@Input() public label: string;
	@Input() public type?: string = 'text';
	@Input() public disabled?: boolean = false;
	@Input() public alignLeft: boolean = true;
	@Input() public selected?: string;
	@Output() public handleSearch: EventEmitter<string> = new EventEmitter<string>();

	public IconName = IconName;
	public IconSize = IconSize;

	public filter = new FormControl({
		value: '',
		disabled: this.disabled,
	});

	public ngAfterViewInit(): void {
		this.onChanges();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.selected) {
			this.filter.setValue(changes.selected.currentValue);
		}
	}

	onChanges(): void {
		this.filter.valueChanges
			.pipe(
				debounceTime(300)
			)
			.subscribe((val: string) => {
				this.handleSearch.emit(val);
			}
		);
	}
}
