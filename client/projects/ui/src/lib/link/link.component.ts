import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LinkType } from './link.types';


@Component({
	selector: 'ui-link',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss']
})

export class LinkComponent implements OnInit {
	@Input() public type?: LinkType;
	@Input() public label: string;
	@Input() public url: string;
	@Input() public iconBefore: string;
	@Input() public iconAfter: string;
	@Output() public clicked: EventEmitter<Event> = new EventEmitter<Event>();

	public hasClick: boolean = false;

	public ngOnInit(): void {
		this.hasClick = this.clicked.observers.length > 0;
	}
}
