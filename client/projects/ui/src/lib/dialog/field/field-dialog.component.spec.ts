
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../button/button/button.component';
import { HeadingComponent } from '../../heading/heading.component';
import { IconComponent } from '../../icon/icon.component';
import { InfoItemComponent } from '../../info-item/info-item.component';
import { InputComponent } from '../../input/input.component';
import { ListComponent } from '../../list/list.component';
import { LoaderComponent } from '../../loader/loader.component';
import { SelectComponent } from '../../select/select.component';
import { TextareaComponent } from '../../textarea/textarea.component';
import { DialogModule } from '../dialog.module';
import { IDialogResponse } from '../dialog.types';

import { FieldDialogComponent } from './field-dialog.component';
import { UIField } from './field-dialog.types';

describe('FieldDialogComponent', () => {
	let component: FieldDialogComponent;
	let fixture: ComponentFixture<FieldDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
				ReactiveFormsModule,
				FormsModule,
				DialogModule,
				RouterTestingModule
			],
			declarations: [
				FieldDialogComponent,
				IconComponent,
				ButtonComponent,
				InputComponent,
				TextareaComponent,
				SelectComponent,
				LoaderComponent,
				HeadingComponent,
				InfoItemComponent,
				ListComponent
			],
		})
		.compileComponents();
	}));

	describe('init', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeDefined();
		});

		it('should render', () => {
			expect(fixture).toMatchSnapshot();
		});

		it('should call the initForm function', () => {
			const spy = jest.spyOn(component, 'initForm').mockImplementation();

			component.ngOnInit();

			expect(spy).toHaveBeenCalled();
		});

		it('should set variables', () => {
			expect(component.unitTypeOptions).toBeDefined();
			expect(component.typeOptions).toBeDefined();
			expect(component.isEdit).toEqual(true);
		});
	});

	describe('destroy', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should set a value to the destroyed$ Subject, destroying all subscriptions', async(done: jest.DoneCallback) => {
			const testSub = component['destroyed$']
				.subscribe((triggered: boolean) => {
					expect(triggered).toBe(true);

					testSub.unsubscribe();

					done();
				});

			component.ngOnDestroy();
		});
	});

	describe('completeCallback', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should set the response and isPending status', () => {
			component.completeCallback({
				message: 'some-response',
			} as IDialogResponse);

			expect(component.response).toEqual({
				message: 'some-response',
			});
			expect(component.isPending).toEqual(false);
		});
	});

	describe('initForm', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should initialize the form', () => {
			component.initForm({
				id: 'some-id',
				description: 'some-description',
			} as UIField);

			expect(component.fieldForm).toBeDefined();
			expect(component.fieldForm.get('id').value).toEqual('some-id');
			expect(component.isPending).toEqual(false);
		});

		it('should call the getUnitTypeOptions function', () => {
			const spy = jest.spyOn(component, 'getUnitOptions' as any).mockImplementation();

			component.initForm({
				id: 'some-id',
				description: 'some-description',
				unitType: 'some-unit-type',
			} as UIField);

			expect(spy).toHaveBeenCalledWith('some-unit-type');
		});
	});

	describe('getDescriptionErrors', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should return a forbidden name error', () => {
			component.fieldForm.controls['description'].setErrors({
				forbiddenName: true,
			});
			component.fieldForm.markAllAsTouched();

			const result = component.getDescriptionErrors();

			expect(result).toEqual('FIELD_DIALOG__FORBIDDEN_DESCRIPTION_ERROR');
		});

		it('should return a description error', () => {
			component.fieldForm.controls['description'].setErrors({
				required: true,
			});
			component.fieldForm.markAllAsTouched();

			const result = component.getDescriptionErrors();

			expect(result).toEqual('FIELD_DIALOG__DESCRIPTION_ERROR');
		});
	});

	describe('onSave', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should call the markFormTouched function', () => {
			const spy = jest.spyOn(component, 'markFormTouched' as any);

			component.onSave();

			expect(spy).toHaveBeenCalled();
		});

		it('should return when form is invalid', () => {
			component.actions = {
				save: jest.fn,
			};
			component.fieldForm.controls['description'].setErrors({'required': true});

			const spy = jest.spyOn(component.actions, 'save');

			component.onSave();

			expect(spy).not.toHaveBeenCalled();
		});

		it('should call save action', () => {
			jest.spyOn(component, 'markFormTouched' as any).mockImplementation();
			component.fieldForm = {
				invalid: false,
				value: 'form-value',
			} as any;

			component.actions = {
				save: jest.fn,
			};
			component.confirmSave = false;

			const actionSpy = jest.spyOn(component.actions, 'save');

			component.onSave();

			expect(actionSpy).toHaveBeenCalled();
		});

		it('should call confirm action', () => {
			jest.spyOn(component, 'markFormTouched' as any).mockImplementation();
			component.fieldForm = {
				invalid: false,
				value: 'form-value',
			} as any;

			component.actions = {
				confirm: jest.fn,
			};
			component.confirmSave = true;

			const actionSpy = jest.spyOn(component.actions, 'confirm');

			component.onSave();

			expect(actionSpy).toHaveBeenCalled();
		});
	});

	describe('onCancel', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(FieldDialogComponent);
			component = fixture.componentInstance;
			component.data = {
				description: 'some-description',
			};
			fixture.detectChanges();
		});

		it('should call the closeDialog function', () => {
			component.closeDialog = jest.fn;

			const spy = jest.spyOn(component, 'closeDialog');

			component.onCancel();

			expect(spy).toHaveBeenCalled();
		});
	});
});
