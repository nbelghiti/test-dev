import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Upload', module)
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
			<ui-upload></ui-upload>
		`,
	}));
