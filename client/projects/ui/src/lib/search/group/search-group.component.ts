import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-search-group',
	templateUrl: './search-group.component.html',
	styleUrls: ['./search-group.component.scss'],
})

export class SearchGroupComponent {
	@Input() public title: string;
}
