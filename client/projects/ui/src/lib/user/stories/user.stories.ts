import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|User', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-user
				[user]="user"
				[backgroundColor]="backgroundColor"
			>
			</ui-user>
		`,
		props: {
			user: {
				name: text('User name', 'John Doe'),
				role: text('User role', 'Head engineer'),
				myself: boolean('Is it me?', false),
			},
			backgroundColor: boolean('Background color', false),
		},
	}))
	.add('User as button', () => {
		const handleUserClicked = (user) => {
			console.log(user);
		};

		return {
			template: `
				<ui-user
					[user]="user"
					[backgroundColor]="backgroundColor"
					(clicked)="handleClicked($event)"
				>
				</ui-user>
			`,
			props: {
				user: {
					name: text('User name', 'John Doe'),
					role: text('User role', 'Head engineer'),
					myself: boolean('Is it me?', false),
				},
				backgroundColor: boolean('Background color', false),
				handleClicked: handleUserClicked,
			},
		};
	});
