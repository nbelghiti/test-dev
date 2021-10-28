import { isNil } from 'ramda';

export class EnvHelper {
	public static envToBoolean(env: string = '', defaultValue: boolean = false): boolean {
		if (this.checkEmpty(env)) {
			return defaultValue;
		}

		return env === 'true';
	}

	public static envToNumber(env: string = '', defaultValue: number = null): number {
		if (this.checkEmpty(env)) {
			return defaultValue;
		}

		const parsedValue = parseInt(env, 10);

		return isNaN(parsedValue) ? defaultValue : parsedValue;
	}

	public static envToArray(env: string = '', separator: string = ',', defaultValue: string[] = []): string[] {
		if (this.checkEmpty(env)) {
			return defaultValue;
		}

		return env.split(separator);
	}

	public static envToObject(env: string = '', defaultValue: Record<string, unknown> = {}): Record<string, unknown> {
		if (this.checkEmpty(env)) {
			return defaultValue;
		}

		try {
			return JSON.parse(env);
		} catch {
			return defaultValue;
		}
	}

	private static checkEmpty(env: string): boolean {
		return isNil(env) || env === '';
	}
}
