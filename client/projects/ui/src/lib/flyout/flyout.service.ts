import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { FlyoutState } from './flyout.types';

@Injectable()
export class FlyoutService {
	public state$: ReplaySubject<FlyoutState> = new ReplaySubject<FlyoutState>(1);

	public close(): void {
		this.state$.next(FlyoutState.CLOSED);
	}

	public open(): void {
		this.state$.next(FlyoutState.OPEN);
	}

	public toggle(): void {
		this.state$.next(FlyoutState.TOGGLE);
	}

	public focus(): void {
		this.state$.next(FlyoutState.FOCUS);
	}
}
