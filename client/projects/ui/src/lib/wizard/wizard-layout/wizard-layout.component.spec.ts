import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbItemComponent } from '../../breadcrumb/breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbComponent } from '../../breadcrumb/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../button/button/button.component';
import { FilterMenuItemComponent } from '../../filter/filter-menu-item/filter-menu-item.component';
import { FilterMenuComponent } from '../../filter/filter-menu/filter-menu.component';
import { IconComponent } from '../../icon/icon.component';
import { StepsModule } from '../../steps/steps.module';
import { IStep } from '../../steps/steps.types';

import { WizardLayoutComponent } from './wizard-layout.component';

const MockSteps = [{
	title: 'First step',
	description: 'This is the first step',
}, {
	title: 'Second step',
	description: 'This is the second step',
}, {
	title: 'Third step',
	description: 'This is the third step',
}];

@Component({
	template: `
		<ui-wizard-layout [showSteps]="showSteps" [steps]="steps" [activeIndex]="activeIndex">
			<ng-container ngProjectAs="header">
				<h1 id="test-header">Test header</h1>
			</ng-container>
			<ng-container ngProjectAs="body">
				<p id="test-body">Test body</p>
			</ng-container>
			<ng-container ngProjectAs="footer">
				<div id="test-footer">Test footer</div>
			</ng-container>
		</ui-wizard-layout>
	`
})
export class TestWrapperComponent {
	public showSteps;
	public steps: IStep[] = MockSteps;
	public activeIndex: number = 1;
}

const validateWizardContent = (el: DebugElement): void => {
	const wizard = el.nativeElement;

	const header = wizard.querySelector('.l-step-wizard__header h1#test-header').textContent;
	expect(header).toContain('Test header');

	const body = wizard.querySelector('.l-step-wizard__container p#test-body').textContent;
	expect(body).toBe('Test body');

	const footer = wizard.querySelector('.l-step-wizard__footer div#test-footer').textContent;
	expect(footer).toContain('Test footer');
};

describe('WizardLayoutComponent', () => {
	let fixture: ComponentFixture<TestWrapperComponent>;
	let component: TestWrapperComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				TestWrapperComponent,
				WizardLayoutComponent,
				BreadcrumbComponent,
				BreadcrumbItemComponent,
				IconComponent,
				FilterMenuComponent,
				FilterMenuItemComponent,
				ButtonComponent,
			],
			imports: [
				StepsModule,
				ReactiveFormsModule,
				RouterTestingModule,
				TranslateModule.forRoot(),
			],
		});

		fixture = TestBed.createComponent(TestWrapperComponent);
		component = fixture.componentInstance;
	});

	describe('default state and behaviour', () => {
		it('Should render correctly', () => {
			expect(fixture).toMatchSnapshot();
		});

		it('should render the wizard without steps by default', () => {
			validateWizardContent(fixture.debugElement);

			const steps = fixture.debugElement.query(By.css('.l-step-wizard__steps'));
			expect(steps).toBeNull();
		});
	});

	describe('with steps', () => {
		it('should render the content as usual', () => {
			component.showSteps = true;
			fixture.detectChanges();

			validateWizardContent(fixture.debugElement);
		});

		it('should render the wizard with steps when showSteps is true', () => {
			component.showSteps = true;
			fixture.detectChanges();

			const steps = fixture.debugElement.query(By.css('.l-step-wizard__steps'));
			expect(steps).not.toBeNull();
		});

		it('the content of the steps should match the given steps object', () => {
			component.showSteps = true;
			fixture.detectChanges();

			const items = fixture.debugElement.queryAll(By.css('.c-step-item'));
			expect(items.length).toBe(3);

			const firstItemNumber = items[0].nativeElement.querySelector('.c-step-item__number').textContent;
			expect(parseInt(firstItemNumber, 10)).toBe(1);

			const firstItemTitle = items[0].nativeElement.querySelector('.c-step-item__title').textContent;
			expect(firstItemTitle).toContain(component.steps[0].title);

			const firstItemDescription = items[0].nativeElement.querySelector('.c-step-item__description').textContent;
			expect(firstItemDescription).toContain(component.steps[0].description);
		});
	});
});
