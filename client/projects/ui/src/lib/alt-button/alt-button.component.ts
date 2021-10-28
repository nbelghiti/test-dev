import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconName, IconSize } from '../icon/icon.types';

@Component({
	selector: 'ui-alt-button',
	templateUrl: './alt-button.component.html',
	styleUrls: ['./alt-button.component.scss']
})

export class AltButtonComponent {
	@Input() public link?: string;
	@Input() public iconBefore?: IconName;
	@Input() public iconAfter?: IconName;
	@Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	public IconSize: typeof IconSize = IconSize;
}
