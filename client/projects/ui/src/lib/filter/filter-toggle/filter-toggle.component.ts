import { Component, Input } from '@angular/core';

import { FilterToggleBackground } from './filter-toggle.component.types';

@Component({
	selector: 'ui-filter-toggle',
	templateUrl: './filter-toggle.component.html',
	styleUrls: ['./filter-toggle.component.scss']
})

export class FilterToggleComponent {
	@Input() label: string;
	@Input() currentOption: string = '- All';
	@Input() inline?: boolean = false;
	@Input() borderless?: boolean = false;
	@Input() compact?: boolean = false;
	@Input() large?: boolean = false;
	@Input() background?: FilterToggleBackground = FilterToggleBackground.default;
}
