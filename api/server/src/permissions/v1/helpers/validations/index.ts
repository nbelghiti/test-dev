import { IValidationPreset } from '@shared/shared.types';
import { presets } from '@shared/helpers/presets';

export const validations: { [key: string]: IValidationPreset } = {
	...presets,
};
