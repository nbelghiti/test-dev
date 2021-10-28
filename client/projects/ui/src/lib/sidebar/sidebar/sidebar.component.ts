import { Component, Input } from '@angular/core';

import { IconName } from '../../icon/icon.types';

@Component({
	selector: 'ui-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
	@Input() public title: string;

	public IconName: typeof IconName = IconName;
}
