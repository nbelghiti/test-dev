import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Building blocks|Switch', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-switch
				[trueValue]="trueValue"
				[falseValue]="falseValue"
			></ui-switch>
		`,
		props: {
			trueValue: text('True label', 'On'),
			falseValue: text('False label', 'Off'),
		}
	}));
