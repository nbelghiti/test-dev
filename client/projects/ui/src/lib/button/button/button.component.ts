import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonType } from '../button.types';

@Component({
	selector: 'ui-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
	@Input() public type: ButtonType;
	@Input() public link?: string;
	@Input() public disabled?: boolean = false;
	@Input() public loading?: boolean = false;
	@Input() public fluid?: boolean = false;
	@Input() public iconBefore?: string;
	@Input() public iconAfter?: string;
	@Input() public classes?: string;
	@Input() public buttonTitle: string = '';

	@Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
