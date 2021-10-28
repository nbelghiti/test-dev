import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Components|Info Item', module)
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
				<ui-info-item [icon]="icon" [text]="text"></ui-info-item>
			</div>
		`,
		props: {
			icon: select('Icon', IconName as any, IconName.cube),
			text: text('Text', 'Design files'),
		},
	}));
