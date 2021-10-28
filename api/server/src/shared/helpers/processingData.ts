/* istanbul ignore file */

export class ProcessingData {
	// tslint:disable-next-line: variable-name
	private static _data: string[] = [];

	static get data(): string[] {
		return this._data;
	}

	static set data(e: string[]) {
		this._data = [...this._data, ...e];
	}

	static reset(): void {
		this._data = [];
	}
}
