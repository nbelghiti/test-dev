import { Component, ContentChildren, Input, QueryList } from '@angular/core';

import { ListItemDirective } from './list-item.directive';
import { ListType } from './list.types';

@Component({
	selector: 'ui-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	@ContentChildren(ListItemDirective) listItems: QueryList<ListItemDirective>;
	@Input() public type: ListType = ListType.UNORDERED;
	@Input() public withSpacing: boolean = true;
	@Input() public withBorder: boolean = false;

	public ListType = ListType;
}
