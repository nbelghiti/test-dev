import { RouterModule } from '@angular/router';
import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Components|Selectable Row', module)
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
			<ui-selectable-row
				name="selectable-row"
				[value]="selectable-row-id"
				[iconBefore]="icon"
				[formControl]="selectedTemplate"
			>
				<h3>Datasheet_client.xls</h3>
			</ui-selectable-row>
		`,
		props: {
			icon: select('Icon', IconName as any, IconName.pdf),
		},
	}));
