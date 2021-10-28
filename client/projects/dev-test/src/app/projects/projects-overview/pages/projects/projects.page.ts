import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { pathOr } from 'ramda';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { ButtonType, FlyoutState, IconName } from 'adb-ui';

import { ContextFacade } from '~/core/context/facades/context.facade';
import { ProjectsFacade } from '~/projects/projects-shared/facades/projects/projects.facade';
import { IProject } from '~/repositories/projects/services/projects.types';

@Component({
	templateUrl: './projects.page.html',
})

export class ProjectsPage implements OnDestroy {
	public projects$: Observable<IProject[]>;
	public loading$: Observable<boolean>;
	public filterForm: FormGroup;
	public params: Params;
	public projectSortOptions = [
		{
			label: 'Most recent update',
			value: 'updatedAt',
		},
		{
			label: 'Project name',
			value: 'name',
		},
	];
	public FlyoutState = FlyoutState;
	public IconName: typeof IconName = IconName;
	public ButtonType: typeof ButtonType = ButtonType;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private projects: ProjectsFacade,
		private context: ContextFacade,
		private translate: TranslateService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.filterForm = new FormGroup({
			selectInputs: new FormControl(null),
			sort: new FormControl(
				this.projectSortOptions.find(option => option.value === this.route.snapshot.queryParams.sort)
				|| this.projectSortOptions[0]
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
				this.projects.clearAllProjects();
				this.filterForm.patchValue({
					selectInputs,
					sort: this.projectSortOptions.find(option => option.value === sort)
				}, { emitEvent: false });

				this.projects.getAllProjects({
					status: pathOr(null, ['selectInputs', 'status'], this.filterForm.value),
					accType: pathOr(null, ['selectInputs', 'accType'], this.filterForm.value),
					accFormat: pathOr(null, ['selectInputs', 'accFormat'], this.filterForm.value),
					location: pathOr(null, ['selectInputs', 'location'], this.filterForm.value),
					sort: pathOr(null, ['sort', 'value'], this.filterForm.value),
				});
			});

		this.projects$ = this.projects.selectAll();
		this.loading$ = this.projects.selectLoading();

		this.translate.get('PAGE_TITLE__MY_PROJECTS')
			.pipe(takeUntil(this.destroyed$))
			.subscribe((title: string) => this.context.setHeaderInfo({ title }));
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();

		this.projects.clearAllProjects();
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
