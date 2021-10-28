import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DEFAULT_ENTITY_STATE } from '../../repository.const';
import { ITeam } from '../services/teams.types';

import { ITeamsState } from './teams.types';

export const adapter: EntityAdapter<ITeam> = createEntityAdapter<ITeam>();

export const initialState: ITeamsState = adapter.getInitialState(DEFAULT_ENTITY_STATE);
