import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { resetHeaderInfo, setHeaderInfo } from '../store/context.actions';
import { HEADER_SELECTOR } from '../store/context.selectors';
import { IContextState, IHeaderInfo } from '../store/context.types';

@Injectable()
export class ContextFacade {
	constructor(
		private store: Store<{ context: IContextState }>
	) {}

	public header$: Observable<IHeaderInfo> = this.store.pipe(
		select(HEADER_SELECTOR),
	);

	public setHeaderInfo = (info: IHeaderInfo) => this.store.dispatch(setHeaderInfo({ info }));
	public resetHeaderInfo = () => this.store.dispatch(resetHeaderInfo());
}
