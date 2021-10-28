import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../../icon/icon.component';

import { NotificationIndicatorComponent } from './indicator.component';

describe('NotificationIndicatorComponent', () => {
	let component: NotificationIndicatorComponent;
	let fixture: ComponentFixture<NotificationIndicatorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [
			NotificationIndicatorComponent,
			IconComponent,
		]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationIndicatorComponent);
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
