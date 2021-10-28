import { IRepositoryState } from '../../repositories.store';
import { aProjectMock } from '../services/projects.mock';

import {
	PROJECTS_SELECTOR,
	selectAllProjects,
	selectProjectById,
	selectProjectEntities,
	selectProjectIds,
	selectTotalProjects,
} from './articles.selector';

describe('repository: project: selector', () => {
	const projectId: string = '12704dd6-5dbd-4a85-8f5e-c01a63397155';
	const state: IRepositoryState = {
		projects: {
			ids: [projectId],
			entities: {
				[projectId]: {
					...aProjectMock,
					id: projectId,
				},
			},
			isLoading: false,
			error: null,
			meta: null
		},
	} as unknown as IRepositoryState;

	describe('custom selectors', () => {
		it('should select the project state from the respository feature', () => {
			const projectState = PROJECTS_SELECTOR({ repository: state });

			expect(projectState).toEqual(state.projects);
		});

		it('should expose the selectProjectById selector', () => {
			const project = selectProjectById(state.projects, { id: projectId });

			expect(project).toEqual(state.projects.entities[projectId]);
		});
	});

	describe('adapter selectors', () => {
		const projects = state.projects;

		it('should expose the selectIds selectors created by the adapter', () => {
			const ids = selectProjectIds(projects);

			expect(ids[0]).toBe(projects.ids[0]);
		});

		it('should expose the selectProjectEntities selectors created by the adapter', () => {
			const entities = selectProjectEntities(projects);

			expect(entities[projects.ids[0]]).toEqual(projects.entities[projects.ids[0]]);
		});

		it('should expose the selectAllProjects selectors created by the adapter', () => {
			const results = selectAllProjects(projects);

			expect(results[0].id).toEqual(projects.ids[0]);
		});

		it('should expose the selectTotalProjects selectors created by the adapter', () => {
			const total = selectTotalProjects(projects);

			expect(total).toBe(1);
		});
	});
});
