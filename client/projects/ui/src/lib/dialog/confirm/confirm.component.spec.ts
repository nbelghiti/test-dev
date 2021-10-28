
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../button/button/button.component';
import { IconButtonComponent } from '../../button/icon-button/icon-button.component';
import { HeadingComponent } from '../../heading/heading.component';
import { IconComponent } from '../../icon/icon.component';
import { InfoItemComponent } from '../../info-item/info-item.component';
import { InputComponent } from '../../input/input.component';
import { ListComponent } from '../../list/list.component';
import { LoaderComponent } from '../../loader/loader.component';
import { SelectComponent } from '../../select/select.component';
import { TextareaComponent } from '../../textarea/textarea.component';
import { DialogModule } from '../dialog.module';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmComponent } from './confirm.component';

describe('ConfirmComponent', () => {
	let component: ConfirmComponent;
	let fixture: ComponentFixture<ConfirmComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot(),
				ReactiveFormsModule,
				FormsModule,
				DialogModule,
			],
			declarations: [
				ConfirmComponent,
				ConfirmDialogComponent,
				IconComponent,
				IconButtonComponent,
				ButtonComponent,
				InputComponent,
				TextareaComponent,
				SelectComponent,
				LoaderComponent,
				HeadingComponent,
				InfoItemComponent,
				ListComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConfirmComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});
});
