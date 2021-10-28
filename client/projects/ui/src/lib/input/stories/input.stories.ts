import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Building blocks|Input', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-input
				[placeholder]="placeholder"
				[label]="label"
				name="text-input"
				type="text"
				[error]="error"
				[icon]="icon"
			>
			</ui-input>
		`,
		props: {
			placeholder: text('Placeholder', 'John Doe'),
			label: text('Label', 'First name'),
			error: text('Error', ''),
			icon: select('Icon', IconName as any, IconName.user),
		},
	}));
