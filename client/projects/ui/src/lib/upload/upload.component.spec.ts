
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../button/button/button.component';
import { DialogModule } from '../dialog/dialog.module';
import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';
import { InfoItemComponent } from '../info-item/info-item.component';
import { LinkComponent } from '../link/link.component';
import { ListComponent } from '../list/list.component';
import { LoaderComponent } from '../loader/loader.component';

import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { UploadDropzoneComponent } from './upload-dropzone/upload-dropzone.component';
import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
	let component: UploadComponent;
	let fixture: ComponentFixture<UploadComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot(),
				FormsModule,
				DialogModule
			],
			declarations: [
				UploadComponent,
				IconComponent,
				LinkComponent,
				ButtonComponent,
				UploadDropzoneComponent,
				UploadDialogComponent,
				LoaderComponent,
				HeadingComponent,
				InfoItemComponent,
				ListComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UploadComponent);
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
