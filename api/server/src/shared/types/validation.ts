// Validation
import {
	Schema,
	ValidationOptions,
} from 'joi';

import { ValidationError } from '../helpers/validation/error';

export interface IValidationPreset {
	schema: Schema;
	options: ValidationOptions;
}
export type IValidationOrigin = 'body' | 'headers' | 'params' | 'query';
export type IValidationError = ValidationError;
