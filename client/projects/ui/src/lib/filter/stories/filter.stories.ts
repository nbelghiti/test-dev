import { object } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UIModule } from 'adb-ui';

storiesOf('Components|Filter', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-filter>
				<ui-filter-toggle
					label="Label"
				>
				</ui-filter-toggle>

				<ui-filter-menu [items]="items"></ui-filter-menu>
			</ui-filter>
		`,
		props: {
			items: object('Items', [
				{
					label: 'Label',
					active: true,
				},
				{
					label: 'Label',
					active: false,
				},
				{
					label: 'Label',
					active: false,
				},
				{
					label: 'Label',
					active: false,
				},
			])
		},
	}));
