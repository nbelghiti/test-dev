import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ArticlesEffects } from './articles/store/articles.effects';
import { articlesReducer } from './articles/store/articles.reducer';
import { IArticlesState } from './articles/store/articles.types';
import { ProjectsEffects } from './projects/store/projects.effects';
import { projectsReducer } from './projects/store/projects.reducer';
import { IProjectsState } from './projects/store/projects.types';
import { TeamsEffects } from './teams/store/teams.effects';
import { teamsReducer } from './teams/store/teams.reducer';
import { ITeamsState } from './teams/store/teams.types';

export interface IRepositoryState {
	articles: IArticlesState;
	projects: IProjectsState;
	teams: ITeamsState;
}

export const REDUCERS: ActionReducerMap<IRepositoryState> = {
	projects: projectsReducer,
	articles: articlesReducer,
	teams: teamsReducer,
};

export const EFFECTS = [
	ArticlesEffects,
	ProjectsEffects,
	TeamsEffects,
];

export const REPOSITORY_SELECTOR = createFeatureSelector<IRepositoryState>('repository');
