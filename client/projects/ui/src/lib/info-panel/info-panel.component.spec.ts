import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HeadingComponent } from '../heading/heading.component';

import { InfoPanelComponent } from './info-panel.component';

describe('InfoPanelComponent', () => {
	let component: InfoPanelComponent;
	let fixture: ComponentFixture<InfoPanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ InfoPanelComponent, HeadingComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoPanelComponent);
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
