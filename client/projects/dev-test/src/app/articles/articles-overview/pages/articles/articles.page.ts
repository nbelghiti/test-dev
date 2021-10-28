import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { pathOr } from 'ramda';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { ButtonType, FlyoutState, IconName } from 'adb-ui';

import { ArticlesFacade } from '~/articles/articles-shared/facades/articles/articles.facade';
import { ContextFacade } from '~/core/context/facades/context.facade';
import { IArticle } from '~/repositories/articles/services/articles.types';

@Component({
	templateUrl: './articles.page.html',
})

export class ArticlesPage implements OnDestroy {
	public articles$: Observable<IArticle[]>;
	public loading$: Observable<boolean>;
	public filterForm: FormGroup;
	public params: Params;
	public articleSortOptions = [
		{
			label: 'Most recent created',
			value: 'created',
		},
		{
			label: 'Article name',
			value: 'title',
		},
	];
	public FlyoutState = FlyoutState;
	public IconName: typeof IconName = IconName;
	public ButtonType: typeof ButtonType = ButtonType;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private articles: ArticlesFacade,
		private context: ContextFacade,
		private translate: TranslateService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.filterForm = new FormGroup({
			selectInputs: new FormControl(null),
			sort: new FormControl(
				this.articleSortOptions.find(option => option.value === this.route.snapshot.queryParams.sort)
				|| this.articleSortOptions[0]
			),
		});

		this.setQueryParams();

		this.filterForm.valueChanges
			.pipe(
				takeUntil(this.destroyed$),
				debounceTime(500),
			)
			.subscribe(() => this.setQueryParams());

		this.route.queryParams
			.pipe(
				takeUntil(this.destroyed$),
			)
			.subscribe((params: Params) => {
				this.params = params;
				const { sort, ...selectInputs } = params;

				// TODO: use normalized store
				this.articles.clearAllArticles();
				this.filterForm.patchValue({
					selectInputs,
					sort: this.articleSortOptions.find(option => option.value === sort)
				}, { emitEvent: false });

				this.articles.getAllArticles({
					sort: pathOr(null, ['sort', 'value'], this.filterForm.value),
				});
			});

		this.articles$ = this.articles.selectAll();
		this.loading$ = this.articles.selectLoading();

		this.translate.get('PAGE_TITLE__MY_PROJECTS')
			.pipe(takeUntil(this.destroyed$))
			.subscribe((title: string) => this.context.setHeaderInfo({ title }));
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();

		this.articles.clearAllArticles();
	}

	private setQueryParams(): void {
		const { selectInputs, sort } = this.filterForm.value;

		this.router.navigate(['.'], {
			relativeTo: this.route,
			queryParams: {
				...sort && { sort: sort.value },
				...selectInputs,
			},
		});
	}

	public clearFilters(): void {
		const { sort } = this.filterForm.value;
		this.filterForm.get('selectInputs').reset({ emitEvent: false });

		this.router.navigate(['.'], {
			relativeTo: this.route,
			queryParams: {
				...sort && { sort: sort.value },
			},
		});
	}
}
