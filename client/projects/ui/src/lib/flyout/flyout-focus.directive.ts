import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { FlyoutService } from './flyout.service';
import { FlyoutState } from './flyout.types';

@Directive({
	selector: '[uiFlyoutFocus]'
})
export class FlyoutFocusDirective {
	@Input() public focusState: FlyoutState = FlyoutState.FOCUS;
	@HostBinding('class.c-flyout__focus') public flyoutContentClassName = true;

	constructor(private flyoutService: FlyoutService) {}

	@HostListener('focus')
	public handleClick(): void {
		switch (this.focusState) {
			case FlyoutState.CLOSED:
				this.flyoutService.close();
				break;
			case FlyoutState.OPEN:
				this.flyoutService.open();
				break;
			case FlyoutState.FOCUS:
				this.flyoutService.focus();
				break;
		}
	}
}
