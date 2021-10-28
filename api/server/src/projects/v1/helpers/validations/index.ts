import { IValidationPreset } from '@shared/shared.types';
import { presets } from '@shared/helpers/presets';

import { filter } from './filter';

export const validations: { [key: string]: IValidationPreset } = {
	...presets,
	filter,
};
