import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
	IProject,
	IProjects,
	IProjectsFilter
} from './projects.types';

@Injectable()
export class ProjectsService {
	private baseUrl: string = 'api/v1/projects';

	constructor(
		private http: HttpClient,
	) { }

	public getProjects(filters?: IProjectsFilter): Observable<IProjects> {
		return this.http.get<IProjects>(this.baseUrl, {
			params: {
				...(filters.name && { name: filters.name }),
				...(filters.status && { status: filters.status }),
				...(filters.accType && { accType: filters.accType }),
				...(filters.accFormat && { accFormat: filters.accFormat }),
				...(filters.location && { location: filters.location }),
				...(filters.sort && { sort: filters.sort }),
			}
		});
	}

	public getProject(id: string): Observable<IProject> {
		return this.http.get<IProject>(`${this.baseUrl}/${id}`);
	}
}
