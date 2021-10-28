import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ui-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
	@Output() public clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
