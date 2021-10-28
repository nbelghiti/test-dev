import { default as Joi } from 'joi';

import { allowUnknown } from '@shared/helpers/validation/options';
import { IValidationPreset } from '@shared/shared.types';

export const pagination: IValidationPreset = {
	options: allowUnknown,
	schema: Joi.object().optional().keys({
		page: Joi.number().optional().default(1),
		size: Joi.number().optional().default(100),
	}),
};
