import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
	let component: LoaderComponent;
	let fixture: ComponentFixture<LoaderComponent>;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [
				LoaderComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoaderComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should render without crashing', fakeAsync(() => {
		const mockLottie = {
			loadAnimation: jest.fn(),
		};

		component.lottie = mockLottie;
		component.loading = true;

		fixture.detectChanges();

		component.ngOnChanges({
			loading: {
				currentValue: true,
			},
		} as any);

		fixture.detectChanges();

		tick(500);

		expect(mockLottie.loadAnimation).toHaveBeenCalled();
	}));
});
