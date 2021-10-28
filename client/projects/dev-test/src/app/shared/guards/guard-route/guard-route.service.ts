// Move to shared
import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	Router,
	RouterStateSnapshot
} from '@angular/router';
import { isNil, propOr } from 'ramda';
import { Observable } from 'rxjs';

import { IHandleConfirm } from './guard-route.types';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<IHandleConfirm> { // see comment
	constructor(public router: Router) { }

	canDeactivate(
		component: IHandleConfirm,
		_route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): Observable<boolean> | boolean {
		if (isNil(component)) {
			return true;
		}

		const canLeave: boolean = !propOr(false, 'isChanged', component) && propOr(false, 'isSaved', component);

		if (!canLeave && component.handleConfirm) {
			component.handleConfirm(() => {
				this.router.navigate([nextState.url], {
					queryParams: nextState.root.queryParams,
					fragment: nextState.root.fragment
				});
			});
		}

		return canLeave;
	}
}
