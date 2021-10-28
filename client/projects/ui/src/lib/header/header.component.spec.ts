import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				ReactiveFormsModule,
				TranslateModule.forRoot(),
				BreadcrumbModule,
				ButtonModule,
				IconModule,
			],
			declarations: [
				HeaderComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	it('should not render a settings indicator when no ui-settings-indicator is provided', () => {
		expect(
			fixture.debugElement.query(By.css('ui-settings-indicator'))
		).toBeFalsy();
	});
});
