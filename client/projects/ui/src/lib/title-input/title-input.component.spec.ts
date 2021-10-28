
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { IconComponent } from '../icon/icon.component';

import { TitleInputComponent } from './title-input.component';

describe('TitleInputComponent', () => {
	let component: TitleInputComponent;
	let fixture: ComponentFixture<TitleInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TitleInputComponent, IconComponent ],
			imports: [
				FormsModule,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TitleInputComponent);
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
