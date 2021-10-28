import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-key-value',
	templateUrl: './key-value.component.html',
	styleUrls: ['./key-value.component.scss']
})

export class KeyValueComponent {
	@Input() public label: string;
}
