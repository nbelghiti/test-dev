import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('UserInfoComponent', () => {
	let component: SwitchComponent;
	let fixture: ComponentFixture<SwitchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SwitchComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SwitchComponent);
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

