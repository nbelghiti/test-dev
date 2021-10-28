import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prop, sortBy } from 'ramda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITeam, IUser } from './teams.types';

@Injectable()
export class TeamsService {
	private baseUrl: string = 'api/v1/teams';

	constructor(
		private http: HttpClient,
	) {}

	public getTeam(id: string): Observable<ITeam> {
		return this.http.get<ITeam>(`${this.baseUrl}/${id}`);
	}

	public updateTeam(id: string, team: ITeam): Observable<ITeam> {
		return this.http.put<ITeam>(`${this.baseUrl}/${id}`, team);
	}

	public getMembers(name?: string): Observable<IUser[]> {
		return this.http.get<IUser[]>(`${this.baseUrl}/members`, {
			params: !name ? null : {
				name,
			},
		})
			.pipe(
				map(sortBy(prop('name'))),
			);
	}
}
