import { Component, Input } from '@angular/core';

import { getInitials } from './avatar.utils';

@Component({
	selector: 'ui-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent {
	@Input() public compact: boolean = false;

	public initials = '';

	@Input() set name(name: string) {
		if (name) {
			this.initials = getInitials(name);
		}
	}
}
