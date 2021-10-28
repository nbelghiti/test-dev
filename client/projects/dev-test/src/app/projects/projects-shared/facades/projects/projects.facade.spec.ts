import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { aProjectMock } from '~/repositories/projects/services/projects.mock';
import { IProject } from '~/repositories/projects/services/projects.types';
import {
	clearAllProjects,
	getProject,
	getProjects,
	refreshProject,
} from '~/repositories/projects/store/projects.actions';
import { IRepositoryState } from '~/repositories/repositories.store';
import { IPaginationMeta } from '~/repositories/repository.types';

import { IProjectsState } from '../../../projects.types';

import { ProjectsFacade } from './projects.facade';

describe('projects: facades: projects', () => {
	let injector: TestBed;
	let service: ProjectsFacade;
	let store: MockStore<IProjectsState>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ProjectsFacade,
				provideMockStore(),
			],
		});

		injector = getTestBed();
		service = injector.get(ProjectsFacade);
		store = injector.get(Store);
	});

	describe('actions', () => {
		it('should get all projects', () => {
			const spy = jest.spyOn(store, 'dispatch');
			const action = getProjects({ filters: null });

			service.getAllProjects(null);

			expect(spy).toHaveBeenCalledWith(action);
		});

		it('should get one project', () => {
			const id = aProjectMock.id;
			const spy = jest.spyOn(store, 'dispatch');
			const action = getProject({ id });

			service.getProject(id);

			expect(spy).toHaveBeenCalledWith(action);
			expect(action.id).toBe(id);
		});

		it('should refresh one project', () => {
			const id = aProjectMock.id;
			const spy = jest.spyOn(store, 'dispatch');
			const action = refreshProject({ id });

			service.refreshProject(id);

			expect(spy).toHaveBeenCalledWith(action);
			expect(action.id).toBe(id);
		});

		it('should clear all projects', () => {
			const spy = jest.spyOn(store, 'dispatch');
			const action = clearAllProjects();

			service.clearAllProjects();

			expect(spy).toHaveBeenCalledWith(action);
		});
	});

	describe('observables', () => {
		it('should select all projects', async(done: jest.DoneCallback) => {
			const spy = jest.spyOn(store, 'pipe').mockImplementationOnce(() => of([]));

			const sub = service.selectAll().subscribe((projects: IProject[]) => {
				expect(projects.length).toBe(0);

				setTimeout(() => sub.unsubscribe());

				done();
			});

			expect(spy).toHaveBeenCalledTimes(1);
		});

		it('should select projects meta', async(done: jest.DoneCallback) => {
			const spy = jest.spyOn(store, 'pipe').mockImplementationOnce(() => of({
				total: 1,
				pages: 1,
				page: 1,
				size: 1,
			}));

			const sub = service.selectMeta().subscribe((projectMeta: IPaginationMeta) => {
				expect(projectMeta.total).toBe(1);
				expect(projectMeta.pages).toBe(1);
				expect(projectMeta.page).toBe(1);
				expect(projectMeta.size).toBe(1);

				setTimeout(() => sub.unsubscribe());

				done();
			});

			expect(spy).toHaveBeenCalledTimes(1);
		});

		it('should select projects loading', async(done: jest.DoneCallback) => {
			const spy = jest.spyOn(store, 'pipe').mockImplementationOnce(() => of(true));

			const sub = service.selectLoading().subscribe((projectsLoading: boolean) => {
				expect(projectsLoading).toBe(true);

				setTimeout(() => sub.unsubscribe());

				done();
			});

			expect(spy).toHaveBeenCalledTimes(1);
		});

		it('should select a project', async(done: jest.DoneCallback) => {
			const id = aProjectMock.id;
			const spy = jest.spyOn(store, 'pipe').mockImplementationOnce(() => of({ id }));

			const sub = service.selectOne(id).subscribe((project: { id: string }) => {
				expect(project.id).toBe(id);

				setTimeout(() => sub.unsubscribe());

				done();
			});

			expect(spy).toHaveBeenCalledTimes(1);
		});
	});

	describe('selectors', () => {
		const state: IProjectsState = {
			router: null,
			repository: {
				projects: {
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
				},
			} as unknown as IRepositoryState,
		};

		it('should select all projects', () => {
			const projects = service['selectProjects'](state);

			expect(projects.length).toBe(1);
			expect(projects[0]).toEqual(state.repository.projects.entities[projects[0].id]);
		});

		it('should select projects meta', () => {
			const projectsMeta = service['selectProjectsMeta'](state);

			expect(projectsMeta).toEqual(state.repository.projects.meta);
		});

		it('should select projects loading', () => {
			const projectsLoading = service['selectProjectsLoading'](state);

			expect(projectsLoading).toEqual(state.repository.projects.isLoading);
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
