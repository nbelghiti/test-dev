export const insertData = async (data: any, model: any, options: any = {}): Promise<any> => { // tslint:disable-line no-any
	for (const item of data) {
		await model.create(item, options);
	}
};

export const dropData = async (models: any): Promise<any> => { // tslint:disable-line no-any
	for (const model of models) {
		await model.sync({ force: true });
	}
};
