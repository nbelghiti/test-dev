import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
	let component: ImageComponent;
	let fixture: ComponentFixture<ImageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ImageComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	describe('ngOnChanges', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(ImageComponent);
			component = fixture.componentInstance;

			fixture.detectChanges();
		});

		afterEach(() => {
			jest.clearAllMocks();
		});

		it('should insert a fallback when no source is provided', async() => {
			fixture.detectChanges();
			return fixture.whenStable().then(() => {
				const imageSrc = fixture.debugElement.query(By.css('.c-image'));

				expect(imageSrc).not.toBeNull();
				expect(component.image).not.toBeNull();
			});
		});

	});
});
