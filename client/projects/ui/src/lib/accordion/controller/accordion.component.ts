import { AfterViewInit, Component, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { equals } from 'ramda';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';

@Component({
	selector: 'ui-accordion',
	templateUrl: './accordion.component.html',
})

export class AccordionComponent implements AfterViewInit, OnDestroy {
	@ContentChildren(ExpansionPanelComponent) public panelsQL: QueryList<ExpansionPanelComponent>;

	private currentPanels: ExpansionPanelComponent[] = [];
	private panelSubs: Subscription[] = [];
	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public ngAfterViewInit(): void {
		this.processPanels();

		this.panelsQL.changes
			.pipe(
				takeUntil(this.destroyed$)
			)
			.subscribe(() => {
				this.processPanels();
			});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	private processPanels(): void {
		const newPanels = this.panelsQL.toArray();

		if (equals(newPanels, this.currentPanels)) {
			return;
		}

		this.panelSubs.forEach((sub: Subscription) => sub.unsubscribe());

		this.panelSubs = this.panelsQL.toArray().map((panel: ExpansionPanelComponent) => {
			return panel.toggle
				.pipe(
					takeUntil(this.destroyed$)
				)
				.subscribe(() => this.openPanels(panel));
		});
	}

	private openPanels(panel: ExpansionPanelComponent): void {
		if (panel) {
			panel.expanded = !panel.expanded;
		}
	}
}
