import { SwaggerApiDefinitionProperties, SwaggerModelType, SwaggerParameterType } from '@studiohyperdrive/swagger-express-ts';

export const CoreModels: Record<string, SwaggerApiDefinitionProperties> = {
	Error: {
		host: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'localhost',
		},
		identifier: {
			type: SwaggerModelType.STRING,
			required: true,
			// TODO: fix format support
			// format: 'uuid',
			example: '005b3940-28f2-436e-b579-7ccca0ab7aec',
		},
		timestamp: {
			type: SwaggerModelType.STRING,
			required: true,
			// TODO: fix format support
			// format: 'date',
			example: '2019-01-01T00:00:00.000Z',
		},
		status: {
			type: SwaggerModelType.NUMBER,
			required: true,
			example: 500,
		},
		name: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'Error',
		},
		message: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'Something went wrong',
		},
		details: {
			type: SwaggerModelType.ARRAY,
			// TODO: fix item type as schema
			// itemType: 'ErrorDetail',
			required: true,
			example: [{ err: 'message' }],
		},
		stack: {
			type: SwaggerModelType.ARRAY,
			// TODO: fix type
			itemType: SwaggerParameterType.STRING,
			required: true,
			example: ['stack'],
		},
	},
	ErrorDetail: {
		err: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'message',
		},
	},
	Status: {
		success: {
			type: SwaggerModelType.BOOLEAN,
			required: true,
			example: true,
		},
		version: {
			type: SwaggerModelType.STRING,
			required: true,
			example: '1.0.0',
		},
	},
	Auth0Users: {
		name: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'bob',
		},
		email: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'bob@mail.com',
		},
		picture: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'https://path.to.avatar',
		},
		user_id: {
			type: SwaggerModelType.STRING,
			required: true,
			example: '1',
		},
	},
};
