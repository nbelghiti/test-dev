import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Components|Info Message', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
		<ui-info-message
			[icon]="icon"
		>
			<span>A new update is available for \"Cofimco\"</span>

			<ui-link
				label="Update"
				type="LinkType.info"
				url="/"
			></ui-link>
		</ui-info-message>
		`,
		props: {
			icon: select('Icon', IconName as any, IconName.infoCircle),
		},
	}));
