
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

import { InstanceDialogComponent } from './instance-dialog.component';

describe('InstanceDialogComponent', () => {
	let component: InstanceDialogComponent;
	let fixture: ComponentFixture<InstanceDialogComponent>;

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
				InstanceDialogComponent,
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

	beforeEach(() => {
		fixture = TestBed.createComponent(InstanceDialogComponent);
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
