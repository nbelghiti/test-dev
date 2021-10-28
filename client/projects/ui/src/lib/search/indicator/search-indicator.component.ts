import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ui-search-indicator',
	templateUrl: './search-indicator.component.html',
	styleUrls: ['./search-indicator.component.scss']
})

export class SearchIndicatorComponent {
	@Output() public clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
