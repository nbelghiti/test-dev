import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Key Value', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div style="padding: 25px;">
				<ui-key-value
					[label]="label"
				>
					{{value}}
				</ui-key-value>
			</div>
		`,
		props: {
			label: text('Label', 'Air quantity per fan'),
			value: text('Value', '741,9 m3/s'),
		},
	}));
