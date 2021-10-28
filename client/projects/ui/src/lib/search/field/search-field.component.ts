import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	Output,
	SimpleChanges,
	ViewChild,
	forwardRef,
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { propOr } from 'ramda';
import { Subject, combineLatest, merge, of } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

import { ISearchQuery } from '../search.types';

@Component({
	selector: 'ui-search-field',
	templateUrl: './search-field.component.html',
	styleUrls: ['./search-field.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => SearchFieldComponent),
		multi: true,
	}]
})
export class SearchFieldComponent implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
	@ViewChild('input', { static: false }) public input: ElementRef<HTMLInputElement>;
	@Input() public placeholder: string;
	@Input() public tag: string;
	@Input() public tagKey: string;

	// "search" is a native HTML event
	@Output() public qSearch: EventEmitter<ISearchQuery> = new EventEmitter<ISearchQuery>();
	@Output() public tagged: EventEmitter<boolean> = new EventEmitter<boolean>();

	public searchForm = new FormGroup({
		query: new FormControl(null),
		tagQuery: new FormControl(null),
		tagged: new FormControl(null),
	});

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	public onChange: (value: ISearchQuery) => void = () => { };

	public ngAfterViewInit(): void {
		this.focus();

		this.searchForm.get('query').valueChanges
			.pipe(
				takeUntil(this.destroyed$),
				filter((query: string) => /^in:/i.test(query))
			)
			.subscribe((query: string) => {
				const strippedValue = query.replace(/^in:/i, '');
				const tagQuery = this.searchForm.get('tagQuery');

				if (strippedValue !== tagQuery.value) {
					this.searchForm.setValue({
						query: null,
						tagQuery: strippedValue,
						tagged: true,
					});
				}
			});

		combineLatest([
			this.searchForm.get('query').valueChanges.pipe(debounceTime(500)),
			merge(
				of(null),
				this.searchForm.get('tagQuery').valueChanges.pipe(debounceTime(500)),
			),
		]).pipe(
			takeUntil(this.destroyed$),
		).subscribe(([query, tag]: [string, string]) => {
			this.onChange({ query, [this.tagKey]: tag });
		});

		this.searchForm.get('tagged').valueChanges
			.pipe(
				takeUntil(this.destroyed$),
			)
			.subscribe((tagged: boolean) => {
				this.tagged.emit(tagged);

				if (!!tagged) {
					setTimeout(() => {
						// trigger new search for updated params
						this.onSubmit();
						this.focus();
					});
				}
			});
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.tag && changes.tag.currentValue) {
			this.searchForm.patchValue({
				query: null,
				tagQuery: null,
				tagged: true,
			}, { emitEvent: false });

			setTimeout(() => {
				this.focus();
			});
		}
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	public writeValue(value: ISearchQuery): void {
		this.searchForm.setValue({
			query: propOr(null, 'query', value),
			tagQuery: !!this.tagKey ? propOr(null, this.tagKey, value) : null,
			tagged: !!this.tagKey && (!!this.tag || !!propOr(null, this.tagKey, value)),
		}, { emitEvent: false });
	}

	public registerOnChange(onChange: (value: ISearchQuery) => void): void {
		this.onChange = onChange;
	}

	public registerOnTouched() { }

	public handleKeyDown(e: KeyboardEvent): void {
		// only act if backspace was pressed
		if (!this.isBackspace(e)) { // backspace
			return;
		}

		const { tagged, query } = this.searchForm.value;

		// only act if in tagged mode
		if (!this.tagKey || !tagged) {
			return;
		}

		// don't act if there is a query
		if (!!query) {
			return;
		}

		this.searchForm.patchValue({
			tagQuery: null,
			tagged: false,
		});
	}

	public onSubmit(): void {
		const { query } = this.searchForm.value;

		this.qSearch.emit({
			query,
		});
	}

	private isBackspace(e: KeyboardEvent): boolean {
		const key: string = e.key || (e as any).keyCode || (e as any).which;

		return key === 'Backspace' || parseInt(key, 10) === 8;
	}

	private focus(): void {
		this.input.nativeElement.focus();
	}
}
