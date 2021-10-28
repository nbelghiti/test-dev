import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, ListType, StatusLabelType, UIModule } from 'adb-ui';

const listItems = [
	{
		text: 'Item 1',
		icon: IconName.book,
	},
	{
		text: 'Item 2',
		icon: IconName.clock,
	},
	{
		text: 'Item 3',
		icon: IconName.bell,
	},
];

storiesOf('Components|List', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
				TranslateModule.forRoot()
			],
		}),
	)
	.add('Info items', () => ({
		template: `
			<ui-list [type]="listType">
				<ng-container *ngFor="let item of listItems">
					<ui-info-item *uiListItem [text]="item.text" [icon]="item.icon"></ui-info-item>
				</ng-container>
			</ui-list>
		`,
		props: {
			listItems: listItems,
			listType: select('ListType', ListType as any, ListType.UNORDERED),
		},
	}))
	.add('Files', () => ({
		template: `
			<ui-list [type]="listType" [withSpacing]="false" [withBorder]="true">
				<ui-file *uiListItem [label]="label" [iconBefore]="iconBefore" [url]="url">
					<ui-status-label [type]="status"></ui-status-label>
				</ui-file>

				<ui-file *uiListItem [label]="label" [iconBefore]="iconBefore" [url]="url">
					<ui-status-label [type]="status"></ui-status-label>
				</ui-file>

				<ui-file *uiListItem [label]="label" [iconBefore]="iconBefore" [url]="url">
					<ui-status-label [type]="status"></ui-status-label>
				</ui-file>

				<ui-file *uiListItem [label]="label" [iconBefore]="iconBefore" [url]="url">
					<ui-status-label [type]="status"></ui-status-label>
				</ui-file>

				<ui-file *uiListItem [label]="label" [iconBefore]="iconBefore" [url]="url">
					<ui-status-label [type]="status"></ui-status-label>
				</ui-file>
			</ui-list>
		`,
		props: {
			iconBefore: select('Icon', IconName as any, IconName.cube),
			label: text('Label', '5210_condensate_tank_support_and_details.dwg'),
			url: text('URL', '#'),
			status: select('Status Label Types', StatusLabelType as any, StatusLabelType.released),
			listType: select('ListType', ListType as any, ListType.UNORDERED),
		}
	}))
	.add('Spec sheet', () => ({
		template: `
			<ui-list [type]="listType" [withSpacing]="false" [withBorder]="true">
				<ui-key-value
					*uiListItem
					label="Air quantity per fan"
				>
					741,9 m3/s
				</ui-key-value>

				<ui-key-value
					*uiListItem
					label="Static pressure at design air density"
				>
					83,6 Pa
				</ui-key-value>

				<ui-key-value
					*uiListItem
					label="Min pressure margin At fixed resistive circuit (API)"
				>
					21 %
				</ui-key-value>

				<ui-key-value
					*uiListItem
					label="Actual pressure margin (at fixed resistive circuit - API)"
				>
					24,0 %
				</ui-key-value>

				<ui-key-value
					*uiListItem
					label="Actual pressure margin (at fixed blade angle)"
				>
					46,0 %
				</ui-key-value>
			</ui-list>
		`
	}));

