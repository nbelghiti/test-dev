
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../button/button/button.component';
import { HeadingComponent } from '../../heading/heading.component';
import { IconComponent } from '../../icon/icon.component';
import { LinkComponent } from '../../link/link.component';
import { LoaderComponent } from '../../loader/loader.component';
import { SelectComponent } from '../../select/select.component';
import { DialogModule } from '../dialog.module';

import { NewMemberDialogComponent } from './new-member-dialog.component';

describe('NewMemberDialogComponent', () => {
	let component: NewMemberDialogComponent;
	let fixture: ComponentFixture<NewMemberDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot(),
				ReactiveFormsModule,
				FormsModule,
				DialogModule
			],
			declarations: [
				NewMemberDialogComponent,
				IconComponent,
				LinkComponent,
				ButtonComponent,
				SelectComponent,
				LoaderComponent,
				HeadingComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NewMemberDialogComponent);
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
