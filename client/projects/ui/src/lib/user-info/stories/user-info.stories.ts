import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|User info', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-user-info [user]="user"></ui-user-info>
		`,
		props: {
			user: {
				name: text('User name', 'John Doe'),
			},
		},
	}));
