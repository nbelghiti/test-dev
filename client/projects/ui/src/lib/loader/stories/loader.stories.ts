import { boolean } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Loader', module)
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
				<ui-loader [loading]="loading"></ui-loader>
			</div>
		`,
		props: {
			loading: boolean('Loading', true),
		},
	}));
