import { select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { StatusLabelType, UIModule } from 'adb-ui';

storiesOf('Components|Status label', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-status-label [type]="status"></ui-status-label>
		`,
		props: {
			status: select('Status Label Types', StatusLabelType as any, StatusLabelType.inProgress),
		},
	})
);
