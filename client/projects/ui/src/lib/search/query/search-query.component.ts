import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconName, IconSize } from '../../icon/icon.types';

@Component({
	selector: 'ui-search-query',
	templateUrl: './search-query.component.html',
	styleUrls: ['./search-query.component.scss'],
})

export class SearchQueryComponent {
	@Input() public text: string;
	@Input() public tag: string;
	@Output() public clicked: EventEmitter<any> = new EventEmitter();

	public IconSize: typeof IconSize = IconSize;
	public IconName: typeof IconName = IconName;

	public handleClick = () => {
		this.clicked.emit({ query: this.text, project: this.tag });
	}
}
