import { BehaviorSubject } from 'rxjs';

import { aProjectMock } from '~/repositories/projects/services/projects.mock';
import { IProject } from '~/repositories/projects/services/projects.types';

export const mockProjectsFacade = (withErrorStatus: boolean = false, withLoadingStatus: boolean = false) => ({
	getProject: jest.fn().mockImplementation((id: string) => console.log('geting project', id)),
	selectOne: () => new BehaviorSubject<IProject>(aProjectMock as IProject),
	selectProjectStatus: () => new BehaviorSubject({
		error: withErrorStatus ? { error: { message: 'something went wrong' } } : null,
		loading: withLoadingStatus,
	}),
	selectLoading: () => new BehaviorSubject(withLoadingStatus),
	refreshProject: jest.fn().mockImplementation((id: string) => console.log('refreshing the project', id)),
});
