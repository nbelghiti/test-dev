import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';

import { InfoItemComponent } from './info-item.component';

describe('InfoItemComponent', () => {
	let component: InfoItemComponent;
	let fixture: ComponentFixture<InfoItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				InfoItemComponent,
				IconComponent,
				HeadingComponent
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoItemComponent);
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

