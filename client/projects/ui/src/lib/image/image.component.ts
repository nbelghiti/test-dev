import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { pathOr } from 'ramda';

@Component({
	selector: 'ui-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnChanges {
	@Input() source: string;

	public image = `url('assets/fallback/fallback.png')`;

	public ngOnChanges(changes: SimpleChanges) {
		const imageSrc = pathOr(null, ['source', 'currentValue'], changes);

		if (imageSrc) {
			this.image = `url(${imageSrc})`;
		}
	}
}

