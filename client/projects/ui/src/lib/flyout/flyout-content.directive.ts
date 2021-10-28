import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[uiFlyoutContent]'
})
export class FlyoutContentDirective {
	@Input() public class: string;

	@HostBinding('class') public get classListIfEmpty(): string {
		return `${this.class} c-flyout__content`;
	}
}
