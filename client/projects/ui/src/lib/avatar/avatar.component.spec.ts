import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { getInitials } from './avatar.utils';

describe('AvatarComponent', () => {
	let component: AvatarComponent;
	let fixture: ComponentFixture<AvatarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AvatarComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AvatarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	it('Should get the initials correctly', () => {
		expect(getInitials('John Doe')).toEqual('JD');
		expect(getInitials('John Doe The Second')).toEqual('JS');
	});
});
