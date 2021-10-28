// import { aErrorMock } from '../../repositories.mock';
// import { aProjectMock, aProjectsMock } from '../services/projects.mock';

// import {
// 	clearAllProjects,
// 	getProject,
// 	getProjectFailed,
// 	getProjectSucces,
// 	getProjects,
// 	getProjectsFailed,
// 	getProjectsSucces,
// 	refreshProject,
// 	refreshProjectFailed,
// 	refreshProjectSucces,
// } fro./articles.actionsons';
// import { ProjectsActions } from './projects.types';

// describe('repository: projects: actions', () => {
// 	describe('getProject', () => {
// 		it('should have a getProject action', () => {
// 			const id = 'test-id';
// 			const action = getProject({ id });

// 			expect(action.type).toBe(ProjectsActions.getProject);
// 			expect(action.id).toBe(id);
// 		});

// 		it('should have a getProjectSucces action', () => {
// 			const project = aProjectMock;
// 			const action = getProjectSucces({ project });

// 			expect(action.type).toBe(ProjectsActions.getProjectSucces);
// 			expect(action.project).toEqual(project);
// 		});

// 		it('should have a getProjectFailed action', () => {
// 			const action = getProjectFailed({ error: aErrorMock });

// 			expect(action.type).toBe(ProjectsActions.getProjectFailed);
// 			expect(action.error).toEqual(aErrorMock);
// 		});
// 	});

// 	describe('refreshProject', () => {
// 		it('should have a refreshProject action', () => {
// 			const id = 'test-id';
// 			const action = refreshProject({ id });

// 			expect(action.type).toBe(ProjectsActions.refreshProject);
// 			expect(action.id).toBe(id);
// 		});

// 		it('should have a refreshProjectSucces action', () => {
// 			const project = aProjectMock;
// 			const action = refreshProjectSucces({ project });

// 			expect(action.type).toBe(ProjectsActions.refreshProjectSucces);
// 			expect(action.project).toEqual(project);
// 		});

// 		it('should have a refreshProjectFailed action', () => {
// 			const action = refreshProjectFailed({ error: aErrorMock });

// 			expect(action.type).toBe(ProjectsActions.refreshProjectFailed);
// 			expect(action.error).toEqual(aErrorMock);
// 		});
// 	});

// 	describe('getProjects', () => {
// 		it('should have a getProjects action', () => {
// 			const action = getProjects({ filters: null });

// 			expect(action.type).toBe(ProjectsActions.getProjects);
// 		});

// 		it('should have a getProjectsSucces action', () => {
// 			const projects = aProjectsMock;
// 			const action = getProjectsSucces({ projects });

// 			expect(action.type).toBe(ProjectsActions.getProjectsSucces);
// 			expect(action.projects).toEqual(projects);
// 		});

// 		it('should have a getProjectsFailed action', () => {
// 			const action = getProjectsFailed({ error: aErrorMock });

// 			expect(action.type).toBe(ProjectsActions.getProjectsFailed);
// 			expect(action.error).toEqual(aErrorMock);
// 		});
// 	});

// 	describe('clearProjects', () => {
// 		it('should have a clearAllProjects action', () => {
// 			const action = clearAllProjects();

// 			expect(action.type).toBe(ProjectsActions.clearAllProjects);
// 		});
// 	});
// });
