import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';
import { RowComponent } from '../row/row.component';

import { NotificationIndicatorComponent } from './indicator/indicator.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
	let component: NotificationsComponent;
	let fixture: ComponentFixture<NotificationsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [
				RowComponent,
				HeadingComponent,
				NotificationComponent,
				NotificationsComponent,
				IconComponent,
				EmptyStateComponent,
				NotificationIndicatorComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsComponent);
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
