import { SwaggerApiDefinitionProperties, SwaggerModelType } from '@studiohyperdrive/swagger-express-ts';

const projectBaseModel: SwaggerApiDefinitionProperties = {
	id: {
		type: SwaggerModelType.STRING,
		required: true,
		example: '54a835c3-c424-4244-bc4c-ab4955d17935',
	},
	name: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'Waad al Shamal',
	},
	PROJECT_ID: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'WAAD_AL_SHAMAL',
	},
	general: {
		type: SwaggerModelType.OBJECT,
		required: true,
		example: {
			ACCType: 'A-frame',
			ACCFormat: '20 - 40 modules',
		},
	},
	client: {
		type: SwaggerModelType.OBJECT,
		required: true,
		example: {
			name: 'Iberdrola',
		},
	},
	location: {
		type: SwaggerModelType.OBJECT,
		required: true,
		example: {
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [125.6, 10.1],
			},
			properties: {
				name: 'Dinagat Islands',
			},
		},
	},
	status: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'Engineering',
	},
};

export const ProjectsV1Models: Record<string, SwaggerApiDefinitionProperties> = {
	Project:  {
		...projectBaseModel,
		packages: {
			type: SwaggerModelType.ARRAY,
			required: true,
			example: [{
				PACKAGE_ID: 'PACKAGE_ID',
				name: 'package name',
				description: 'package description',
				componentGroups: [{
					name: 'component group name',
					description: 'component group description',
					components: [{
						name: 'component name',
						description: 'component description',
					}],
				}],
			}],
		},
		designFiles: {
			type: SwaggerModelType.ARRAY,
			required: true,
			example: [{
				code: 'file code',
				status: 'file status',
				previewURL: 'preview url',
			}],
		},
		team: {
			type: SwaggerModelType.OBJECT,
			required: true,
			schema: 'Team',
		},
	},
	ProjectListView: projectBaseModel,
	ProjectComponentGroupData: {
		name: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'Component group name',
		},
		description: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'description',
		},
		packageId: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'package-id',
		},
	},
	ProjectComponentData: {
		name: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'Component name',
		},
		description: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'description',
		},
		componentGroupId: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'package-id',
		},
	},
	ProjectPackageData: {
		name: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'package name',
		},
		description: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'description',
		},
	},
	VerifyProjectName: {
		unique: {
			type: SwaggerModelType.BOOLEAN,
			required: true,
			example: true,
		},
	},
};
