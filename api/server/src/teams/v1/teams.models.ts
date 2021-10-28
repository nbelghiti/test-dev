import { SwaggerApiDefinitionProperties, SwaggerModelType } from '@studiohyperdrive/swagger-express-ts';

export const TeamsV1Models: Record<string, SwaggerApiDefinitionProperties> = {
	Team: {
		id: {
			type: SwaggerModelType.STRING,
			required: true,
			example: '1',
		},
		projectId: {
			type: SwaggerModelType.STRING,
			required: true,
			example: '1',
		},
		members: {
			type: SwaggerModelType.ARRAY,
			required: true,
			example: [{
				id: '1',
				name: 'member name',
				email: 'member email',
				picture: 'http://link.tomypictu.re',
				type: 'lead engineer',
				auth0Id: 'auth|12345abcde',
				packageId: '1',
				teamId: '1',
			}],
		},
	},
};
