import { Component } from '@angular/core';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { DialogService, UIModule } from 'adb-ui';

@Component({
	selector: 'ui-hello-world-dialog',
	template: `
		<div class="c-dialog">
			<div class="c-dialog__content">
				<div class="c-dialog__title">
					<ui-heading>
						<h2>Hello world!</h2>
					</ui-heading>
				</div>
			</div>

			<div class="c-dialog__actions">
				<div class="c-dialog__action-item">
					<ui-button (click)="close()">Close me</ui-button>
				</div>
			</div>
		</div>
	`,
})

class HelloWorldDialogComponent {
	constructor(
		private dialogService: DialogService,
	) {}

	public closeDialog: () => void;

	public close(): void {
		this.dialogService.closeActiveDialog();
	}
}

@Component({
	selector: 'ui-dialog-demo',
	template: `
		<ui-button (click)="openDialog()">
			Open dialog
		</ui-button>
	`,
})

class DialogDemoComponent {
	constructor(
		private dialogService: DialogService,
	) {}

	public openDialog(): void {
		this.dialogService.openDialog({
			dialog: HelloWorldDialogComponent,
		});
	}
}

storiesOf('Components|Dialog', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
			declarations: [
				DialogDemoComponent,
				HelloWorldDialogComponent,
			],
			entryComponents: [
				HelloWorldDialogComponent,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div style='width: 35rem;'>
				<ui-dialog-demo></ui-dialog-demo>
			</div>
		`,
	}))
	.add('confirm', () => ({
		template: `
			<div style='width: 35rem;'>
				<ui-confirm>Publish changes</ui-confirm>
			</div>
		`,
	}));
