import { Component, Input, OnInit } from '@angular/core';

import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-info-accordion',
	templateUrl: './info-accordion.component.html',
	styleUrls: ['./info-accordion.component.scss']
})

export class InfoAccordionComponent implements OnInit {
	@Input() public icon: IconName;
	@Input() public title: string;
	@Input() public description?: string;
	@Input() public count?: number;
	@Input() public withBackground?: boolean;
	@Input() public withSpacing?: boolean = true;
	@Input() public initialOpen?: boolean = false;

	public isOpen: boolean = false;

	public ngOnInit(): void {
		this.isOpen = this.initialOpen;
	}

	public toggleAccordion() {
		this.isOpen = !this.isOpen;
	}
}
