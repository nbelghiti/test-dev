import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {
	@Input() public trueValue: string = 'On';
	@Input() public falseValue: string = 'Off';
	@Input() public active: boolean = false;
}
