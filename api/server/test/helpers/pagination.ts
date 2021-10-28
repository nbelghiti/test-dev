export const validatePagination = (body: any, next: boolean = false, previous: boolean = false): void => { // tslint:disable-line no-any
	expect(body).toBeDefined();
	expect(body).toBeObject();
	expect(body).toContainKeys([
		'items',
		'total',
		'pages',
		'page',
		'size',
	]);
	expect(body.items).toBeArray();
	expect(body.total).toBeNumber();
	expect(body.pages).toBeNumber();
	expect(body.page).toBeNumber();
	expect(body.size).toBeNumber();

	if (next) {
		expect(body).toContainKey('next');
		expect(body.next).toBeString();
	}
	if (previous) {
		expect(body).toContainKey('previous');
		expect(body.previous).toBeString();
	}
};
