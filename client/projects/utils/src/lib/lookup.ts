export class Lookup<T = any> {
	public registry = new Map<string, string[]>();
	public data = new Map<string[], T>();

	public set(key: string[], value: T): void {
		this.registry.set(JSON.stringify(key), key);
		this.data.set(key, value);
	}

	public get(key: string[]): T | null {
		const stringifiedKey = JSON.stringify(key);
		const lookupKey = this.registry.get(stringifiedKey);

		if (!lookupKey || !this.data.has(lookupKey)) {
			return null;
		}

		return this.data.get(lookupKey);
	}

	public keys(): Iterable<string[]> {
		return this.registry.values();
	}

	public values(): Iterable<T> {
		return this.data.values();
	}

	public entries(): Iterable<[string[], T]> {
		return this.data.entries();
	}
}
