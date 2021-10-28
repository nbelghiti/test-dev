import { IPagination, IPaginationQuery, IQuery } from '../shared.types';

export class PaginationHelper {
	public static map(items: any[], total: number, path: string, query: IQuery): IPagination<any> { // tslint:disable-line no-any
		const page = this.verifyIntValue(query.page, 1);
		const size = this.verifyIntValue(query.size, 20);
		const pages: number = Math.ceil(total / size);

		const result: IPagination<any> = { // tslint:disable-line no-any
			items,
			total,
			pages,
			page,
			size,
		};

		return result;
	}

	public static parseQuery({ page, size }: {
		page?: number;
		size?: number;
	} = {}, defaultPageSize: number = 100): IPaginationQuery {
		const pageValue = this.verifyIntValue(page, 1);
		const sizeValue = this.verifyIntValue(size, defaultPageSize);

		return {
			limit: sizeValue,
			offset: (pageValue - 1) * sizeValue,
		};
	}

	private static verifyIntValue(value: unknown, defaultValue: number): number {
		try {
			const intValue = parseInt(String(value), 10);

			if (isNaN(intValue)) {
				throw new Error('Not a number!');
			}

			return intValue;
		} catch (e) {
			return defaultValue;
		}
	}
}
