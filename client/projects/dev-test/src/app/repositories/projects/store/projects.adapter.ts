import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DEFAULT_ENTITY_STATE } from '../../../repositories/repository.const';
import { IProject } from '../services/projects.types';

import { IProjectsState } from './projects.types';

export const adapter: EntityAdapter<IProject> = createEntityAdapter<IProject>();

export const initialState: IProjectsState = adapter.getInitialState(DEFAULT_ENTITY_STATE);
