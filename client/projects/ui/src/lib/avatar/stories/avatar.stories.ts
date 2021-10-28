import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';


storiesOf('Building blocks|Avatar', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-avatar [name]="name" [compact]="compact"></ui-avatar>
		`,
		props: {
			name: text('User name', 'John Doe'),
			compact: boolean('Compact', false),
		},
	}));
