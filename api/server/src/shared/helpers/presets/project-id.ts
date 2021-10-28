import { default as Joi } from 'joi';

import { IValidationPreset } from '@shared/shared.types';
import { allowUnknown } from '@shared/helpers/validation/options';

export const projectId: IValidationPreset = {
	options: allowUnknown,
	schema: Joi.object().optional().keys({
		projectId: Joi.string().guid().required(),
	}),
};
