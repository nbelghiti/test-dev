import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { getInitials } from '../avatar/avatar.utils';
import { HeadingLevel } from '../heading/heading.types';
import { IUser } from '../user/user.types';

@Component({
	selector: 'ui-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {
	@Input() user: IUser;

	@Output() public logout: EventEmitter<void> = new EventEmitter<void>();

	public HeadingLevel: typeof HeadingLevel = HeadingLevel;
	public initials: string = '';

	public ngOnInit(): void {
		this.initials = this.user ? getInitials(this.user.name) : null;
	}
}
