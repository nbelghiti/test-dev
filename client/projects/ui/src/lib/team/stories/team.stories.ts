import { TranslateModule } from '@ngx-translate/core';
import { object, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Team', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				TranslateModule.forRoot(),
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-team
				[title]='title'
				[team]='team.members'
			></ui-team>
		`,
		props: {
			title: text('Team title', 'Management'),
			team: object('Team', {
				members: [
					{
						name: 'John Doe',
						type: 'Head engineer',
						myself: true,
					},
					{
						name: 'John Doe',
						type: 'Engineer',
						myself: false,
					},
				],
			}),
		},
	}));
