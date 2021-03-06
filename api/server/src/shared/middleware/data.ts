import { clone, curry } from 'ramda';

import { IRequest, IResponse, INext, IValidationOrigin, IValidationPreset } from '../shared.types';
import { ValidationError } from '../helpers/validation/error';
import { Validator } from '../helpers/validation';
import { PaginationHelper } from '@shared/helpers/pagination';

export class DataMiddleware {
	public static validate = curry(DataMiddleware.runValidation);

	public static copy(req: IRequest, res: IResponse, next: INext): void {
		req.data = {
			body: clone(req.body),
			headers: clone(req.headers),
			params: clone(req.params),
			query: clone(req.query),
			file: clone(req.file),
		};
		next();
	}

	public static pagination(req: IRequest, res: IResponse, next: INext): void {
		req.data.pagination = PaginationHelper.parseQuery(req.data.query);
		next();
	}

	private static runValidation(origin: IValidationOrigin, preset: IValidationPreset, req: IRequest, res: IResponse, next: INext): void {
		if (!req.data) {
			throw new ValidationError('The request data has not been cloned');
		}

		req.data[origin] = Validator.validate(req.data[origin], preset, origin);
		next();
	}
}
