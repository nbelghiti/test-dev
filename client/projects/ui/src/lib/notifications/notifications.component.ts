import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent {
	@Input() public newAmount: number;
	@Input() public totalAmount: number;
}
