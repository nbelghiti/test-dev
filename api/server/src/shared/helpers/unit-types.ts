import { Units, UnitTypes } from '@services/field-services';

import { enumKeys } from './enum-keys';

export const unitTypes = enumKeys(UnitTypes);

export const units: string[] = Object.values(Units);
