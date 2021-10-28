import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[uiExpansionPanelAction]'
})

export class ExpansionPanelActionDirective {
	constructor(
		private el: ElementRef
	) {
		this.el.nativeElement.classList.add('u-margin-left-1x');
	}

	@HostListener('click', ['$event']) onClick(e: MouseEvent) {
		this.handleActions(e);
	}

	private handleActions(e: MouseEvent): void {
		e.preventDefault();
		e.stopPropagation();
	}
}
