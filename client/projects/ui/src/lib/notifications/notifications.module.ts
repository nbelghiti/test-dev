import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EmptyStateModule } from '../empty-state/empty-state.module';
import { FlyoutModule } from '../flyout/flyout.module';
import { HeadingModule } from '../heading/heading.module';
import { IconModule } from '../icon/icon.module';
import { RowModule } from '../row/row.module';

import { NotificationIndicatorComponent } from './indicator/indicator.component';
import { NotificationItemDirective } from './notification-item/notification-item.directive';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications.component';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		IconModule,
		HeadingModule,
		RowModule,
		FlyoutModule,
		RouterModule,
		EmptyStateModule
	],
	declarations: [
		NotificationIndicatorComponent,
		NotificationComponent,
		NotificationsComponent,
		NotificationItemDirective,
	],
	exports: [
		NotificationIndicatorComponent,
		NotificationComponent,
		NotificationsComponent,
		NotificationItemDirective,
	],
})
export class NotificationsModule {}
