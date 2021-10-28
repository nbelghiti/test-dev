import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { IUser } from './user.types';

@Component({
	selector: 'ui-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
	@Input() public user: IUser;
	@Input() public backgroundColor: boolean = false;

	@Output() public clicked: EventEmitter<IUser> = new EventEmitter<IUser>();

	public isButton = false;
	public label: string = '';

	constructor(
		private translate: TranslateService
	) {}

	public ngOnInit(): void {
		const role = this.user && (this.user.role || this.user.type);
		if (role) {
			this.label = this.translate.instant(`TEAM_MEMBER_ROLE__${role}`);
		}
		this.isButton = this.clicked.observers.length > 0;
	}
}
