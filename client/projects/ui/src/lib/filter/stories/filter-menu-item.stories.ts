import { RouterModule } from '@angular/router';
import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Building blocks|Filter Menu Item', module)
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
			<ui-filter-menu-item [label]="label" [active]="active"></ui-filter-menu-item>
		`,
		props: {
			label: text('Label', 'Label'),
			active: boolean('Active', false),
		},
	}));
