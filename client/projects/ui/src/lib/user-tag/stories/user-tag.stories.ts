import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

import { IconName } from '../../icon/icon.types';

storiesOf('Components|User tag', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-user-tag
				[user]="user"
				[icon]="icon"
			>
			</ui-user-tag>
		`,
		props: {
			user: {
				name: text('User name', 'John Doe'),
				role: text('User role', 'Head engineer'),
				myself: boolean('Is it me?', false),
			},
			icon: select('Icon', IconName as any, IconName.check),
		},
	}))
	.add('Closable', () => ({
		template: `
			<ui-user-tag
				[user]="user"
				(clicked)="handleClick($event)"
			>
			</ui-user-tag>
		`,
		props: {
			user: {
				name: text('User name', 'John Doe'),
				role: text('User role', 'Head engineer'),
				myself: boolean('Is it me?', false),
			},
			handleClick: action('Close user tag'),
		},
	}));
