import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxModule } from '../checkbox/checkbox.module';
import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';

import { MultiSelectComponent } from './multi-select.component';

describe('MultiSelectComponent', () => {
	let component: MultiSelectComponent;
	let fixture: ComponentFixture<MultiSelectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				IconModule,
				FormsModule,
				FlyoutModule,
				ReactiveFormsModule,
				CheckboxModule,
			],
			declarations: [
				MultiSelectComponent,
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MultiSelectComponent);
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
