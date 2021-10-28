import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNil, propOr } from 'ramda';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IProjectsFilter } from '~/repositories/projects/services/projects.types';

import { ProjectLocationOptions, ProjectStatusOptions } from './projects-filter.const';
import { IProjectFilterOption, IProjectFilters } from './projects-filter.types';

@Component({
	selector: 'adb-projects-filter',
	templateUrl: './projects-filter.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ProjectsFilterComponent),
			multi: true,
		},
	],
})
export class ProjectsFilterComponent implements ControlValueAccessor, OnInit, OnDestroy {
	public projectStatusOptions = ProjectStatusOptions;
	public projectLocationOptions = ProjectLocationOptions;
	public value: IProjectsFilter;
	public selectFilterForm: FormGroup;
	public statusKeyValue: IProjectFilterOption;
	public locationKeyValue: IProjectFilterOption;

	private onDestroy$: Subject<boolean> = new Subject<boolean>();

	public ngOnInit(): void {
		this.selectFilterForm = new FormGroup({
			status: new FormControl(null),
			location: new FormControl(null),
		});

		this.selectFilterForm.valueChanges
			.pipe(
				takeUntil(this.onDestroy$),
			)
			.subscribe((formData: IProjectFilters) => {
				Object.keys(formData).forEach((filter: any) => {
					formData[filter] = propOr(null, ['value'], formData[filter]) === '- All' ? null : propOr(null, ['value'], formData[filter]);
				});

				this.onChange(formData);
			});
	}

	public ngOnDestroy(): void {
		this.onDestroy$.next(true);
		this.onDestroy$.complete();
	}

	public onChange: (_) => any = () => { };

	public onTouched = () => { };

	public writeValue(value: IProjectsFilter): void {
		this.statusKeyValue = this.findKeyValue(this.projectStatusOptions, value, 'status');

		this.locationKeyValue = this.findKeyValue(this.projectLocationOptions, value, 'location');

		this.selectFilterForm.patchValue({
			status: this.statusKeyValue,
			location: this.locationKeyValue,
		}, { emitEvent: false, onlySelf: true });
	}

	public registerOnChange(onChange: (_) => any): void {
		this.onChange = onChange;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	private findKeyValue(options: IProjectFilterOption[], value: IProjectsFilter, property: string): IProjectFilterOption {
		const matchingOption = options.find((option: IProjectFilterOption) => option.value === propOr(null, property, value));

		if (propOr('', ['value'], matchingOption) === '- All' || isNil(propOr('', ['value'], matchingOption))) {
			return null;
		}

		return matchingOption;
	}
}
