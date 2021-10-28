import { aErrorMock } from '../../repositories.mock';
import { aProjectMock, aProjectsMock } from '../services/projects.mock';

import {
	clearAllProjects,
	getProject,
	getProjectFailed,
	getProjectSucces,
	getProjects,
	getProjectsFailed,
	getProjectsSucces,
	refreshProject,
	refreshProjectFailed,
	refreshProjectSucces,
} from './projects.actions';
import { initialState } from './projects.adapter';
import { projectsReducer } from './projects.reducer';

describe('repository: projects: reducer', () => {
	describe('getProject', () => {
		it('should handle the getProject action', () => {
			const id = 'test-id';
			const state = projectsReducer(initialState, getProject({ id }));

			expect(state.isLoading).toBe(true);
		});

		it('should handle the getProjectSucces action', () => {
			const project = aProjectMock;
			const state = projectsReducer(initialState, getProjectSucces({ project }));

			expect(state.isLoading).toBe(false);
			expect(state.entities[project.id]).toEqual(project);
		});

		it('should handle the getProjectFailed action', () => {
			const state = projectsReducer(initialState, getProjectFailed({ error: aErrorMock }));

			expect(state.isLoading).toBe(false);
			expect(state.error).toEqual(aErrorMock);
		});
	});

	describe('refreshProject', () => {
		it('should handle the refreshProject action', () => {
			const id = 'test-id';
			const state = projectsReducer(initialState, refreshProject({ id }));

			expect(state.isLoading).toBe(true);
		});

		it('should handle the refreshProjectSucces action', () => {
			const project = aProjectMock;
			const previousState = projectsReducer(initialState, getProjectSucces({ project }));
			const state = projectsReducer(previousState, refreshProjectSucces({ project }));

			expect(state.isLoading).toBe(false);
			expect(state.entities[project.id]).toEqual(project);
		});

		it('should handle the refreshProjectFailed action', () => {
			const state = projectsReducer(initialState, refreshProjectFailed({ error: aErrorMock }));

			expect(state.isLoading).toBe(false);
			expect(state.error).toEqual(aErrorMock);
		});
	});

	describe('getProjects', () => {
		it('should handle the getProjects action', () => {
			const state = projectsReducer(initialState, getProjects({ filters: null }));

			expect(state.isLoading).toBe(true);
		});

		it('should handle the getProjectsSucces action', () => {
			const projects = aProjectsMock;
			const state = projectsReducer(initialState, getProjectsSucces({ projects }));

			expect(state.isLoading).toBe(false);
			expect(state.entities[projects.items[0].id]).toEqual(projects.items[0]);
		});

		it('should handle the getProjectsFailed action', () => {
			const state = projectsReducer(initialState, getProjectsFailed({ error: aErrorMock }));

			expect(state.isLoading).toBe(false);
			expect(state.error).toEqual(aErrorMock);
		});
	});

	describe('clearProjects', () => {
		it('should handle the clearAllProjects action', () => {
			const state = {
				ids: ['12704dd6-5dbd-4a85-8f5e-c01a63397155'],
				entities: {
					'12704dd6-5dbd-4a85-8f5e-c01a63397155': {
						id: '12704dd6-5dbd-4a85-8f5e-c01a63397155',
						something: 'else',
					} as any
				},
				isLoading: false,
				error: null,
				meta: null
			};

			const newState = projectsReducer(state, clearAllProjects());

			expect(newState.ids.length).toBe(0);
			expect(newState.entities).toEqual({});
		});
	});
});
