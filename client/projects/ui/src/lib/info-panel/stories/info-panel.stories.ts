import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Info Panel', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div style='width: 45rem;'>
				<ui-info-panel
					[title]="title"
				>
					<span>Content</span>
				</ui-info-panel>
			</div>
		`,
		props: {
			title: text('Title', 'N - Table Cell'),
		},
	}));
