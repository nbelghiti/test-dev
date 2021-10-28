import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { FlyoutService } from './flyout.service';
import { FlyoutState } from './flyout.types';

@Directive({
	selector: '[uiFlyoutToggle]'
})
export class FlyoutToggleDirective {
	@Input() public toggleState: FlyoutState = FlyoutState.TOGGLE;
	@HostBinding('class.c-flyout__toggle') public flyoutContentClassName = true;

	constructor(private flyoutService: FlyoutService) { }

	@HostListener('click')
	public handleClick(): void {
		switch (this.toggleState) {
			case FlyoutState.CLOSED:
				this.flyoutService.close();
				break;
			case FlyoutState.OPEN:
				this.flyoutService.open();
				break;
			case FlyoutState.TOGGLE:
				this.flyoutService.toggle();
				break;
		}
	}
}
