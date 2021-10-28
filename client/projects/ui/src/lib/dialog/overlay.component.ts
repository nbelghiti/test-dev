import { Component, ElementRef, HostBinding, HostListener } from '@angular/core';

import { DialogService } from './dialog.service';

@Component({
	selector: 'ui-overlay',
	template: '',
	styleUrls: [
		'./overlay.component.scss',
	],
})
export class OverlayComponent {
	@HostBinding('class') public className = 'c-overlay';

	constructor(
		private dialogService: DialogService,
		private ref: ElementRef,
	) {}

	@HostListener('click', ['$event']) public onClick(e: MouseEvent) {
		const dialog = this.ref.nativeElement.querySelector('.c-dialog');

		if (dialog && (e.target === dialog || dialog.contains(e.target))) {
			return;
		}

		this.dialogService.closeActiveDialog();
	}
}
