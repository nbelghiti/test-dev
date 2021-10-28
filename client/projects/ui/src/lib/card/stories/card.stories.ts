import { RouterModule } from '@angular/router';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ButtonType, CardAlignType, IconName, UIModule } from 'adb-ui';

const actions = {
	handleClick: action('clicked has been triggered')
};

storiesOf('Components|Card', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('Default', () => ({
		template: `
			<div style="width: 35rem;">
				<ui-card [imageSrc]="imageSrc" [align]="align" [loading]="loading">
					<h3>Title</h3>
					<p>This is a card.</p>
				</ui-card>
			</div>
		`,
		props: {
			imageSrc: text('Image URL', 'https://picsum.photos/500'),
			align: select('Align', CardAlignType as any, CardAlignType.start),
			loading: boolean('Loading', false),
		},
	}))
	.add('With actions', () => ({
		template: `
			<div style="width: 35rem;">
				<ui-card [align]="align" link="https://google.com">
					<h3>Title</h3>
					<p>This is a card.</p>

					<ui-icon-button uiCardAction (clicked)="handleClick('delete')" [type]="ButtonType.secondary" [border]="false">
						<ui-icon [name]="IconName.trash"></ui-icon>
					</ui-icon-button>

					<ui-icon-button uiCardAction (clicked)="handleClick('edit')" [border]="false">
						<ui-icon [name]="IconName.pen"></ui-icon>
					</ui-icon-button>
				</ui-card>
			</div>
		`,
		props: {
			handleClick: actions.handleClick,
			CardAlignType: CardAlignType,
			IconName: IconName,
			ButtonType: ButtonType,
			align: select('Align', CardAlignType as any, CardAlignType.start)
		},
	}));
