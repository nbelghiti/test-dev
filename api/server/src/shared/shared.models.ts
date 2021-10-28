import { SwaggerApiParameters, SwaggerParameterType } from '@studiohyperdrive/swagger-express-ts';

export const paginationParams: SwaggerApiParameters = {
	query: {
		page: {
			description: 'Page number',
			type: SwaggerParameterType.NUMBER,
			required: false,
			// TODO: add default support
			// default: 1,
		},
		size: {
			description: 'Page size',
			type: SwaggerParameterType.NUMBER,
			required: false,
			// TODO: add default support
			// default: 20,
		},
	},
};
