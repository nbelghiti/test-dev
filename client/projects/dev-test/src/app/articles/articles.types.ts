import { IRouterState } from '~/core/router/store/router.types';
import { IRepositoryState } from '~/repositories/repositories.store';

export interface IArticlesState {
	router: IRouterState;
	repository: IRepositoryState;
}

export enum ProjectGenericPackages {
	TEAMMANAGEMENT = 'TEAM-MANAGEMENT'
}
