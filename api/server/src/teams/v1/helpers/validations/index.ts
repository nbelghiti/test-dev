import { IValidationPreset } from '@shared/shared.types';
import { presets } from '@shared/helpers/presets';
import { update } from './update';

export const validations: { [key: string]: IValidationPreset } = {
	...presets,
	update,
};
