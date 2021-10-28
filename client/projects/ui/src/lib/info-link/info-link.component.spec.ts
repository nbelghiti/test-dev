import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';

import { InfoLinkComponent } from './info-link.component';

describe('InfoLinkComponent', () => {
	let component: InfoLinkComponent;
	let fixture: ComponentFixture<InfoLinkComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				InfoLinkComponent,
				IconComponent,
				HeadingComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoLinkComponent);
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

