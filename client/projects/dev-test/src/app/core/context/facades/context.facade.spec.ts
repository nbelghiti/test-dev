import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { resetHeaderInfo, setHeaderInfo } from '../store/context.actions';
import { aHeaderInfoMock } from '../store/context.mock';
import { IContextState, IHeaderInfo } from '../store/context.types';

import { ContextFacade } from './context.facade';

describe('core: context: facade', () => {
	let facade: ContextFacade;
	let store: MockStore<IContextState>;
	const initialState = {
		context: {
			header: aHeaderInfoMock
		}
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ContextFacade,
				provideMockStore<{ context: IContextState }>({ initialState })
			]
		});

		facade = TestBed.get(ContextFacade);
		store = TestBed.get(Store);
	});

	describe('header$', () => {
		it('should hold a header$ observable', (done) => {
			const sub = facade.header$.subscribe((header: IHeaderInfo) => {
				expect(header).toEqual(initialState.context.header);

				setTimeout(() => sub.unsubscribe());

				done();
			});
		});
	});

	describe('actions', () => {
		it('should get a team', () => {
			const id = 'id-123';
			const spy = jest.spyOn(store, 'dispatch');
			const action = setHeaderInfo({ info: aHeaderInfoMock });

			facade.setHeaderInfo(aHeaderInfoMock);

			expect(spy).toHaveBeenCalledWith(action);
		});

		it('should update the team', () => {
			const spy = jest.spyOn(store, 'dispatch');
			const action = resetHeaderInfo();

			facade.resetHeaderInfo();

			expect(spy).toHaveBeenCalledWith(action);
		});
	});
});
