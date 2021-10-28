import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../icon/icon.component';

import { StatusLabelComponent } from './status-label.component';

describe('StatusLabelComponent', () => {
	let component: StatusLabelComponent;
	let fixture: ComponentFixture<StatusLabelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ StatusLabelComponent, IconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StatusLabelComponent);
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
