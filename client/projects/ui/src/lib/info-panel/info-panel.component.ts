import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
	selector: 'ui-info-panel',
	templateUrl: './info-panel.component.html',
	styleUrls: ['./info-panel.component.scss']
})

export class InfoPanelComponent implements AfterViewInit {
	@Input() public title: string;

	@ViewChild('content', {static: false}) contentChild: ElementRef<any>;
	public hasContent: boolean = true;

	public ngAfterViewInit(): void {
		setTimeout(() => {
			if (!this.contentChild) { return; }

			this.hasContent = this.contentChild.nativeElement.childNodes.length ? true : false;
		});
	}
}
