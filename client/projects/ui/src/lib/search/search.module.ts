import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EmptyStateModule } from '../empty-state/empty-state.module';
import { IconModule } from '../icon/icon.module';

import { SearchContentComponent } from './content/search-content.component';
import { SearchFieldComponent } from './field/search-field.component';
import { SearchGroupComponent } from './group/search-group.component';
import { SearchIndicatorComponent } from './indicator/search-indicator.component';
import { SearchQueryComponent } from './query/search-query.component';
import { SearchResultComponent } from './result/search-result.component';
import { SearchResultsComponent } from './results/search-results.component';
import { SearchComponent } from './search.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		EmptyStateModule,
	],
	declarations: [
		SearchComponent,
		SearchContentComponent,
		SearchFieldComponent,
		SearchGroupComponent,
		SearchIndicatorComponent,
		SearchQueryComponent,
		SearchResultComponent,
		SearchResultsComponent,
	],
	exports: [
		SearchComponent,
		SearchContentComponent,
		SearchFieldComponent,
		SearchGroupComponent,
		SearchIndicatorComponent,
		SearchQueryComponent,
		SearchResultComponent,
		SearchResultsComponent,
	],
})
export class SearchModule {}
