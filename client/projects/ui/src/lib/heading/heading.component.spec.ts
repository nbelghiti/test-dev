import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconModule } from '../icon/icon.module';

import { HeadingComponent } from './heading.component';

describe('HeadingComponent', () => {
	let component: HeadingComponent;
	let fixture: ComponentFixture<HeadingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				IconModule,
			],
			declarations: [
				HeadingComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeadingComponent);
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
