import { TranslateModule } from '@ngx-translate/core';
import { number, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Notifications', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				TranslateModule.forRoot()
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-notifications [count]="count">
				<li uiNotificationItem>
					<ui-notification title="Conflicted data" type="error" icon="exclamation">
						The Tank bottom (outer side) elevation has been frozen as a result of the freezing of the OD and Condensate Tank Axis Elevation
					</ui-notification>
				</li>

				<li uiNotificationItem>
					<ui-notification title="Frozen data">
						The Tank bottom (outer side) elevation has been frozen as a result of the freezing of the OD and Condensate Tank Axis Elevation
					</ui-notification>
				</li>

				<li uiNotificationItem>
					<ui-notification title="Component validated" type="success" icon="check-circle">
						The Tank bottom (outer side) elevation has been frozen as a result of the freezing of the OD and Condensate Tank Axis Elevation
					</ui-notification>
				</li>

				<li uiNotificationItem>
					<ui-notification title="CAD files" icon="cube">
						The Tank bottom (outer side) elevation has been frozen as a result of the freezing of the OD and Condensate Tank Axis Elevation
					</ui-notification>
				</li>
			</ui-notifications>
		`,
		props: {
			count: number('Notification count', 3),
		},
	}))
	.add('indicator', () => ({
		template: `
			<ui-notification-indicator [count]="count"></ui-notification-indicator>
		`,
		props: {
			count: number('Notification count', 3),
		},
	}))
	.add('notification', () => ({
		template: `
			<ui-notification [title]="title">
				The Tank bottom (outer side) elevation has been frozen as a result of the freezing of the OD and Condensate Tank Axis Elevation
			</ui-notification>
		`,
		props: {
			title: text('Title', 'Conflicted data'),
		},
	}));
