
import { RouterModule } from '@angular/router';
import { select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Building blocks|Link', module)
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
			<ui-link label="Link">
			</ui-link>
		`,
	}))
	.add('with icon before', () => ({
		template: `
			<ui-link
				label="Link"
				[iconBefore]="iconName"
			>
			</ui-link>
		`,
		props: {
			iconName: select('Icon', IconName as any, IconName.plus),
		},
	}));
