import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

import { IconName } from '../../icon/icon.types';
import { StatusLabelType } from '../../status-label/status-label.types';

storiesOf('Components|File', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
				TranslateModule.forRoot()
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-file [label]="label" [iconBefore]="iconBefore" [url]="url">
				<ui-status-label [type]="status"></ui-status-label>
			</ui-file>
		`,
		props: {
			iconBefore: select('Icon', IconName as any, IconName.cube),
			label: text('Label', '5210_condensate_tank_support_and_details.dwg'),
			url: text('URL', '#'),
			status: select('Status Label Types', StatusLabelType as any, StatusLabelType.released),
		}
	}));
