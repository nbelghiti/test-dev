import { default as Joi } from 'joi';

import { allowUnknown } from '@shared/helpers/validation/options';
import { IValidationPreset } from '@shared/shared.types';

export const byId: IValidationPreset = {
	options: allowUnknown,
	schema: Joi.object().required().keys({
		id: Joi.string().required(),
	}),
};
