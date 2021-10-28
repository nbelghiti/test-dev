import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isNil, pathOr } from 'ramda';

import { CardAlignType } from './card.types';

@Component({
	selector: 'ui-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
	@Input() public imageSrc: string;
	@Input() public withImage: boolean = false;
	@Input() public link: string;
	@Input() public queryParams: { [key: string]: string };
	@Input() public align: CardAlignType = CardAlignType.start;
	@Input() public border: boolean = true;
	@Input() public loading: boolean = false;
	@Input() public hasActions: boolean = false;
	@Input() public column: boolean = false;

	public CardAlignType: typeof CardAlignType = CardAlignType;
	public cardThumbnail: string = null;

	public ngOnChanges(changes: SimpleChanges): void {
		const imageSrc = pathOr(null, ['imageSrc', 'currentValue'], changes);

		if (!isNil(imageSrc)) {
			this.cardThumbnail = imageSrc.indexOf('http') !== -1
			? `url(${imageSrc})`
			: `url(${this.encodeImageSrc(imageSrc)})`;
		}
	}

	private encodeImageSrc(src: string): string {
		return src.split('/').map(encodeURIComponent).join('/');
	}
}
