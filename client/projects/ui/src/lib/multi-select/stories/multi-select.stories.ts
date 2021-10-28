import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

const options = [
	{
		value: 'dog',
		label: 'Dog',
	},
	{
		value: 'bonobo',
		label: 'Monkey',
	},
	{
		value: 'unicorn',
		label: 'Horse',
	},
	{
		value: 'afrikaanse olifant',
		label: 'Elephant',
	},
];

storiesOf('Building blocks|Multi Select', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-multi-select
				[label]="label"
				name="multi-select"
				[error]="error"
				[options]="options"
			>
			</ui-multi-select>
		`,
		props: {
			label: text('Label', 'Animals'),
			error: text('error', ''),
			options: options,
		}
	}));
