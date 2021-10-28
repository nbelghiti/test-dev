import { AfterContentInit, Component, EventEmitter, Input, Output } from '@angular/core';

import { IconName } from '../../icon/icon.types';
import { NotificationType } from '../notifications.types';

import { INotificationReadStatus } from './notification.types';

@Component({
	selector: 'ui-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})

export class NotificationComponent implements AfterContentInit {
	@Input() public notificationId: string;
	@Input() public isRead: boolean;
	@Input() public title: string;
	@Input() public time: string;
	@Input() public type: NotificationType = NotificationType.success;
	@Input() public icon: IconName = IconName.exclamationCircle;

	@Output() public notificationReadStatus: EventEmitter<INotificationReadStatus> = new EventEmitter<INotificationReadStatus>();

	public notificationType = NotificationType;
	public parsedTime: string;

	public ngAfterContentInit(): void {
		const locale = 'nl-BE';

		if (!this.time) {
			return;
		}

		const timeStamp = new Date(this.time);
		const time = timeStamp.toLocaleTimeString(locale, {
			hour: 'numeric',
			minute: '2-digit'
		});
		const date = timeStamp.toLocaleDateString(locale);

		this.parsedTime = `${this.isToday(timeStamp) ? 'Today' : date.replace(/\//g, '-')} - ${time}`;
	}

	public isToday = (someDate: Date): boolean => {
		const today = new Date();
		return someDate.getDate() === today.getDate() &&
			someDate.getMonth() === today.getMonth() &&
			someDate.getFullYear() === today.getFullYear();
	}

	public markRead(): void {
		this.notificationReadStatus.emit({
			notificationId: this.notificationId,
			isRead: true,
		});
	}
}
