
import { RouterModule } from '@angular/router';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Settings indicator', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-settings-indicator [link]="[]"></ui-settings-indicator>
		`,
	}));
