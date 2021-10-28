import { PermissionAction } from './permissions.types';
import { SwaggerApiDefinitionProperties, SwaggerModelType } from '@studiohyperdrive/swagger-express-ts';

export const PermissionsV1Models: Record<string, SwaggerApiDefinitionProperties> = {
	Permissions: {
		project: {
			type: SwaggerModelType.ARRAY,
			required: true,
			example: [PermissionAction.createProject, PermissionAction.createUser],
		},
		package: {
			type: SwaggerModelType.ARRAY,
			required: true,
			example: [PermissionAction.createProject],
		},
	},
};
