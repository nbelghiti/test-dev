import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ButtonType, IconName, UIModule } from 'adb-ui';

const actions = {
	handleClick: action('button was clicked'),
};

storiesOf('Building blocks|Button', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('Primary', () => ({
		template: `
			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.primary"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.primary"
					[iconBefore]="iconName"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div>
				<ui-button
					[type]="buttonTypes.primary"
					[iconAfter]="iconName"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>
		`,
		props: {
			handleClick: actions.handleClick,
			buttonTypes: ButtonType,
			iconName: select('Icon', IconName as any, IconName.visible),
			disabled: boolean('Disabled', false),
			fluid: boolean('Fluid size', false),
		},
	}))
	.add('Secondary', () => ({
		template: `
			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.secondary"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.secondary"
					[iconBefore]="iconName"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button with a lot of content which is getting too long pretty fast
				</ui-button>
			</div>

			<div>
				<ui-button
					[type]="buttonTypes.secondary"
					[iconAfter]="iconName"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>
		`,
		props: {
			handleClick: actions.handleClick,
			buttonTypes: ButtonType,
			iconName: select('Icon', IconName as any, IconName.visible),
			disabled: boolean('Disabled', false),
			fluid: boolean('Fluid size', false),
		},
	}))
	.add('Tertiary', () => ({
		template: `
			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.tertiary"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.tertiary"
					[iconBefore]="iconName"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div>
				<ui-button
					[type]="buttonTypes.tertiary"
					[iconAfter]="iconName"
					(click)="handleClick()"
					[disabled]="disabled"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>
			`,
			props: {
				handleClick: actions.handleClick,
				buttonTypes: ButtonType,
				iconName: select('Icon', IconName as any, IconName.visible),
				disabled: boolean('Disabled', false),
				fluid: boolean('Fluid size', false),
			},
	}))
	.add('Loading', () => ({
		template: `
			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.primary"
					(click)="handleClick()"
					[disabled]="disabled"
					[loading]="loading"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.primary"
					iconAfter="bell"
					(click)="handleClick()"
					[disabled]="disabled"
					[loading]="loading"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div style="margin-bottom: 1rem;">
				<ui-button
					[type]="buttonTypes.secondary"
					(click)="handleClick()"
					[disabled]="disabled"
					[loading]="loading"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>

			<div>
				<ui-button
					[type]="buttonTypes.tertiary"
					(click)="handleClick()"
					[disabled]="disabled"
					[loading]="loading"
					[fluid]="fluid"
				>
					button
				</ui-button>
			</div>
		`,
		props: {
			handleClick: actions.handleClick,
			buttonTypes: ButtonType,
			disabled: boolean('Disabled', true),
			loading: boolean('Loading', true),
			fluid: boolean('Fluid size', false),
		},
	}));
