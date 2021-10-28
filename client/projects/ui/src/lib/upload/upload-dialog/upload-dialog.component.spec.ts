
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../button/button/button.component';
import { DialogModule } from '../../dialog/dialog.module';
import { HeadingComponent } from '../../heading/heading.component';
import { IconComponent } from '../../icon/icon.component';
import { InfoItemComponent } from '../../info-item/info-item.component';
import { LinkComponent } from '../../link/link.component';
import { ListComponent } from '../../list/list.component';
import { LoaderComponent } from '../../loader/loader.component';
import { UploadDropzoneComponent } from '../upload-dropzone/upload-dropzone.component';

import { UploadDialogComponent } from './upload-dialog.component';

describe('UploadDialogComponent', () => {
	let component: UploadDialogComponent;
	let fixture: ComponentFixture<UploadDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot(),
				FormsModule,
				DialogModule
			],
			declarations: [
				UploadDialogComponent,
				IconComponent,
				LinkComponent,
				ButtonComponent,
				UploadDropzoneComponent,
				LoaderComponent,
				HeadingComponent,
				InfoItemComponent,
				ListComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UploadDialogComponent);
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
