import { IRouterState } from '~/core/router/store/router.types';
import { IRepositoryState } from '~/repositories/repositories.store';

export interface IProjectsState {
	router: IRouterState;
	repository: IRepositoryState;
}

export enum ProjectGenericPackages {
	TEAMMANAGEMENT = 'TEAM-MANAGEMENT'
}
