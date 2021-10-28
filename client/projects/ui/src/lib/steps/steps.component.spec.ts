import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { StepItemComponent } from './step-item/step-item.component';
import { StepsComponent } from './steps.component';

describe('StepsComponent', () => {
	let component: StepsComponent;
	let fixture: ComponentFixture<StepsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				StepsComponent,
				StepItemComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StepsComponent);
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
