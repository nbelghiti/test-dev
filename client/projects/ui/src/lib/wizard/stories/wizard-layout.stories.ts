import { boolean, number, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

const exampleSteps = [{
	title: 'First step',
	description: 'This is the first step',
}, {
	title: 'Second step',
	description: 'This is the second step',
}, {
	title: 'Third step',
	description: 'This is the third step',
}];

storiesOf('Components|Wizard-layout', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	).add('default', () => ({
		template: `
			<div class="l-root">
				<main class="l-root__content">
					<ui-wizard-layout [showSteps]="showSteps" [steps]="steps" [activeIndex]="activeIndex">
						<ng-container ngProjectAs="header">
							<h1>{{ header }}</h1>
						</ng-container>
						<ng-container ngProjectAs="body">
							<p>{{ body }}</p>
						</ng-container>
						<ng-container ngProjectAs="footer">
							<div>{{ footer }}</div>
						</ng-container>
					</ui-wizard-layout>
				</main>
			</div>
		`,
		props: {
			header: text('Wizard header', 'This is the header of the wizard'),
			body: text('Wizard body', 'This is the body of the wizard'),
			footer: text('Wizard footer', 'This is the footer of the wizard'),
			showSteps: boolean('Show steps', true),
			steps: exampleSteps,
			activeIndex: number('Active step', 0),
		},
	}));
