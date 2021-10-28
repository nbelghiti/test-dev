import { TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CanDeactivateGuard } from './guard-route.service';
import { IHandleConfirm } from './guard-route.types';

const handleConfirm = jest.fn();

describe('CanDeactivateGuard', () => {
	let injector: TestBed;
	let guard: CanDeactivateGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [
				CanDeactivateGuard,
			],
		});

		injector = getTestBed();
		guard = injector.get(CanDeactivateGuard);
	});

	describe('canDeactivate', () => {
		it('should return true when no component is passed', () => {
			const activate = guard.canDeactivate(null, null, null, null);
			expect(activate).toBe(true);
		});

		it('should return true when isChanged is false', () => {
			const activate = guard.canDeactivate({
				isChanged: false,
				isSaved: true,
				handleConfirm
			} as IHandleConfirm, null, null, null);
			expect(activate).toBe(true);
		});

		it('should return false when isChanged is true and isSaved is false', () => {
			const activate = guard.canDeactivate({
				isChanged: true,
				isSaved: false,
				handleConfirm,
			} as IHandleConfirm, null, null, null);
			expect(activate).toBe(false);
			expect(handleConfirm).toBeCalled();
		});
	});
});
