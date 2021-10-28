import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonType } from '../button.types';

@Component({
	selector: 'ui-icon-button',
	templateUrl: './icon-button.component.html',
	styleUrls: ['./icon-button.component.scss']
})

export class IconButtonComponent {
	@Input() public type: ButtonType = ButtonType.primary;
	@Input() public link: string;
	@Input() public buttonTitle: string = '';
	@Input() public fluid: boolean = false;
	@Input() public border: boolean = true;

	@Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	public ButtonType: typeof ButtonType = ButtonType;
}
