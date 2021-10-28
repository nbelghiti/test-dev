import { RouterModule } from '@angular/router';
import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { CardAlignType, UIModule } from 'adb-ui';

storiesOf('Components|Selectable Card', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div style='width: 35rem;'>
				<ui-selectable-card [imageSrc]="imageSrc" [align]="align" [loading]="loading">
					<h3>Title</h3>
					<p>This is a card.</p>
				</ui-selectable-card>
			</div>
		`,
		props: {
			imageSrc: text('Image URL', 'https://picsum.photos/500'),
			align: select('Align', CardAlignType as any, CardAlignType.start),
			loading: boolean('Loading', false),
		},
	}))
	.add('content at bottom', () => ({
		template: `
			<div style='width: 35rem;'>
				<ui-selectable-card [imageSrc]="imageSrc" [align]="CardAlignType.end">
					<h3>Title</h3>
					<p>This is a card.</p>
				</ui-selectable-card>
			</div>
		`,
		props: {
			imageSrc: text('Image URL', 'https://picsum.photos/500'),
			CardAlignType: CardAlignType,
		},
	}))
	.add('space between content', () => ({
		template: `
			<div style='width: 35rem;'>
				<ui-selectable-card>
					<h3>Title</h3>
					<p>This is a card.</p>

					<div actions>
						Extra content at the bottom
					</div>
				</ui-selectable-card>
			</div>
		`,
		props: {
			CardAlignType: CardAlignType,
		},
	}));
