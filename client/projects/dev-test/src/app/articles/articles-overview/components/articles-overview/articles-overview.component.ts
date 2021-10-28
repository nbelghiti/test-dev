import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HeadingLevel, IconName, StatusLabelType } from 'adb-ui';

import { IArticle } from '~/repositories/articles/services/articles.types';

@Component({
	selector: 'adb-articles-overview',
	templateUrl: './articles-overview.component.html',
})

export class ArticlesOverviewComponent {
	@Input() public articles: IArticle[] = [];
	@Input() public loading: boolean = false;
	@Output() public clicked: EventEmitter<string> = new EventEmitter<string>();

	public StatusType: typeof StatusLabelType = StatusLabelType;
	public HeadingLevel: typeof HeadingLevel = HeadingLevel;
	public IconName: typeof IconName = IconName;
	public articlesMy = [
		{
			_id: '5fb25b797b7d474d2c83874f',
			author: {
				picture: 'http://placehold.it/32x32',
				name: {
					first: "Mccoy",
					last: "Bender"
				}
			},
			title: "Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.",
			summary: "Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.",
			intro: "Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.",
			banner: "http://placehold.it/1920x1080",
			body: "Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.",
			assets: [
				{
					src: "http://placehold.it/720x480",
					alt: "Placeholder image 2",
					type: "image"
				},
				{
					src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf",
					alt: "Placeholder file 2",
					type: "file"
				},
				{
					src: "http://placehold.it/900x1200",
					alt: "Placeholder image 3",
					type: "image"
				}
			],
			created: "Monday, August 12, 2019 10:46 PM",
			tags: [
				'hr',
				'updates'
			],
			internal: false
		},
		{
			_id: "5fb25b7933f685ce1884bc2e",
			author: {
				picture: 'http://placehold.it/32x32',
				name: {
					first: "Mccoy",
					last: "Bender"
				}
			},
			title: "Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.",
			summary: "Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.",
			intro: "Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.",
			banner: "http://placehold.it/1920x1080",
			body: "Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.",
			assets: [
				{
					src: "http://placehold.it/720x480",
					alt: "Placeholder image 2",
					type: "image"
				},
				{
					src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf",
					alt: "Placeholder file 2",
					type: "file"
				},
				{
					src: "http://placehold.it/900x1200",
					alt: "Placeholder image 3",
					type: "image"
				}
			],
			created: "Monday, August 12, 2019 10:46 PM",
			tags: [
				'hr',
				'updates'
			],
			internal: true
		},
		{
			"_id": "5fb25b796334facaf3c54018",
			author: {
				picture: 'http://placehold.it/32x32',
				name: {
					first: "Mccoy",
					last: "Bender"
				}
			},
			title: "Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.",
			summary: "Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.",
			intro: "Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.",
			banner: "http://placehold.it/1920x1080",
			body: "Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.",
			assets: [
				{
					src: "http://placehold.it/720x480",
					alt: "Placeholder image 2",
					type: "image"
				},
				{
					src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf",
					alt: "Placeholder file 2",
					type: "file"
				},
				{
					src: "http://placehold.it/900x1200",
					alt: "Placeholder image 3",
					type: "image"
				}
			],
			created: "Monday, August 12, 2019 10:46 PM",
			tags: [
				'hr',
				'updates'
			],
			internal: true
		},
		{
			"_id": "5fb25b796334facaf3c54018",
			author: {
				picture: 'http://placehold.it/32x32',
				name: {
					first: "Mccoy",
					last: "Bender"
				}
			},
			title: "Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.",
			summary: "Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.",
			intro: "Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.",
			banner: "http://placehold.it/1920x1080",
			body: "Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.",
			assets: [
				{
					src: "http://placehold.it/720x480",
					alt: "Placeholder image 2",
					type: "image"
				},
				{
					src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf",
					alt: "Placeholder file 2",
					type: "file"
				},
				{
					src: "http://placehold.it/900x1200",
					alt: "Placeholder image 3",
					type: "image"
				}
			],
			created: "Monday, August 12, 2019 10:46 PM",
			tags: [
				'hr',
				'updates'
			],
			internal: true
		},
		{
			"_id": "5fb25b796334facaf3c54018",
			author: {
				picture: 'http://placehold.it/32x32',
				name: {
					first: "Mccoy",
					last: "Bender"
				}
			},
			title: "Magna aliquip nisi non culpa nisi amet ad ut dolore ex nostrud Lorem.",
			summary: "Eu ut anim dolor consectetur occaecat proident et sit consequat officia dolor pariatur laboris adipisicing. Aliqua nisi ipsum veniam anim sint duis excepteur nisi duis ullamco esse tempor cupidatat. Non et irure velit non. Sint dolore qui id velit consectetur voluptate culpa cillum consequat tempor ullamco in. Labore dolore do dolore sint veniam ex voluptate do magna ipsum sit quis tempor ipsum. Nisi et ullamco consequat cupidatat cupidatat irure excepteur quis nisi et nisi elit non.",
			intro: "Aliqua anim tempor ullamco adipisicing mollit ut occaecat ad excepteur deserunt qui veniam consectetur nisi. Amet reprehenderit nulla aute excepteur sunt. Sunt nisi id consectetur consectetur eiusmod nulla magna esse culpa enim minim ipsum consequat esse. Cillum eu ut mollit esse dolor cillum duis deserunt aute exercitation.",
			banner: "http://placehold.it/1920x1080",
			body: "Culpa excepteur aliquip irure id commodo sint est commodo minim aliquip adipisicing amet minim aliquip. Sit cupidatat ad commodo non reprehenderit. Exercitation magna commodo adipisicing laborum dolore officia dolore.\n\nLaborum dolor excepteur id esse ea laborum est. Ex nostrud irure minim enim aute esse veniam id velit laborum. Fugiat officia dolor Lorem velit. Nisi elit laboris elit ad consectetur do qui laboris veniam. Consequat ex incididunt in non aute sunt do ullamco. Irure exercitation veniam fugiat minim dolore minim veniam non dolore. Fugiat sunt aute aliquip enim velit.\n\nConsectetur enim eiusmod id aliqua nulla est. Laborum do tempor culpa proident amet ex elit ut nisi amet cupidatat adipisicing irure. Excepteur duis voluptate commodo culpa laboris tempor. Enim minim magna sint nostrud occaecat laborum reprehenderit sint cupidatat ea cillum in commodo magna.",
			assets: [
				{
					src: "http://placehold.it/720x480",
					alt: "Placeholder image 2",
					type: "image"
				},
				{
					src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Placeholder.pdf",
					alt: "Placeholder file 2",
					type: "file"
				},
				{
					src: "http://placehold.it/900x1200",
					alt: "Placeholder image 3",
					type: "image"
				}
			],
			created: "Monday, August 12, 2019 10:46 PM",
			tags: [
				'hr',
				'updates'
			],
			internal: true
		}
	];

}
