import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[uiNotificationItem]',
})
export class NotificationItemDirective {
	@HostBinding('class.c-notification__item') public notificationItemClassname: boolean = true;
}
