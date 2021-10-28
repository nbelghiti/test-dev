import { action } from '@storybook/addon-actions';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { FlyoutState, UIModule } from 'adb-ui';

const actions = {
	handleClick: action('item was clicked'),
	handleFlyoutOpened: action('flyout opened'),
	handleFlyoutClosed: action('flyout closed'),
};

storiesOf('Flyout', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div uiFlyout (open)="handleFlyoutOpened()" (close)="handleFlyoutClosed()">
				<ui-button uiFlyoutToggle>Toggle menu</ui-button>

				<ui-list uiFlyoutContent>
					<span *uiListItem uiFlyoutToggle [toggleState]="CLOSED" (click)="handleClick('item 1')">Item 1</span>
					<span *uiListItem uiFlyoutToggle [toggleState]="CLOSED" (click)="handleClick('item 2')">Item 2</span>
					<span *uiListItem uiFlyoutToggle [toggleState]="CLOSED" (click)="handleClick('item 3')">Item 3</span>
				</ui-list>
			</div>
		`,
		props: {
			CLOSED: FlyoutState.CLOSED,
			handleClick: actions.handleClick,
			handleFlyoutOpened: actions.handleFlyoutOpened,
			handleFlyoutClosed: actions.handleFlyoutClosed,
		},
	}));
