import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

const actions = {
	handleClick: action('button was clicked'),
};

storiesOf('Building blocks|Alt Button', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('Default', () => ({
		template: `
			<div style="margin-bottom: 1rem;">
				<ui-alt-button
					(click)="handleClick()"
				>
					New supplier
				</ui-alt-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-alt-button
					(click)="handleClick()"
					[iconBefore]="iconName"
				>
					With icon before
				</ui-alt-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-alt-button
					(click)="handleClick()"
					[iconAfter]="iconName"
				>
					With icon after
				</ui-alt-button>
			</div>
		`,
		props: {
			handleClick: actions.handleClick,
			iconName: select('Icon', IconName as any, IconName.plus),
		},
	}));
