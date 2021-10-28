import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[uiCardAction]'
})

export class CardActionDirective {
	@HostBinding('class.u-margin-left-1x') public classList = true;
	@HostListener('click', ['$event']) onClick(e: MouseEvent) {
		this.handleActions(e);
	}

	private handleActions(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
	}
}
