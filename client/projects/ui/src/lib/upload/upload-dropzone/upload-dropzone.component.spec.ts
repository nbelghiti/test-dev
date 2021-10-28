
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../button/button/button.component';
import { DialogModule } from '../../dialog/dialog.module';
import { IconComponent } from '../../icon/icon.component';
import { LinkComponent } from '../../link/link.component';
import { LoaderComponent } from '../../loader/loader.component';

import { UploadDropzoneComponent } from './upload-dropzone.component';

describe('UploadDropzoneComponent', () => {
	let component: UploadDropzoneComponent;
	let fixture: ComponentFixture<UploadDropzoneComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot(),
				FormsModule,
				DialogModule
			],
			declarations: [
				UploadDropzoneComponent,
				IconComponent,
				LinkComponent,
				ButtonComponent,
				LoaderComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UploadDropzoneComponent);
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
