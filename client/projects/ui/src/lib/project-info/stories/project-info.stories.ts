import { TranslateModule } from '@ngx-translate/core';
import { object, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

const listItems = [
	{
		text: 'Iberdrola',
		icon: IconName.user,
	},
	{
		text: 'Topolobampo',
		icon: IconName.marker,
	},
	{
		text: 'XL [> 40 modules]',
		icon: IconName.expand,
	},
	{
		text: 'A-frame',
		icon: IconName.industry,
	},
];

storiesOf('Components|Project Info', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				TranslateModule.forRoot(),
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div style="padding: 25px;">
				<ui-project-info
					[imageSrc]="imageSrc"
					[title]="title"
					[project]="project"
				>
					<ui-list>
						<ng-container *ngFor="let item of listItems">
							<ui-info-item
								*uiListItem
								[text]="item.text"
								[icon]="item.icon">
							</ui-info-item>
						</ng-container>
					</ui-list>
				</ui-project-info>
			</div>
		`,
		props: {
			listItems: listItems,
			title: text('Title', 'Branch started: 18-09-2019 11:38'),
			imageSrc: text('Image URL', 'https://picsum.photos/500'),
			project: object('Project', {
				general: {
					VaultNumber: 'WB1-101-000501-DSH0010',
				}
			}),
		},
	}));
