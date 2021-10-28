import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Components|Info Link', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterTestingModule,
			],
			providers: [
				{
					provide: APP_BASE_HREF,
					useValue: '/',
				},
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-info-link
				[icon]="icon"
				[title]="title"
			>
			</ui-info-link>
		`,
		props: {
			icon: select('Icon', IconName as any, IconName.cube),
			title: text('Title', 'Design files'),
		},
	}));
