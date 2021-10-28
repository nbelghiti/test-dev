import { object } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Filter Menu', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-filter-menu [items]="items"></ui-filter-menu>
		`,
		props: {
			items: object('Items', [
				{
					label: 'label',
				},
				{
					label: 'label',
				},
				{
					label: 'label',
				},
				{
					label: 'label',
				},
			])
		},
	}));
