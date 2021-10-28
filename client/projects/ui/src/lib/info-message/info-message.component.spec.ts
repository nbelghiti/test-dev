import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IconComponent } from '../icon/icon.component';
import { LinkComponent } from '../link/link.component';

import { InfoMessageComponent } from './info-message.component';

describe('InfoMessageComponent', () => {
	let component: InfoMessageComponent;
	let fixture: ComponentFixture<InfoMessageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				InfoMessageComponent,
				IconComponent,
				LinkComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoMessageComponent);
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

