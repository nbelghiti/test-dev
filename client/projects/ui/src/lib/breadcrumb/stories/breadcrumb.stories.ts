import { RouterModule } from '@angular/router';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

import { IconName } from '../../icon/icon.types';

storiesOf('Components|Breadcrumbs', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('Item', () => ({
		template: `
				<ui-breadcrumb-item
					[label]="label"
					[value]="value"
					[first]="first"
					[conflict]="conflict"
				>
				</ui-breadcrumb-item>
			`,
		props: {
			label: text('Label', 'Package'),
			first: boolean('First', false),
			value: text('Value', '520-Tanks'),
			conflict: boolean('Conflict', false),
		}
	}))
	.add('Default', () => ({
		template: `
			<ui-breadcrumb
				[items]="items"
			>
			</ui-breadcrumb>
		`,
		props: {
			items: object('Items', [
				{
					label: 'Label',
					value: 'Value',
					items: [
						{
							label: 'Label',
							link: 'link',
						},
						{
							label: 'Label2',
							link: 'link',
						},
					]
				},
				{
					label: 'Label',
					value: 'Value',
				},
				{
					label: 'Label',
					value: 'Value',
				},
				{
					label: 'Label',
					value: 'Value',
				},
			]),
		}
	}));
