import { aTeamMock } from 'adb-test/teams.mock';

import {
	IProject,
	IProjects,
	IProjectsFilter,
	ProjectStatus,
} from './projects.types';

export const aProjectsMock: IProjects = {
	items: [{
		id: 'some-uuid',
		name: 'project-name',
		PROJECT_ID: 'project-id',
		createdAt: 'timestamp',
		updatedAt: 'timestamp',
		general: null,
		client: null,
		location: {
			name: null
		},
		status: ProjectStatus.engineering,
	}],
	total: 1,
	pages: 1,
	page: 1,
	size: 1,
};

export const aProjectMock: IProject = {
	id: 'some-uuid',
	name: 'project-name',
	PROJECT_ID: 'project-id',
	createdAt: 'timestamp',
	updatedAt: 'timestamp',
	general: null,
	client: null,
	location: {
		name: null
	},
	status: ProjectStatus.engineering,
	team: aTeamMock,
};

export const aProjectFilterMock: IProjectsFilter = {
	name: null,
	accType: null,
	accFormat: null,
	status: null,
	lastUpdated: null,
};
