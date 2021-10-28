import { parseJSON, stringifyJSON } from './json';
import { logger } from './logger';

describe('[UNIT - SHARED] JSON', () => {
	describe('parseJSON', () => {
		let loggerErrorSpy: jest.SpyInstance;

		beforeEach(() => {
			loggerErrorSpy = jest.spyOn(logger, 'error');
		});

		afterEach(() => {
			loggerErrorSpy.mockRestore();
		});

		it('should log an error if parsing the input failed', () => {
			expect(parseJSON('{username:}')).toBeNull();
			expect(loggerErrorSpy).toHaveBeenCalledTimes(2);
			expect(loggerErrorSpy).toHaveBeenCalledWith('Parsing JSON failed:');
		});

		it('should return the parsed input', () => {
			expect(parseJSON('{"username":"bob"}')).toEqual({
				username: 'bob',
			});
			expect(loggerErrorSpy).not.toHaveBeenCalled();
		});
	});

	describe('stringifyJSON', () => {
		it('should return numeric values without parsing', () => {
			expect(stringifyJSON(200)).toEqual(200);
		});

		it('should stringify all other values', () => {
			expect(stringifyJSON({ username: 'bob' })).toEqual('{"username":"bob"}');
			expect(stringifyJSON(true)).toEqual('true');
			expect(stringifyJSON([1, 2, 3])).toEqual('[1,2,3]');
		});
	});
});
