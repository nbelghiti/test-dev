import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

const USERS = [
	{
		name: 'John Doe',
		role: 'Head engineer',
		myself: true,
		selected: true,
	},
	{
		name: 'John Doe',
		role: 'Head engineer',
		myself: false
	},
	{
		name: 'John Doe',
		role: 'Head engineer',
		myself: false
	},
];

storiesOf('Components|User select', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => {
		const handleSelect = (user) => {
			console.log(user);
		};

		return {
			template: `
				<ui-user-select
					(selectUser)="selectUser($event)"
					role="Head engineer"
					[users]="users"
				>
				</ui-user-select>
			`,
			props: {
				users: USERS,
				selectUser: handleSelect,
			},
		};
	});
