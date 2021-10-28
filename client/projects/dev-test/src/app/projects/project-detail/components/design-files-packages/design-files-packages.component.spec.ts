import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CardModule, HeadingModule, LinkModule, RowModule } from 'adb-ui';

import { DesignFilesPackagesComponent } from './design-files-packages.component';

describe('DesignFilesPackagesComponent', () => {
	let component: DesignFilesPackagesComponent;
	let fixture: ComponentFixture<DesignFilesPackagesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				// Begin: UI
				RowModule,
				CardModule,
				HeadingModule,
				LinkModule,
				// End: UI Modules
				HttpClientTestingModule,
				TranslateModule.forRoot(),
			],
			declarations: [ DesignFilesPackagesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DesignFilesPackagesComponent);
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
