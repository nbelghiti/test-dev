import { Component, Input } from '@angular/core';

import { ButtonType } from '../../button/button.types';
import { IconName } from '../../icon/icon.types';
import { IBreadcrumbItem } from '../breadcrumb.types';

@Component({
	selector: 'ui-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent {
	@Input() public items: IBreadcrumbItem[] = [];
	@Input() public editLink: string[] = null;
	@Input() public first?: boolean = false;
	@Input() public border?: boolean = false;

	public IconName: typeof IconName = IconName;
	public ButtonType: typeof ButtonType = ButtonType;
}
