import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Building blocks|Textarea', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-textarea
				[placeholder]="placeholder"
				[label]="label"
				name="text-input"
				[rows]="4"
				[disabled]="disabled"
				[error]="error"
			>
			</ui-textarea>
		`,
		props: {
			label: text('Label', 'First name'),
			placeholder: text('Placeholder', 'John Doe'),
			disabled: boolean('Disabled', false),
			error: text('error', ''),
		},
	}));
