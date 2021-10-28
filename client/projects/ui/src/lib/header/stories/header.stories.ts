import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { number, object, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Header', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
				TranslateModule.forRoot(),
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-header
				[backLink]="backLink"
				[breadcrumb]="items"
			>
				<ui-heading
					level="1"
					[title]="title"
				>
					<small>{{subtitle}}</small>
				</ui-heading>

				<ui-notifications [newAmount]="notificationCount"></ui-notifications>

				<ui-search-indicator (clicked)="handleActiveSearch($event)"></ui-search-indicator>

				<ui-status-label status="is-bidding">bidding</ui-status-label>

				<ui-user-info [user]="user"></ui-user-info>
			</ui-header>
		`,
		props: {
			title: text('Title', 'My projects'),
			subtitle: text('Subtitle', ''),
			notificationCount: number('Notification count', 0),
			backLink: text('Link to the previous route', ''),
			user: {
				name: text('Name', 'John Doe'),
				role: text('Function', 'Salesmanager'),
			}
		},
	}));
