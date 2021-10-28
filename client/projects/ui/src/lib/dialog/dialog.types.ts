export interface IDialogActions {
	[key: string]: (_?) => any;
}

export interface IDialogData {
	[key: string]: any;
}

export interface IDialogResponse {
	message?: string;
	errors?: string[];
}

export interface IDialog {
	closeDialog: () => void;
	completeCallback?: (response?: IDialogResponse) => void;
	actions?: IDialogActions;
	data?: IDialogData;
	hasDescription?: Boolean;
}
