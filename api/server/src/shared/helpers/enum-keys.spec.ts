import { enumKeys } from './enum-keys';

describe('[UNIT - SHARED] enumKeys', () => {
	it('should convert an enum to an array of keys', () => {
		enum TestEnum {
			some = 'Some',
			value = 'Value',
		}

		expect(enumKeys(TestEnum)).toEqual(['some', 'value']);
	});

	it('should strip numerical values from the enum', () => {
		enum TestEnum {
			some,
			value,
		}

		expect(enumKeys(TestEnum)).toEqual(['some', 'value']);
	});
});
