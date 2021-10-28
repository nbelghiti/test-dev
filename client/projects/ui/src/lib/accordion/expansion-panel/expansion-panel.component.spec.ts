import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../../icon/icon.component';

import { ExpansionPanelComponent } from './expansion-panel.component';

describe('ExpansionPanelComponent', () => {
	let component: ExpansionPanelComponent;
	let fixture: ComponentFixture<ExpansionPanelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ExpansionPanelComponent,
				IconComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExpansionPanelComponent);
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
