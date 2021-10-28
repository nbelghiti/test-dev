import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IFilterMenuItem } from '../../filter/filter-menu/filter-menu.component.types';
import { IconName, IconSize, IconType } from '../../icon/icon.types';

@Component({
	selector: 'ui-breadcrumb-item',
	templateUrl: './breadcrumb-item.component.html',
	styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent implements OnChanges {
	@Input() public label: string = '';
	@Input() public value: string = '';
	@Input() public items: IFilterMenuItem[] = null;
	@Input() public first?: boolean = false;
	@Input() public link?: string[];
	@Input() public conflict?: boolean = false;
	@Input() public queryParams?: { [key: string]: string };

	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;
	public IconType: typeof IconType = IconType;
	public activeBreadcrumb: FormControl = new FormControl();

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.value && changes.value.currentValue) {
			this.activeBreadcrumb.setValue(
				{ value: changes.value.currentValue },
				{ emitEvent: false }
			);
		}
	}
}
