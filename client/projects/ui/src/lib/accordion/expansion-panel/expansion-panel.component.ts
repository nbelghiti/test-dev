import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output,
	ViewChild
} from '@angular/core';

import { ButtonType } from '../../button/button.types';
import { IconName, IconSize } from '../../icon/icon.types';

import { ExpansionPanelLevel } from './expansion-panel.types';

@Component({
	selector: 'ui-expansion-panel',
	templateUrl: './expansion-panel.component.html',
	styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
	@ViewChild('actions', { static: false }) actions = null;
	@Input() public expanded = false;
	@Input() public title: string;
	@Input() public level: ExpansionPanelLevel = ExpansionPanelLevel.primary;
	@Input() public withSpacing: boolean = true;
	@Output() public toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

	public ExpansionPanelLevel: typeof ExpansionPanelLevel = ExpansionPanelLevel;
	public IconName: typeof IconName = IconName;
	public IconSize: typeof IconSize = IconSize;
	public ButtonType: typeof ButtonType = ButtonType;
	public hasActions: boolean = false;

	constructor(
		private ref?: ChangeDetectorRef
	) {}

	public toggleExpansion(state: boolean): void {
		this.toggle.emit(state);
	}
}
