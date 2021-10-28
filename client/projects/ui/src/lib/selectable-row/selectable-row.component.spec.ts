import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { IconComponent } from '../icon/icon.component';

import { SelectableRowComponent } from './selectable-row.component';

describe('SelectableRowComponent', () => {
	let component: SelectableRowComponent;
	let fixture: ComponentFixture<SelectableRowComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				ReactiveFormsModule
			],
			declarations: [
				SelectableRowComponent,
				IconComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectableRowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	describe('destroy', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(SelectableRowComponent);
			component = fixture.componentInstance;

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

	describe('writeValue', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(SelectableRowComponent);
			component = fixture.componentInstance;

			fixture.detectChanges();
		});

		it('should set the isChecked property', () => {
			expect(component.isChecked.value).toBe(false);

			component.writeValue(true);

			expect(component.isChecked.value).toBe(true);
		});
	});
});
