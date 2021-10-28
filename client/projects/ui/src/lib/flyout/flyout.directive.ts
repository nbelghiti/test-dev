import {
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FlyoutService } from './flyout.service';
import { FlyoutState } from './flyout.types';

@Directive({
	selector: '[uiFlyout]',
	providers: [FlyoutService],
})
export class FlyoutDirective implements OnInit, OnDestroy {
	@Input() public initialState: FlyoutState = FlyoutState.CLOSED;

	@Output() public open: EventEmitter<void> = new EventEmitter<void>();
	@Output() public close: EventEmitter<void> = new EventEmitter<void>();

	@HostBinding('class.c-flyout') public get flyoutClass() {
		return true;
	}
	@HostBinding('class.is-closed') public get isClosed() {
		return !this.opened;
	}
	@HostBinding('class.is-open') public get isOpen() {
		return this.opened;
	}

	public opened = false;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private flyoutService: FlyoutService,
		private hostEl: ElementRef
	) { }

	public ngOnInit(): void {
		this.flyoutService.state$
			.pipe(takeUntil(this.destroyed$))
			.subscribe((state: FlyoutState) => {
				switch (state) {
					case FlyoutState.CLOSED:
						if (this.opened) {
							this.opened = false;
							this.close.emit();
						}
						break;
					case FlyoutState.OPEN:
						if (!this.opened) {
							this.opened = true;
							this.open.emit();
						}
						break;
					case FlyoutState.TOGGLE:
						this.opened = !this.opened;

						if (this.opened) {
							this.open.emit();
							break;
						}

						this.close.emit();
						break;
					case FlyoutState.FOCUS:
						this.opened = !this.opened;

						if (this.opened) {
							this.open.emit();
							break;
						}

						this.close.emit();
						break;
				}
			});
	}

	public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

	@HostListener('document:click', ['$event'])
	public handleDocumentClick(e: MouseEvent): void {
		if (
			this.hostEl.nativeElement === e.target ||
			this.hostEl.nativeElement.contains(e.target)
		) {
			return;
		}

		this.flyoutService.close();
	}
}
