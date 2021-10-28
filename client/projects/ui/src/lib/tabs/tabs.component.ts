import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
	selector: 'ui-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
})

export class TabsComponent implements AfterContentInit {
	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
	@Output() selectTab: EventEmitter<number> = new EventEmitter<number>();
	@Input() withSpacing: boolean = true;

	ngAfterContentInit() {
		setTimeout(() => {
			this.initTabs();
		});
	}

	initTabs(): void {
		// get all active tabs
		const activeTabs = this.tabs.filter((tab) => tab.active);

		// if there is no active tab set, activate the first
		if (activeTabs.length === 0) {
			this.selectTab.emit(0);
		}
	}
}
