import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _debounce from 'lodash.debounce';

import { ButtonType } from '../button/button.types';
import { IconName, IconSize } from '../icon/icon.types';
import { IUser } from '../user/user.types';

const debounce = _debounce;

@Component({
	selector: 'ui-user-select',
	templateUrl: './user-select.component.html',
	styleUrls: ['./user-select.component.scss'],
})

export class UserSelectComponent implements OnInit {
	@Input() public users: IUser[] = [];
	@Input() public role: string = '';
	@Input() public selectedUser: IUser = null;
	@Output() public selectUser: EventEmitter<IUser> = new EventEmitter<IUser>();
	@Output() public searchUsers: EventEmitter<string> = new EventEmitter<string>();
	@Output() public removeUser: EventEmitter<IUser> = new EventEmitter<IUser>();

	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;
	public ButtonType: typeof ButtonType = ButtonType;
	public searchQuery: FormControl = new FormControl('');
	public label: string = '';

	public ngOnInit(): void {
		this.onChange();
	}

	public onChange(): void {
		this.label = `TEAM_MEMBER_ROLE__${this.role}`;
		const debouncedChange = debounce((val) => this.searchUsers.emit(val), 400);

		this.searchQuery.valueChanges.subscribe(val => {
			debouncedChange(val);
		});
	}

	public clickUser(user: IUser): void {
		this.selectUser.emit(user);
		this.searchUsers.emit('');

		this.selectedUser = {
			...user,
			role: this.role,
		};
	}

	public removeSelectedUser(user: IUser): void {
		this.removeUser.emit(user);
		this.searchUsers.emit('');

		this.selectedUser = null;
	}
}
