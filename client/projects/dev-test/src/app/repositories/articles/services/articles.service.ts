import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
	IArticle,
	IArticles,
	IArticlesFilter
} from './articles.types';

@Injectable()
export class ArticlesService {
	private baseUrl: string = 'api/v1/articles';

	constructor(
		private http: HttpClient,
	) { }

	public getArticles(filters?: IArticlesFilter): Observable<IArticles> {
		return this.http.get<IArticles>(this.baseUrl, {
			params: {
				...(filters.sort && { sort: filters.sort }),
			}
		});
	}

	public getArticle(id: string): Observable<IArticle> {
		return this.http.get<IArticle>(`${this.baseUrl}/${id}`);
	}
}
