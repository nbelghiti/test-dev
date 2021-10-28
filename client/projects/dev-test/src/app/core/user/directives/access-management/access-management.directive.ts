import { Directive, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { AccessManagementService } from '../../services/access-management/access-management.service';
import { PermissionActions } from '../../services/permissions/permissions.types';

@Directive({
	selector: '[adbAction]'
})
export class AccessManagementDirective implements OnChanges, OnDestroy {
	@Input() adbAction: PermissionActions;
	@Input() packageId: string = null;

	private adbAction$: Subject<PermissionActions> = new Subject<PermissionActions>();
	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private accessManagementService: AccessManagementService,
	) {
		this.adbAction$
			.pipe(
				switchMap((action: PermissionActions) => {
					return this.accessManagementService.checkPermission(action, this.packageId);
				}),
				takeUntil(this.destroyed$),
			)
			.subscribe((authorized: boolean) => {
				setTimeout(() => {
					this.viewContainer.clear();

					if (authorized) {
						this.viewContainer.createEmbeddedView(this.templateRef);
					}
				});
			});
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.adbAction) {
			this.adbAction$.next(changes.adbAction.currentValue);
		}
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
