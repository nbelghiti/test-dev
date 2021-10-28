import { DOCUMENT } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	Inject,
	Input,
	OnChanges,
	QueryList,
	SimpleChanges,
	ViewChildren,
} from '@angular/core';
import { pathOr } from 'ramda';
import { ReplaySubject, Subject, merge, of } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'ui-loader',
	templateUrl: './loader.component.html',
})

export class LoaderComponent implements OnChanges, AfterViewInit {
	@Input() public uploadingMsg: boolean = false;
	@Input() public loading: boolean = false;
	@Input() public simpleLoader: boolean = false;
	@ViewChildren('loader', { read: ElementRef }) public loader: QueryList<ElementRef>;

	public lottie;

	private destroyed$: Subject<boolean> = new Subject<boolean>();
	private loader$: ReplaySubject<ElementRef> = new ReplaySubject<ElementRef>(1);

	// implementing lottie from cdn to avoid dependency issue, script tag is placed in head tag of index.html
	constructor(
		@Inject(DOCUMENT) doc,
	) {
		this.lottie = pathOr(null, ['defaultView', 'lottie'], doc);
	}

	public ngAfterViewInit(): void {
		merge(
			of(this.loader),
			this.loader.changes,
		)
			.pipe(
				filter((elements: QueryList<ElementRef>) => elements.length > 0),
				map((elements: QueryList<ElementRef>) => elements.first),
				takeUntil(this.destroyed$),
			)
			.subscribe((loader: ElementRef) => {
				this.loader$.next(loader);
			});
	}

	// loadAnimation triggered in OnChanges because not working when initial loading is false
	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.loading && changes.loading.currentValue) {
			setTimeout(() => {
				if  (this.simpleLoader) {
					return;
				}

				this.loadAnimation();
			});
		}
	}

	private loadAnimation(): void {
		if (!this.lottie) {
			return;
		}

		this.loader$
			.pipe(
				take(1),
			)
			.subscribe((loader: ElementRef) => {
				this.lottie.loadAnimation({
					container: loader.nativeElement,
					renderer:  'svg',
					loop:  true,
					autoplay:  true,
					path:  '/assets/loader/loader.json'
				});
			});
	}
}
