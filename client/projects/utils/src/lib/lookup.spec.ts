import { Lookup } from './lookup';

describe('Utils - Lookup', () => {
	let lookup: Lookup;

	beforeEach(() => {
		lookup = new Lookup();
	});

	it('should create a registry and data map', () => {
		expect(lookup.registry).toBeDefined();
		expect(lookup.registry).toBeInstanceOf(Map);

		expect(lookup.data).toBeDefined();
		expect(lookup.data).toBeInstanceOf(Map);
	});

	it('should set a value in the registry', () => {
		const key = ['foo', 'bar'];

		lookup.set(key, 'test');

		expect(lookup.registry.size).toEqual(1);
		expect(lookup.data.size).toEqual(1);
		expect(lookup.registry.get(JSON.stringify(['foo', 'bar']))).toEqual(key);
		expect(lookup.data.get(key)).toEqual('test');
	});

	it('should get a value from the registry by key (no reference required)', () => {
		const key = ['foo', 'bar'];
		const duplicate = [...key];

		lookup.set(key, 'test');

		expect(lookup.get(key)).toEqual('test');
		expect(lookup.get(duplicate)).toEqual('test');
	});

	it('should return null if the key is not found in the registry', () => {
		expect(lookup.get(['foo', 'bar'])).toBeNull();
	});

	it('should return null if the key is found but there is no data', () => {
		const key = ['foo', 'bar'];

		lookup.set(key, 'test');
		lookup.data.delete(key);

		expect(lookup.get(key)).toBeNull();
	});

	it('should return the available keys as an Iterable', () => {
		lookup.set(['foo', 'bar'], 'test');
		lookup.set(['stuff', 'things'], 'Lori');

		const keys = lookup.keys();

		expect(typeof keys[Symbol.iterator] === 'function').toBeTruthy();
		expect(Array.from(keys)).toEqual([['foo', 'bar'], ['stuff', 'things']]);
	});

	it('should return the available values as an Iterable', () => {
		lookup.set(['foo', 'bar'], 'test');
		lookup.set(['stuff', 'things'], 'Lori');

		const values = lookup.values();

		expect(typeof values[Symbol.iterator] === 'function').toBeTruthy();
		expect(Array.from(values)).toEqual(['test', 'Lori']);
	});

	it('should return the available entries as an Iterable', () => {
		lookup.set(['foo', 'bar'], 'test');
		lookup.set(['stuff', 'things'], 'Lori');

		const entries = lookup.entries();

		expect(typeof entries[Symbol.iterator] === 'function').toBeTruthy();
		expect(Array.from(entries)).toEqual([
			[ ['foo', 'bar'], 'test' ],
			[ ['stuff', 'things'], 'Lori' ],
		]);
	});
});
