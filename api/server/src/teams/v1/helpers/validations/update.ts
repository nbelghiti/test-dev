import { default as Joi } from 'joi';

import { stripUnknown } from '@shared/helpers/validation/options';
import { IValidationPreset } from '@shared/shared.types';

import { MEMBER_ROLES } from '../../teams.types';

export const update: IValidationPreset = {
	options: stripUnknown,
	schema: Joi.object().keys({
		id: Joi.string().required().uuid({ version: 'uuidv4' }),
		projectId: Joi.string().required().uuid({ version: 'uuidv4' }),
		members: Joi.array().items(Joi.object().keys({
			id: Joi.string().optional().uuid({ version: 'uuidv4' }),
			name: Joi.string().required(),
			email: Joi.string().required().email(),
			picture: Joi.string().optional(),
			type: Joi.string().required().allow(...MEMBER_ROLES),
			teamId: Joi.string().required().uuid({ version: 'uuidv4' }),
			auth0Id: Joi.string().required(),
			management: Joi.boolean().optional(),
		})),
	}),
};
