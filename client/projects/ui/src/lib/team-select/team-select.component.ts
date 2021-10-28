import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';

import { IconName } from '../icon/icon.types';
import { ListItemDirective } from '../list/list-item.directive';

@Component({
	selector: 'ui-team-select',
	templateUrl: './team-select.component.html',
	styleUrls: ['./team-select.component.scss']
})

export class TeamSelectComponent {
	@ContentChildren(ListItemDirective) members: QueryList<ListItemDirective>;
	@Input() public title: string;
	@Input() public action: boolean = true;
	@Output() public newMember: EventEmitter<Event> = new EventEmitter<Event>();
	@Input() public first: boolean = false;

	public IconName: typeof IconName = IconName;
}
