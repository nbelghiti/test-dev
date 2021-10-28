import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { DEFAULT_ENTITY_STATE } from '../../repository.const';
import { IArticle } from '../services/articles.types';

import { IArticlesState } from './articles.types';

export const adapter: EntityAdapter<IArticle> = createEntityAdapter<IArticle>();

export const initialState: IArticlesState = adapter.getInitialState(DEFAULT_ENTITY_STATE);
