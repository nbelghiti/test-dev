import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon/icon.types';

import { AltButtonComponent } from './alt-button.component';

describe('AltButtonComponent', () => {
	let component: AltButtonComponent;
	let fixture: ComponentFixture<AltButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ AltButtonComponent, IconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AltButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	describe('check inputs', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(AltButtonComponent);

			component = fixture.componentInstance;

			fixture.detectChanges();
		});

		it('should find iconBefore class when iconBefore input is passed', () => {
			component.iconBefore = IconName.book;

			fixture.detectChanges();

			expect(
				fixture.debugElement.query(By.css('.c-alt-button__icon--before'))
			).toBeTruthy();
			expect(
				fixture.debugElement.query(By.css('.c-alt-button__icon--after'))
			).toBeFalsy();
		});

		it('should find iconAfter class when iconAfter input is passed', () => {
			component.iconAfter = IconName.book;

			fixture.detectChanges();

			expect(
				fixture.debugElement.query(By.css('.c-alt-button__icon--after'))
			).toBeTruthy();
			expect(
				fixture.debugElement.query(By.css('.c-alt-button__icon--before'))
			).toBeFalsy();
		});

		it('should trigger clicked output when button is clicked', () => {
			let target = null;

			const buttonEl = fixture.nativeElement.firstElementChild;
			component.clicked.subscribe(val => target = val.target);

			buttonEl.click();

			expect(target).toEqual(buttonEl);
		});
	});

});
