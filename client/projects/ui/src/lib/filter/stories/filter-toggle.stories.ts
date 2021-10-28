import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { FilterToggleBackground, UIModule } from 'adb-ui';

storiesOf('Building blocks|Filter toggle', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-filter-toggle
				[label]='label'
				[background]='background'
				[borderless]='borderless'
				[inline]='inline'
				[compact]='compact'
			>
			</ui-filter-toggle>
		`,
		props: {
			label: text('Label', 'Label'),
			borderless: boolean('Borderless', false),
			inline: boolean('inline', false),
			compact: boolean('compact', false),
			background: select('Background', FilterToggleBackground as any, FilterToggleBackground.default),
		}
	}));
