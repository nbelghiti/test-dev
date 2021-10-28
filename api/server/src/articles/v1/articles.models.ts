import { SwaggerApiDefinitionProperties, SwaggerModelType } from '@studiohyperdrive/swagger-express-ts';

const ArticleBaseModel: SwaggerApiDefinitionProperties = {
	id: {
		type: SwaggerModelType.STRING,
		required: true,
		example: '5fb25b797b7d474d2c83874f',
	},
	title: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.',
	},
	summary: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.',
	},
	banner: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'http://placehold.it/1920x1080'
	},
	created: {
		type: SwaggerModelType.STRING,
		required: true,
		example: 'Monday, August 12, 2019 10:46 PM'
	},
	internal: {
		type: SwaggerModelType.BOOLEAN,
		required: false,
		example: false
	},
};

export const ArticlesV1Models: Record<string, SwaggerApiDefinitionProperties> = {
	Article:  {
		...ArticleBaseModel,
		intro: {
			type: SwaggerModelType.STRING,
			required: true,
			example: 'Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.',
		},
		body: {
			type: SwaggerModelType.STRING,
			required: true,
			body: 'Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.'
		},
	},
	ArticleListView: ArticleBaseModel,
};
