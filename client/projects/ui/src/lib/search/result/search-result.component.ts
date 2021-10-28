import { FocusableOption } from '@angular/cdk/a11y';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'ui-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss'],
})

export class SearchResultComponent implements FocusableOption {
	@Input() public url: string;
	@Input() public content: InnerHTML;
	@Input() public breadcrumb: string;
	@Input() public navigate: boolean;

	constructor(public element: ElementRef) {}

	public focus(): void {
		const focusableEl = this.element.nativeElement.firstElementChild;
		focusableEl.focus();
	}
}
