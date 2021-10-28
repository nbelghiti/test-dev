import { default as Joi } from 'joi';

import { allowUnknown } from '@shared/helpers/validation/options';
import { IValidationPreset } from '@shared/shared.types';

export const filter: IValidationPreset = {
	options: allowUnknown,
	schema: Joi.object().keys({
		name: Joi.string(),
		accType: Joi.string(),
		accFormat: Joi.string(),
		status: Joi.string(),
		lastUpdated: Joi.string().valid(['ASC', 'DESC']).optional(),
	}),
};
