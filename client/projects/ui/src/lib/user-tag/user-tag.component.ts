import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IconName, IconSize } from '../icon/icon.types';
import { IUser } from '../user/user.types';

@Component({
	selector: 'ui-user-tag',
	templateUrl: './user-tag.component.html',
	styleUrls: ['./user-tag.component.scss']
})

export class UserTagComponent implements OnInit {
	@Input() public user: IUser;
	@Input() public icon: IconName;
	@Input() public fluid: boolean = false;
	@Output() public clicked: EventEmitter<IUser> = new EventEmitter<IUser>();

	public isClickedUsed = false;
	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;

	ngOnInit() {
		this.isClickedUsed = this.clicked.observers.length > 0;
	}
}
