import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-row',
	templateUrl: './row.component.html',
	styleUrls: ['./row.component.scss']
})

export class RowComponent {
	@Input() public contentBefore?: Boolean;
	@Input() public contentAfter?: Boolean;
	@Input() public spaceBetween?: Boolean;
	@Input() public alignTop?: Boolean;
	@Input() public alignMiddle?: Boolean;
	@Input() public alignBottom?: Boolean;
	@Input() public inline?: Boolean;
}
