import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-notification-indicator',
	templateUrl: './indicator.component.html',
	styleUrls: ['./indicator.component.scss']
})

export class NotificationIndicatorComponent {
	@Input() public count: number;
}
