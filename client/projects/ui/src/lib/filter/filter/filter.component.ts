import { Component, Input } from '@angular/core';

import { FlyoutState } from '../../flyout/flyout.types';

@Component({
	selector: 'ui-filter',
	templateUrl: './filter.component.html',
})

export class FilterComponent {
	@Input() public classes: string;

	public FlyoutState = FlyoutState;
}
