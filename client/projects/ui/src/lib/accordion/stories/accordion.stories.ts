import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

import { ExpansionPanelLevel } from '../expansion-panel/expansion-panel.types';

storiesOf('Components|Accordion', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('Expansion panel', () => ({
		template: `
			<ui-expansion-panel
				[title]="title"
				[expanded]="expanded"
				(toggle)="expanded = !expanded"
				[level]="level"
				[withSpacing]="withSpacing"
			>
				content
			</ui-expansion-panel>
		`,
		props: {
			level: select('Level', ExpansionPanelLevel as any, ExpansionPanelLevel.primary),
			title: text('Title', '520-Tanks'),
			expanded: boolean('Expanded', false),
			withSpacing: boolean('With Spacing', true),
		}
	}))
	.add('accordion', () => ({
		template: `
			<ui-accordion>
				<ui-expansion-panel title="520-Tanks" [level]="level.primary" [withSpacing]="false">
					<ui-accordion>
						<ui-expansion-panel title="520-Tanks" [level]="level.secondary" [withSpacing]="false">
							<ui-accordion>
								<ui-expansion-panel title="520-Tanks" [level]="level.tertiary">
									content
								</ui-expansion-panel>

								<ui-expansion-panel title="520-Tanks" [level]="level.tertiary">
									content
								</ui-expansion-panel>

								<ui-expansion-panel title="520-Tanks" [level]="level.tertiary">
									content
								</ui-expansion-panel>
							</ui-accordion>
						</ui-expansion-panel>

						<ui-expansion-panel title="520-Tanks" [level]="level.secondary">
							content
						</ui-expansion-panel>

						<ui-expansion-panel title="520-Tanks" [level]="level.secondary">
							content
						</ui-expansion-panel>
					</ui-accordion>
				</ui-expansion-panel>

				<ui-expansion-panel title="520-Tanks" [level]="level.primary">
					content
				</ui-expansion-panel>

				<ui-expansion-panel title="520-Tanks" [level]="level.primary">
					content
				</ui-expansion-panel>

				<ui-expansion-panel title="520-Tanks" [level]="level.primary">
					content
				</ui-expansion-panel>
			</ui-accordion>
		`,
		props: {
			level: ExpansionPanelLevel,
		}
	}));
