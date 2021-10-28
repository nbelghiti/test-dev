import { parseNumber } from './parseNumber';

describe('[UNIT - SHARED] parseNumber', () => {
	it('should return non numeric values', () => {
		expect(parseNumber('foo')).toEqual('foo');
		expect(parseNumber([true] as any)).toEqual([true]); // tslint:disable-line no-any
	});

	it('should parse numeric values to a number', () => {
		expect(parseNumber('123')).toEqual(123);
	});
});
