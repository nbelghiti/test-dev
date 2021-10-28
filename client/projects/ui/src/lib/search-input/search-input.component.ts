import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _debounce from 'lodash/debounce';

const debounce = _debounce;
@Component({
	selector: 'ui-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.scss'],
})

export class SearchInputComponent implements OnInit {
	@Input() public placeholder: string;
	@Input() public compact: boolean = false;
	@Output() public handleSearch: EventEmitter<string> = new EventEmitter<string>();

	public searchForm: FormGroup = new FormGroup({
		value: new FormControl(''),
	});

	ngOnInit(): void {
		this.onChanges();
	}

	onChanges(): void {
		const debouncedChange = debounce((val) => this.search(val), 300);

		this.searchForm.get('value').valueChanges.subscribe(val => {
			debouncedChange(val);
		});
	}

	search(value: string): void {
		this.handleSearch.emit(value);
	}

	onSubmit(): void {
		this.search(this.searchForm.get('value').value);
	}
}
