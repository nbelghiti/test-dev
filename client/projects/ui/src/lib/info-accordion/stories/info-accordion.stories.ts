import { boolean, number, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Components|Info Accordion', module)
	.addDecorator(
		moduleMetadata({
			imports: [UIModule],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-info-accordion
				[icon]="icon"
				[title]="title"
				[withBackground]="withBackground"
				[count]="count"
			>
				<p>I'm content</p>
			</ui-info-accordion>
		`,
		props: {
			icon: select('Icon', IconName as any, IconName.users),
			title: text('Title', 'Project team'),
			withBackground: boolean('With background', false),
			count: number('Count', 0),
		},
	}))
	.add('Alternate', () => ({
		template: `
			<ui-info-accordion
				[title]="title"
				[description]="description"
				[withBackground]="withBackground"
				[count]="count"
			>
				<p>I'm content</p>
			</ui-info-accordion>
		`,
		props: {
			title: text('Title', 'Project team'),
			description: text('Description', '5-Auxiliaries / 520-Tanks'),
			withBackground: boolean('With background', true),
			count: number('Count', 3),
		},
	}));
