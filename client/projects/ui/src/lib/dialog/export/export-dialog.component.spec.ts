
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

import { ExportDialogComponent } from './export-dialog.component';
import { UIExportType } from './export-dialog.types';

describe('ExportDialogComponent', () => {
	let component: ExportDialogComponent;
	let fixture: ComponentFixture<ExportDialogComponent>;

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
				ExportDialogComponent,
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
			fixture = TestBed.createComponent(ExportDialogComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeDefined();
		});

		it('should render', () => {
			expect(fixture).toMatchSnapshot();
		});

		it('should set variables', () => {
			const obj = {
				label: 'some-label',
				value: 'some-value'
			};

			component.data = {
				typeOptions: [obj],
				templateOptions: [obj]
			};

			component.ngOnInit();

			expect(component.typeOptions).toEqual([obj]);
			expect(component.templateOptions).toEqual([obj]);
			expect(component.exportForm).toBeTruthy();
		});
	});

	describe('onCancel', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(ExportDialogComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should call the closeDialog function', () => {
			component.closeDialog = jest.fn;

			const spy = jest.spyOn(component, 'closeDialog');

			component.onCancel();

			expect(spy).toHaveBeenCalled();
		});
	});

	describe('onConfirm', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(ExportDialogComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should call the markFormTouched function', () => {
			const spy = jest.spyOn(component, 'markFormTouched' as any);

			component.onConfirm();

			expect(spy).toHaveBeenCalled();
		});

		it('should return when form is invalid', () => {
			component.closeDialog = jest.fn;
			component.exportForm.controls['type'].setErrors({'required': true});

			const spy = jest.spyOn(component, 'closeDialog');

			component.onConfirm();

			expect(spy).not.toHaveBeenCalled();
		});

		it('should call action and close when file is selected', () => {
			component.closeDialog = jest.fn;
			component.actions = {
				confirmExportFile: jest.fn,
			};
			component.exportForm.controls['type'].setValue(UIExportType.file);

			const closeSpy = jest.spyOn(component, 'closeDialog');
			const actionSpy = jest.spyOn(component.actions, 'confirmExportFile');

			component.onConfirm();

			expect(closeSpy).toHaveBeenCalled();
			expect(actionSpy).toHaveBeenCalled();
		});

		it('should call action and close when template is selected', () => {
			component.closeDialog = jest.fn;
			component.actions = {
				confirmExportTemplate: jest.fn,
			};
			component.exportForm.controls['type'].setValue(UIExportType.template);
			component.exportForm.controls['template'].setValue('template-id');

			const closeSpy = jest.spyOn(component, 'closeDialog');
			const actionSpy = jest.spyOn(component.actions, 'confirmExportTemplate');

			component.onConfirm();

			expect(closeSpy).toHaveBeenCalled();
			expect(actionSpy).toHaveBeenCalled();
		});
	});

	afterEach(() => {
		jest.resetAllMocks();
	});
});
