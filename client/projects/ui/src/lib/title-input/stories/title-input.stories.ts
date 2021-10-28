import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UIModule } from 'adb-ui';

import { TitleInputLevel } from '../title-input.types';

storiesOf('Building blocks|Title Input', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-title-input [placeholder]="placeholder" name="large-input" [level]="level" [error]="error"></ui-title-input>
		`,
		props: {
			placeholder: text('Placeholder', 'New project'),
			error: text('Error', ''),
			level: select('Size', TitleInputLevel, TitleInputLevel.default),
		},
	}));
