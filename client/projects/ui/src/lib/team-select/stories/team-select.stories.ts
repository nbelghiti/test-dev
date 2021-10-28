import { RouterModule } from '@angular/router';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Team select', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-team-select [title]="title">
				<ui-user-select
					*uiListItem
					role="Head engineer"
				>
					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: true
						}"
					>
					</ui-user>

					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: false
						}"
					>
					</ui-user>

					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: false
						}"
					>
					</ui-user>
				</ui-user-select>

				<ui-user-select
					*uiListItem
					role="Head engineer"
				>
					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: true
						}"
					>
					</ui-user>

					<ui-user
						*uiListItem
						[user]="{
							name: 'John Doe',
							role: 'Head engineer',
							myself: false
						}"
					>
					</ui-user>
				</ui-user-select>
			</ui-team-select>
		`,
		props: {
			title: text('Title', 'Management'),
		},
	}));
