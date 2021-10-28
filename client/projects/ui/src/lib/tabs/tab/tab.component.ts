import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-tab',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})

export class TabComponent {
	@Input() public title: string;
	@Input() public active: boolean = false;
	@Input() public count: number;
	@Input() public link: string | unknown[];
}
