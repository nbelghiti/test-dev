import {
	ApplicationRef,
	ComponentFactoryResolver,
	ComponentRef,
	Inject,
	Injectable,
	Injector,
	Type,
} from '@angular/core';

import { DIALOG_OVERLAY } from './dialog.conf';
import { IDialog } from './dialog.types';
import { IDialogActions, IDialogData } from './dialog.types';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	private dialogs: Set<ComponentRef<unknown>> = new Set<ComponentRef<unknown>>();
	private overlayRef: ComponentRef<unknown> = null;

	constructor(
		@Inject(DIALOG_OVERLAY) private overlay: Type<unknown>,
		private appRef: ApplicationRef,
		private resolver: ComponentFactoryResolver,
		private injector: Injector,
	) { }

	public openDialog({
		dialog,
		actions,
		data,
		hasDescription = true,
	}: {
		dialog: Type<IDialog>;
		actions?: IDialogActions;
		data?: IDialogData;
		hasDescription?: Boolean;
	}): ComponentRef<IDialog> {
		this.attachOverlay();

		const dialogRef = this.attachView(dialog);

		dialogRef.instance.actions = actions;
		dialogRef.instance.data = data;
		dialogRef.instance.closeDialog = this.bindDialogClose(dialogRef);
		dialogRef.instance.hasDescription = hasDescription;

		dialogRef.onDestroy(() => {
			this.detachView(dialogRef);
			this.dialogs.delete(dialogRef);

			if (this.dialogs.size === 0) {
				this.overlayRef.destroy();
			}
		});

		this.dialogs.add(dialogRef);

		this.attachRef(dialogRef, this.overlayRef);

		return dialogRef;
	}

	public closeDialog(dialogRef: ComponentRef<unknown>): void {
		if (!this.dialogs.has(dialogRef)) {
			return;
		}

		dialogRef.destroy();
	}

	public closeActiveDialog(): void {
		const lastAdded = Array.from(this.dialogs).pop();

		this.closeDialog(lastAdded);
	}

	private attachOverlay(): void {
		if (this.overlayRef) {
			return;
		}

		this.overlayRef = this.attachView(this.overlay);

		this.overlayRef.onDestroy(() => {
			this.detachView(this.overlayRef);
			this.overlayRef = null;
		});

		this.attachRef(this.overlayRef);
	}

	private detachView(typeRef: ComponentRef<unknown>): void {
		if (typeRef && typeRef.hostView) {
			this.appRef.detachView(typeRef.hostView);
		}
	}

	private attachView<T = unknown>(type: Type<T>): ComponentRef<T> {
		const typeFactory = this.resolver.resolveComponentFactory(type);
		const typeRef = typeFactory.create(this.injector);

		this.appRef.attachView(typeRef.hostView);

		return typeRef;
	}

	private attachRef(ref: ComponentRef<unknown>, root?: ComponentRef<unknown>): void {
		const rootElement = (root || this.appRef.components[0]).location.nativeElement;

		rootElement.appendChild(ref.location.nativeElement);
	}

	private bindDialogClose(ref: ComponentRef<IDialog>): () => void {
		const originalClose = ref.instance.closeDialog;

		return () => {
			if (originalClose) {
				originalClose.bind(ref.instance)();
			}

			this.closeDialog(ref);
		};
	}
}
