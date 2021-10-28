import { FocusKeyManager } from '@angular/cdk/a11y';
import { Component, EventEmitter, HostListener, Input, OnChanges, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

import { IconName } from '../../icon/icon.types';
import { SearchResultComponent } from '../result/search-result.component';
import { ISearchResultItem, SearchResultType } from '../search.types';

@Component({
	selector: 'ui-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnChanges {
	@ViewChildren(SearchResultComponent) items: QueryList<SearchResultComponent>;

	@Input() public results: ISearchResultItem[];
	@Input() public type: SearchResultType;
	@Input() public active: boolean = false;
	@Input() public navigate: boolean = true;

	@Output() public selectResult: EventEmitter<unknown> = new EventEmitter<unknown>();

	public IconName = IconName;
	public SearchResultType = SearchResultType;

	private keyManager: FocusKeyManager<SearchResultComponent>;

	@HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
		this.keyManager.onKeydown(event);
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if ((changes.results || changes.active) && this.active) {
			this.listenForItemChanges();
		}
	}

	private listenForItemChanges() {
		if (this.items) {
			this.keyManager = new FocusKeyManager(this.items).withWrap();

			// setTimeout is used because the focus state of an element in the template will be changed
			setTimeout(() => {
				this.keyManager.setFirstItemActive();
			});
		}
	}
}
