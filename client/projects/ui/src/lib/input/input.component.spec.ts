import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IconComponent } from '../icon/icon.component';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
	let component: InputComponent;
	let fixture: ComponentFixture<InputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
			],
			declarations: [
				InputComponent,
				IconComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	it('should set value to input after writeValue has been called', () => {
		const value = 'value';
		component.writeValue(value);

		fixture.detectChanges();

		const pElement = fixture.debugElement.query(By.css('input'));

		expect(pElement.nativeElement.value).toContain(value);
	});

	it('should set the disabled state of the input', () => {
		component.onChange = jest.fn();
		component.setDisabledState(true);

		fixture.detectChanges();

		const pElement = fixture.debugElement.query(By.css('input'));

		expect(pElement.nativeElement.disabled).toBe(true);

		component.setDisabledState(false);

		expect(pElement.nativeElement.disabled).toBe(false);
	});

	describe('destroy', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(InputComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should set a value to the destroyed$ Subject, destroying all subscriptions', async (done: jest.DoneCallback) => {
			const testSub = component['destroyed$']
				.subscribe((triggered: boolean) => {
					expect(triggered).toBe(true);

					testSub.unsubscribe();

					done();
				});

			component.ngOnDestroy();
		});
	});
});
