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

storiesOf('Building blocks|Select', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-select
				[label]="label"
				name="text-input"
				type="text"
				[error]="error"
				[options]="options"
			>
			</ui-select>
		`,
		props: {
			label: text('Label', 'First name'),
			error: text('error', ''),
			options: options,
		}
	}));
