import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Filter Select', module)
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
				<ui-filter-select
					[placeholder]="placeholder"
					[label]="label"
					name="text-input"
					type="text"
					[disabled]="disabled"
				>
					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: true
						}"
						(clicked)="selectUser($event)"
					>
					</ui-user>

					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: false
						}"
						(clicked)="selectUser($event)"
					>
					</ui-user>

					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: false
						}"
						(clicked)="selectUser($event)"
					>
					</ui-user>
				</ui-filter-select>
			`,
			props: {
				label: text('Label', 'Select approvers'),
				placeholder: text('Placeholder', 'Select one or more approvers'),
				disabled: boolean('Disabled', false),
				selectUser: handleSelect,
			},
		};
	});
