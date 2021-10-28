import { Component, HostBinding, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

import { IMember } from './team.types';

@Component({
	selector: 'ui-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss']
})

export class TeamComponent {
	@HostBinding('class') class = 'c-team';

	@Input() public title: string;
	@Input() public team: IMember[] = [];

	public IconName: typeof IconName = IconName;
}
