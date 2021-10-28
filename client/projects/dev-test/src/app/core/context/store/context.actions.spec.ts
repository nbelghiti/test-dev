import { resetHeaderInfo, setHeaderInfo } from './context.actions';
import { aHeaderInfoMock } from './context.mock';
import { ContextActions } from './context.types';

describe('core: context: actions', () => {
	describe('header', () => {
		it('should have a setHeaderInfo action', () => {
			const action = setHeaderInfo({ info: aHeaderInfoMock });

			expect(action.type).toBe(ContextActions.setHeaderInfo);
			expect(action.info).toEqual(aHeaderInfoMock);
		});

		it('should have a resetHeaderInfo action', () => {
			const action = resetHeaderInfo();

			expect(action.type).toBe(ContextActions.resetHeaderInfo);
		});
	});
});
