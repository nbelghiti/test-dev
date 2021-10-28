import { EnvHelper } from './env';

describe('[UNIT - CONFIG] EnvHelper', () => {
	describe('envToBoolean', () => {
		it('Should convert an environment variable to a boolean (true)', () => {
			const result: boolean = EnvHelper.envToBoolean('true');

			expect(result).toBeTrue();
		});

		it('Should convert an environment variable to a boolean (false)', () => {
			const result: boolean = EnvHelper.envToBoolean('false');

			expect(result).toBeFalse();
		});

		it('Should fall back to the provided default value when the environment variable is not defined', () => {
			const result: boolean = EnvHelper.envToBoolean(null, false);

			expect(result).toBeFalse();
		});
	});

	describe('envToNumber', () => {
		it('Should convert an environment variable to a number', () => {
			const result: number = EnvHelper.envToNumber('1');

			expect(result).toBeNumber();
			expect(result).toEqual(1);
		});

		it('Should fall back to the provided default value if the environment variable is not a number', () => {
			const result: number = EnvHelper.envToNumber('invalid', 10);

			expect(result).toEqual(10);
		});

		it('Should fall back to the provided default value when the environment variable is not defined', () => {
			const result: number = EnvHelper.envToNumber(null, 2);

			expect(result).toEqual(2);
		});
	});

	describe('envToArray', () => {
		it('Should convert an environment variable to an array', () => {
			const result: string[] = EnvHelper.envToArray('one,two,three');

			expect(result).toBeArrayOfSize(3);
			expect(result).toEqual(['one', 'two', 'three']);
		});

		it('Should convert an environment variable to an array (custom separator)', () => {
			const result: string[] = EnvHelper.envToArray('one;two;three', ';');

			expect(result).toBeArrayOfSize(3);
			expect(result).toEqual(['one', 'two', 'three']);
		});

		it('Should fall back to the provided default value when the environment variable is not defined', () => {
			const result: string[] = EnvHelper.envToArray(null, null, ['one']);

			expect(result).toBeArrayOfSize(1);
			expect(result).toEqual(['one']);
		});
	});

	describe('envToObject', () => {
		it('Should convert an environment variable to an object', () => {
			const result: object = EnvHelper.envToObject(JSON.stringify({ key: 'value' }));

			expect(result).toBeObject();
			expect(result).toEqual({
				key: 'value',
			});
		});

		it('Should fall back to the provided default value when the environment variable is not a valid JSON string', () => {
			const result: object = EnvHelper.envToObject('invalid', { fallback: true });

			expect(result).toBeObject();
			expect(result).toEqual({
				fallback: true,
			});
		});

		it('Should fall back to the provided default value when the environment variable is not defined', () => {
			const result: object = EnvHelper.envToObject();

			expect(result).toBeObject();
			expect(result).toEqual({});
		});
	});
});
