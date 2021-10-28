import { RouterModule } from '@angular/router';
import { number, object, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { StepType, UIModule } from 'adb-ui';

storiesOf('Components|Steps', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('Step Item', () => ({
		template: `
			<ui-step-item
				[state]="state"
				[number]="number"
				[title]="title"
				[description]="description">
			</ui-step-item>
		`,
		props: {
			title: text('Title', 'Select a template'),
			number: number('Number', 1),
			description: text('Description', 'You can start from a pre-existing template or create your own template'),
			state: select('State', StepType as any, StepType.default),
		}
	}))
	.add('Steps', () => ({
		template: `
			<ui-steps
				[steps]="steps">
			</ui-steps>
		`,
		props: {
			steps: object('Steps', [
				{
					title: 'Select a template',
					description: 'You can start from a pre-existing template or create your own template'
				},
				{
					title: 'Configure your project',
					description: 'Add, remove, edit the data fields as you wish to adjust the template to your project'
				},
				{
					title: 'Design files',
					description: 'Create a list of all the design files required for this project'
				},
				{
					title: 'Import data',
					description: 'Import data directly from your excel file in the Asset database'
				},
			]),
		}
	}));
