import { IValidationPreset } from '@shared/shared.types';

import { byId } from './byId';
import { pagination } from './pagination';
import { queryUsers } from './queryUsers';
import { projectId } from './project-id';

export const presets: { [key: string]: IValidationPreset } = {
	byId,
	pagination,
	queryUsers,
	projectId,
};
