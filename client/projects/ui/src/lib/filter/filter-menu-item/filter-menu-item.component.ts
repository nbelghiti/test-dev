import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-filter-menu-item',
	templateUrl: './filter-menu-item.component.html',
	styleUrls: ['./filter-menu-item.component.scss']
})

export class FilterMenuItemComponent {
	@Input() public label: string = 'Label';
	@Input() public active: boolean;
	@Input() public link: any;
	@Input() public	queryParams: { [key: string]: string };
	@Input() public clickHandler: () => void = () => {};
}
