import { IPagination } from '../../repository.types';
import { ITeam } from '../../teams/services/teams.types';

export enum ArticleStatus {
	engineering = 'engineering',
	construction = 'construction'
}


export interface IArticleClient {
	name: string;
}

export interface IArticleLocation {
	name: string;
}

export interface IArticle {
	_id: string;
	author: {
		picture: string,
		name: {
			first: string,
			last: string
		}
	};
	title: string;
	summary: string;
	intro: string;
	banner: string;
	body: string;
	assets: [
		{
			src: string,
			alt: string,
			type: string
		}
	];
	created: string;
	tags: [string];
	internal: boolean;

}

export interface IArticlesFilter {
	sort?: string;
}

export type IArticles = IPagination<IArticle>;
