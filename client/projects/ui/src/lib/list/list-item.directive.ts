import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[uiListItem]'
})
export class ListItemDirective {
	constructor(public itemTemplate: TemplateRef<any>) {}
}
