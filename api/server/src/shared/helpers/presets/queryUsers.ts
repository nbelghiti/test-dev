import { default as Joi } from 'joi';

import { stripUnknown } from '@shared/helpers/validation/options';
import { IValidationPreset } from '@shared/shared.types';

export const queryUsers: IValidationPreset = {
	options: stripUnknown,
	schema: Joi.object().keys({
		name: Joi.string().default(''),
		email: Joi.string().default(''),
	}),
};
