import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

import { ButtonType } from '../button.types';

const actions = {
	handleClick: action('clicked has been triggered')
};

storiesOf('Building blocks|Icon button', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('Default', () => ({
		template: `
			<ui-icon-button (click)="handleClick()" [border]="border" [fluid]="fluid">
				<ui-icon name={{name}}></ui-icon>
			</ui-icon-button>
		`,
		props: {
			handleClick: actions.handleClick,
			name: select('Icon', IconName as any, IconName.visible),
			border: boolean('With border', true),
			fluid: boolean('Fluid', false)
		},
	}))
	.add('Secondary', () => ({
		template: `
			<ui-icon-button (click)="handleClick()" [type]="ButtonType.secondary" [border]="border" [fluid]="fluid">
				<ui-icon name={{name}}></ui-icon>
			</ui-icon-button>
		`,
		props: {
			handleClick: actions.handleClick,
			name: select('Icon', IconName as any, IconName.visible),
			ButtonType: ButtonType,
			border: boolean('With border', true),
			fluid: boolean('Fluid', false)
		},
	}))
	.add('Tertiary', () => ({
		template: `
			<ui-icon-button (click)="handleClick()" [type]="ButtonType.tertiary" [border]="border" [fluid]="fluid">
				<ui-icon name={{name}}></ui-icon>
			</ui-icon-button>
		`,
		props: {
			handleClick: actions.handleClick,
			name: select('Icon', IconName as any, IconName.visible),
			ButtonType: ButtonType,
			border: boolean('With border', true),
			fluid: boolean('Fluid', false)
		},
	}));
