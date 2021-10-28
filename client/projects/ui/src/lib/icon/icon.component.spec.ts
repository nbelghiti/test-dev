import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
	let component: IconComponent;
	let fixture: ComponentFixture<IconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IconComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IconComponent);
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
