import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Search Input', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-search-input [placeholder]="placeholder" [compact]="compact" name="search-input"></ui-search-input>
		`,
		props: {
			placeholder: text('Placeholder', 'Search a data field... '),
			compact: boolean('Compact', false),
		},
	}));
