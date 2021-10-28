export declare interface IHandleConfirm {
	isChanged: boolean;
	isSaved: boolean;
	/**
	 * An interface for the method used by the
	 * guard-route.service to check wether it is
	 * allowed to navigate.
	 * @param cb The callback function provided to the method.
	 */
	handleConfirm(cb: () => void): void;
}
