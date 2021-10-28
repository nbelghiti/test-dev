import {
	ApiDefinition,
	ApiOperationGet,
	ApiPath,
	SwaggerModelType,
	SwaggerResponseType,
} from '@studiohyperdrive/swagger-express-ts';

import { version } from '@pkg';
import { NotFoundError } from '@shared/helpers/error';
import { IRequest, IResponse, INext } from '@shared/shared.types';

import { CoreModels } from '../core.models';
import { IStatus } from '../core.types';

@ApiPath({
	name: 'Core',
	path: '/',
})
export class CoreController {
	@ApiDefinition({
		description: 'Error',
		type: SwaggerModelType.OBJECT,
	})
	public static Error = CoreModels.Error;

	@ApiDefinition({
		description: 'ErrorDetail',
		type: SwaggerModelType.OBJECT,
	})
	public static ErrorDetail = CoreModels.ErrorDetail;

	@ApiDefinition({
		description: 'Status',
		type: SwaggerModelType.OBJECT,
	})
	public static Status = CoreModels.Status;

	@ApiDefinition({
		description: 'Auth0Users',
		type: SwaggerModelType.OBJECT,
	})
	public static Auth0Users = CoreModels.Auth0Users;

	@ApiOperationGet({
		description: 'Get status',
		path: '/status',
		responses: {
			200: {
				description: 'OK',
				type: SwaggerResponseType.OBJECT,
				schema: 'Status',
			},
		},
	})
	public status(req: IRequest, res: IResponse, next: INext): IResponse | void {
		return res.status(200).json({
			version,
			success: true,
		} as IStatus);
	}

	// Get fallback
	public fallback(req: IRequest, res: IResponse, next: INext): IResponse | void {
		return next(new NotFoundError());
	}
}
