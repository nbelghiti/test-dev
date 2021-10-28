import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
	let component: TabComponent;
	let fixture: ComponentFixture<TabComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [
			TabComponent,
		]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TabComponent);
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
